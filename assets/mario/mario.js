/* mario.js */
// Starts everything.
console.log("mario.js loaded");

function FullScreenMario() {
  console.log(">>>>> FullScreenMario initialized");

  var time_start = Date.now();

  // Thanks, Obama...
  ensureLocalStorage();

  // I keep this cute little mini-library for some handy functions
  TonedJS(true);

  // It's useful to keep references to the body
  window.body = document.body;
  window.bodystyle = body.style;

  // Know when to shut up
  window.verbosity = {
    Maps: false,
    Sounds: false,
  };

  // Oh, HTML5.
  // http://matt.scharley.me/2012/03/09/monkey-patch-name-ie.html
  if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function () {
        var funcNameRegex = /function\s([^(]{1,})\(/,
          results = (funcNameRegex).exec((this).toString());
        return (results && results.length > 1) ? results[1].trim() : "";
      },
      set: function (value) { }
    });
  }
  window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function (func) { setTimeout(func, timer); };
  window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.webkitCancelRequestAnimationFrame
    || window.mozCancelRequestAnimationFrame
    || window.oCancelRequestAnimationFrame
    || window.msCancelRequestAnimationFrame
    || clearTimeout;

  window.Uint8ClampedArray = window.Uint8ClampedArray
    || window.Uint8Array
    || Array;
  // Because the shiv will mess this up for sprites.js detection                          
  window.Uint8ArrayName = Uint8ClampedArray.name || "Uint8Array"; // ie

  // Resetting everything may take a while
  resetMeasurements();
  resetLibrary(); // A good 300+ ms right here
  resetCanvas();
  resetMaps();
  resetScenery();
  resetTriggers();
  resetSeed();
  resetSounds();

  // With that all set, set the map to World11.
  window.gameon = true;
  setMap(1, 1);

  // Load sounds after setting the map, since it uses clearAllTimeouts
  startLoadingSounds();

  log("It took " + (Date.now() - time_start) + " milliseconds to start.");
}

// To do: add in a real polyfill
function ensureLocalStorage() {
  var ls_ok = false;
  try {
    if (!window.hasOwnProperty("localStorage"))
      window.localStorage = { crappy: true };

    // Some browsers (mainly IE) won't allow it on a local machine anyway
    if (window.localStorage) ls_ok = true;
  }
  catch (err) {
    ls_ok = false;
  }
  if (!ls_ok) {
    var nope = document.body.innerText = "It seems your browser does not allow localStorage!";
    throw nope;
  }
}

/* Basic reset operations */
function resetMeasurements() {
  resetUnitsize(4);
  resetTimer(1000 / 60);
  // resetTimer(1000 / 10);

  window.jumplev1 = 32;
  window.jumplev2 = 64;
  window.ceillev = 88; // The floor is 88 spaces (11 blocks) below the yloc = 0 level
  window.ceilmax = 104; // The floor is 104 spaces (13 blocks) below the top of the screen (yloc = -16)
  window.castlev = -48;
  window.paused = true;

  resetGameScreen();
  if (!window.parentwindow) window.parentwindow = false;
}

// Unitsize is kept as a measure of how much to expand (typically 4)
function resetUnitsize(num) {
  window.unitsize = num;
  for (var i = 2; i <= 64; ++i) {
    window["unitsizet" + i] = unitsize * i;
    window["unitsized" + i] = unitsize / i;
  }
  window.scale = unitsized2; // Typically 2

  // Allow external gravity_change control (for web interface)
  if (typeof window.external_gravity_change !== 'undefined') {
    gravity_change = window.external_gravity_change;
  } else {
    gravity_change = 1.0; // Default value
  }

  window.gravity = round(12 * unitsize * gravity_change) / 100; // Typically .48
}

// Function to update gravity dynamically from external source
function updateGravity(newGravityChange) {
  window.external_gravity_change = newGravityChange;
  gravity_change = newGravityChange;

  // Always calculate from the base formula: 12 * unitsize * coefficient
  // This ensures we are scaling the original game gravity, not compounding previous changes.
  window.gravity = round(12 * unitsize * gravity_change) / 100;

  // CRITICAL: Also update map.gravity so it takes effect immediately in the physics loop
  // The upkeep.js physics engine uses character.gravity || map.gravity
  if (typeof map !== 'undefined' && map) {
    map.gravity = window.gravity;
  }

  // Update Mario's gravity (calls existing setMapGravity if available)
  if (typeof setMapGravity === 'function') {
    setMapGravity();
  } else if (typeof window.mario !== 'undefined' && mario) {
    // Fallback: directly update mario's gravity
    if (typeof map !== 'undefined' && map.underwater) {
      mario.gravity = window.gravity / 2.8;
    } else {
      mario.gravity = window.gravity;
    }
  }

  // Update all existing characters' gravity proportionally
  // Key fix: Use the original multiplier stored when the character was created
  if (typeof window.characters !== 'undefined' && characters && characters.length > 0) {
    for (var i = 0; i < characters.length; i++) {
      var char = characters[i];
      if (char && typeof char.gravity === 'number') {
        // If this character doesn't have a saved original multiplier, calculate and save it now
        // based on its current gravity relative to the default base gravity
        if (typeof char.gravityMult === 'undefined') {
          char.gravityMult = char.gravity / DEFAULT_BASE_GRAVITY;
        }

        // Now update gravity using: new_window.gravity * original_multiplier
        char.gravity = window.gravity * char.gravityMult;
      }
    }
  }

  console.log('[mario] Gravity updated to:', window.gravity, '(change factor:', newGravityChange, ', updated', (characters ? characters.length : 0), 'characters)');
}

// Expose updateGravity on the window explicitly so iframe parent can always call it
window.updateGravity = updateGravity;

// Global monster speed multiplier (default: 1.0 = normal speed)
// Expose to window so things.js can access it when creating new enemies
window.monster_speed_change = 1.0;

// Function to update monster speed dynamically from external source
// This only affects enemies/monsters, NOT Mario
function updateMonsterSpeed(newSpeedMultiplier) {
  window.monster_speed_change = newSpeedMultiplier;

  console.log('[mario] Monster speed multiplier set to:', window.monster_speed_change, 'x');

  // Update all existing enemy characters' speed
  if (typeof window.characters !== 'undefined' && characters && characters.length > 0) {
    for (var i = 0; i < characters.length; i++) {
      var char = characters[i];
      // Only update enemies (check if character is in 'enemy' group)
      // Skip Mario and other non-enemy characters
      if (char && char.group === 'enemy' && typeof char.speed === 'number') {
        // Store original base speed on first update
        if (typeof char.baseSpeed === 'undefined') {
          char.baseSpeed = char.speed / (window.monster_speed_change || 1.0);
        }

        // Update speed: base_speed * multiplier
        char.speed = char.baseSpeed * window.monster_speed_change;

        // Also update xvel if the enemy is moving
        if (char.xvel !== 0) {
          var direction = char.xvel > 0 ? 1 : -1;
          char.xvel = char.speed * direction;
        }
      }
    }
  }

  // Also update pre-spawned characters (waiting to enter screen)
  if (typeof window.area !== 'undefined' && window.area && window.area.precharacters) {
    var prechars = window.area.precharacters;
    var updatedPre = 0;
    for (var i = 0; i < prechars.length; i++) {
      var prething = prechars[i];
      if (prething && prething.object) {
        var char = prething.object;
        if (char.group === 'enemy') {
          // Ensure baseSpeed is set (it should be from constructor, but just in case)
          if (typeof char.baseSpeed === 'undefined' && typeof char.speed === 'number') {
            char.baseSpeed = char.speed;
          }

          if (typeof char.baseSpeed === 'number') {
            char.speed = char.baseSpeed * window.monster_speed_change;
            // For Koopa/Beetle/BulletBill that set xvel in constructor
            if (typeof char.xvel === 'number' && char.xvel !== 0) {
              // If xvel matches baseSpeed (magnitude), update it
              if (Math.abs(char.xvel) === char.baseSpeed) {
                char.xvel = char.speed * (char.xvel > 0 ? 1 : -1);
              } else {
                // Just set it to speed if it was non-zero
                char.xvel = char.speed * (char.xvel > 0 ? 1 : -1);
              }
            }
            updatedPre++;
          }
        }
      }
    }
    console.log('[mario] Updated', updatedPre, 'pre-spawned enemies');
  }

  console.log('[mario] Monster speed updated (affected',
    (characters ? characters.filter(c => c && c.group === 'enemy').length : 0), 'existing enemies)');
}

// Expose updateMonsterSpeed on the window so parent iframe can call it
window.updateMonsterSpeed = updateMonsterSpeed;

function resetTimer(num) {
  num = roundDigit(num, .001);
  window.timer = window.timernorm = num;
  window.timert2 = num * 2;
  window.timerd2 = num / 2;
  window.fps = window.fps_target = roundDigit(1000 / num, .001);
  window.time_prev = Date.now();
}

function resetGameScreen() {
  window.gamescreen = new getGameScreen();
}
function getGameScreen() {
  resetGameScreenPosition(this);
  // Middlex is static and only used for scrolling to the right
  this.middlex = (this.left + this.right) / 2;
  // this.middlex = (this.left + this.right) / 3;

  // This is the bottom of the screen - water, pipes, etc. go until here
  window.botmax = this.height - ceilmax;
  if (botmax < unitsize) {
    body.innerHTML = "<div><br>Your screen isn't high enough. Make it taller, then refresh.</div>";
  }

  // The distance at which Things die from falling
  this.deathheight = this.bottom + 48;
}
function resetGameScreenPosition(me) {
  me = me || window.gamescreen;
  me.left = me.top = 0;
  me.bottom = innerHeight;
  me.right = innerWidth;
  me.height = innerHeight / unitsize;
  me.width = innerWidth / unitsize;
  me.unitheight = innerHeight;
  me.unitwidth = innerWidth;
}

// Variables regarding the state of the game
// This is called in setMap to reset everything
function resetGameState(nocount) {
  // HTML is reset here
  clearAllTimeouts();
  // Also reset data
  resetData();
  window.nokeys = window.spawning = window.spawnon =
    window.notime = window.editing = window.qcount = window.lastscroll = 0;
  window.paused = window.gameon = true;
  // Shifting location shouldn't wipe the gamecount (for key histories)
  if (!nocount) window.gamecount = 0;
  // And quadrants
  resetQuadrants();
  // Keep a history of pressed keys
  window.gamehistory = [];
  // Keep a history of pressed keys
  window.gamehistory = [];
  // Clear audio
  pauseAllSounds();
  sounds = {};
}

function scrollWindow(x, y) {
  x = x || 0; y = y || 0;
  var xinv = -x, yinv = -y;

  gamescreen.left += x; gamescreen.right += x;
  gamescreen.top += y; gamescreen.bottom += y;

  shiftAll(characters, xinv, yinv);
  shiftAll(solids, xinv, yinv);
  shiftAll(scenery, xinv, yinv);
  shiftAll(quads, xinv, yinv);
  shiftElements(texts, xinv, yinv);
  updateQuads(xinv);

  if (window.playediting) scrollEditor(x, y);
}
function shiftAll(stuff, x, y) {
  for (var i = stuff.length - 1; i >= 0; --i)
    shiftBoth(stuff[i], x, y);
}
function shiftElements(stuff, x, y) {
  for (var i = stuff.length - 1, elem; i >= 0; --i) {
    elem = stuff[i];
    elementShiftLeft(elem, x);
    elementShiftTop(elem, y);
  }
}

// Similar to scrollWindow, but saves mario's x-loc
function scrollMario(x, y, see) {
  var saveleft = mario.left,
    savetop = mario.top;
  y = y || 0;
  scrollWindow(x, y);
  setLeft(mario, saveleft, see);
  setTop(mario, savetop + y * unitsize, see);
  updateQuads();
}

// Calls log if window.verbosity has the type enabled
function mlog(type) {
  if (verbosity[type]) {
    log.apply(console, arguments);
  }
}
