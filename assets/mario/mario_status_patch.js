/*
 * Mario game status monitoring patch
 * Run after mario.js is loaded to ensure game status variables are exposed
 */

(function () {
    console.log("Mario status monitor patch loading...");

    // Initialize immediately (no waiting)
    function initializeStatusMonitor() {
        console.log("Initializing Mario status monitor...");

        // Provide a unified game status interface
        // Game is running when: mario exists && mario is alive && not dead && game is on && not paused
        Object.defineProperty(window, 'marioGameStatus', {
            get: function () {
                if (!window.mario) return false;

                // mario.alive: whether alive
                // mario.dead: whether dead
                // mario.dying: whether in dying state
                // window.gameon: whether the game is started
                // window.paused: whether the game is paused

                var alive = window.mario.alive !== false;
                var notDead = !window.mario.dead;
                var notDying = !window.mario.dying;
                var gameRunning = window.gameon === true;
                var notPaused = window.paused === false;

                return alive && notDead && notDying && gameRunning && notPaused;
            },
            configurable: true
        });

        // Extra debug helper
        Object.defineProperty(window, 'marioIsAlive', {
            get: function () {
                if (!window.mario) return false;
                return window.mario.alive !== false && !window.mario.dead && !window.mario.dying;
            },
            configurable: true
        });

        console.log("Mario status monitor initialized, marioGameStatus type:", typeof window.marioGameStatus);
    }

    // Initialize immediately
    initializeStatusMonitor();
    console.log("Mario status monitor patch loaded");
})();
