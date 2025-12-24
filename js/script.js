const CLIP_METADATA = {
    '3NinjasKickBack-Genesis.gif': '3 Ninjas Kick Back',
    'DimensionForce-Snes.gif': 'Dimension Force',
    'Satellite7-Sms.gif': 'Satellite 7',
    'ThunderSpirits-Snes.gif': 'Thunder Spirits'
};

const DEFAULT_CLIPS = [
    '3NinjasKickBack-Genesis.gif',
    'DimensionForce-Snes.gif',
    'Satellite7-Sms.gif',
    'ThunderSpirits-Snes.gif'
];

const MODEL_GALLERY_DATA = [
    {
        id: 'Qwen3-VL-30B-A3B',
        label: 'Qwen3-VL-30B-A3B',
        folder: 'assets/gifs/Qwen3-VL-30B-A3B',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'PPO',
        label: 'PPO',
        folder: 'assets/gifs/PPO',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'DQN',
        label: 'DQN',
        folder: 'assets/gifs/DQN',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'IL',
        label: 'ACT',
        folder: 'assets/gifs/IL',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'Genie',
        label: 'Genie',
        folder: 'assets/gifs/Genie',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'DreamerV3',
        label: 'DreamerV3',
        folder: 'assets/gifs/DreamerV3',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'V-JEPA2',
        label: 'V-JEPA2',
        folder: 'assets/gifs/V-JEPA2',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'GPT-4o',
        label: 'GPT-4o',
        folder: 'assets/gifs/GPT-4o',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'GPT-5',
        label: 'GPT-5',
        folder: 'assets/gifs/GPT-5',
        clips: [...DEFAULT_CLIPS]
    },
    {
        id: 'IPR',
        label: 'IPR',
        folder: 'assets/gifs/IPR',
        clips: [...DEFAULT_CLIPS]
    }
];

const LEADERBOARD_METRICS = [
    { key: 'survival', label: 'Survival' },
    { key: 'curiosity', label: 'Curiosity' },
    { key: 'utility', label: 'Utility' }
];

const SHARED_METHODS = [
    // 统一规则：使用论文表格的 Overall Mean × 100
    { name: 'ACT-BC\n(25M)', values: { survival: 8.8, curiosity: 79.3, utility: 25.5 } },
    { name: 'Qwen3-VL\n(8B SFT)', values: { survival: 9.9, curiosity: 81.2, utility: 36.8 } }
];

const IPR_METHODS = [
    {
        name: 'IPR\n(8B)',
        // Qwen3-VL-8B w/ IPR：Overall Mean × 100
        values: { survival: 25.2, curiosity: 117.3, utility: 49.3 },
        highlight: true
    }
];

const OBJECTIVE_SPECIFIC_METHODS = {
    survival: [
        // 对应表格中的 PPO@survival 等：三列均为各自 Mean × 100
        { name: 'PPO\n(150M)', values: { survival: 12.5, curiosity: 23.3, utility: 58.8 } },
        { name: 'DQN\n(120M)', values: { survival: 12.1, curiosity: 85.6, utility: 49.7 } },
        { name: 'DreamerV3\n(200M)', values: { survival: 10.2, curiosity: 112.0, utility: 29.8 } },
        { name: 'V-JEPA2\n(600M)', values: { survival: 10.2, curiosity: 115.0, utility: 19.1 } },
        { name: 'Genie\n(3B)', values: { survival: 10.8, curiosity: 119.8, utility: 12.8 } },
        { name: 'GPT-4o\n(>1T)', values: { survival: 10.8, curiosity: 3.9, utility: 30.2 } },
        { name: 'GPT-5\n(>1T)', values: { survival: 14.0, curiosity: 12.7, utility: 26.3 } },
        { name: 'Qwen3-VL\n(30B-A3B)', values: { survival: 9.1, curiosity: 32.5, utility: 28.9 } }
    ],
    curiosity: [
        // 对应表格中的 PPO@curiosity 等：三列均为各自 Mean × 100
        { name: 'PPO\n(150M)', values: { survival: 11.4, curiosity: 19.0, utility: 60.9 } },
        { name: 'DQN\n(120M)', values: { survival: 13.1, curiosity: 77.2, utility: 42.4 } },
        { name: 'DreamerV3\n(200M)', values: { survival: 10.8, curiosity: 116.1, utility: 23.5 } },
        { name: 'V-JEPA2\n(600M)', values: { survival: 10.0, curiosity: 140.2, utility: 14.6 } },
        { name: 'Genie\n(3B)', values: { survival: 10.4, curiosity: 137.4, utility: 10.0 } },
        { name: 'GPT-4o\n(>1T)', values: { survival: 7.9, curiosity: 36.8, utility: 18.6 } },
        { name: 'GPT-5\n(>1T)', values: { survival: 9.3, curiosity: 29.8, utility: 33.3 } },
        { name: 'Qwen3-VL\n(30B-A3B)', values: { survival: 8.6, curiosity: 87.8, utility: 15.5 } }
    ],
    utility: [
        // 对应表格中的 PPO@utility 等：三列均为各自 Mean × 100
        { name: 'PPO\n(150M)', values: { survival: 12.0, curiosity: 22.0, utility: 53.4 } },
        { name: 'DQN\n(120M)', values: { survival: 12.5, curiosity: 62.0, utility: 44.5 } },
        { name: 'DreamerV3\n(200M)', values: { survival: 9.7, curiosity: 96.4, utility: 13.9 } },
        { name: 'V-JEPA2\n(600M)', values: { survival: 10.2, curiosity: 113.6, utility: 15.2 } },
        { name: 'Genie\n(3B)', values: { survival: 11.0, curiosity: 124.8, utility: 12.2 } },
        { name: 'GPT-4o\n(>1T)', values: { survival: 8.7, curiosity: 31.9, utility: 33.7 } },
        { name: 'GPT-5\n(>1T)', values: { survival: 10.8, curiosity: 18.5, utility: 37.1 } },
        { name: 'Qwen3-VL\n(30B-A3B)', values: { survival: 10.8, curiosity: 52.8, utility: 28.5 } }
    ]
};

const BASELINE_GUIDES = [
    { id: 'baseline-random', label: 'Random', value: 1 },
    { id: 'baseline-human', label: 'Human', value: 100 }
];

document.addEventListener('DOMContentLoaded', function () {
    initModelGallery();
    initLeaderboardChart();
    initAaaGamePerformance();
    initLagVideos();
    // Copy Citation Functionality
    const copyBtn = document.getElementById('copy-citation');
    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            const bibtexCode = this.previousElementSibling.querySelector('code').textContent;

            navigator.clipboard.writeText(bibtexCode).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Lazy Load Videos
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.dataset.src) {
                    video.src = video.dataset.src;
                    video.load();
                    try {
                        const p = video.play();
                        if (p && typeof p.catch === 'function') p.catch(() => { });
                    } catch (e) { }
                }
                videoObserver.unobserve(video);
            }
        });
    }, {
        rootMargin: '50px'
    });

    videos.forEach(video => {
        videoObserver.observe(video);
    });

    // （占位的 Interactive Demo 弹窗逻辑已移除，下面是真实的马里奥控制）

    // Mario Game Gravity Control
    const gravitySlider = document.getElementById('gravity-slider');
    const gravityValue = document.getElementById('gravity-value');
    const resetGameBtn = document.getElementById('reset-game');
    const marioIframe = document.getElementById('mario-game');

    // Monster Speed Control
    const monsterSpeedSlider = document.getElementById('monster-speed-slider');
    const monsterSpeedValue = document.getElementById('monster-speed-value');

    // Debounce timer for live updates
    let gravityDebounce = null;
    let monsterSpeedDebounce = null;

    // Update display value and apply changes in real-time when gravity slider changes
    if (gravitySlider && gravityValue) {
        gravitySlider.addEventListener('input', function () {
            gravityValue.textContent = this.value;
            // Send live updates to the Mario iframe (debounced for performance)
            try {
                const val = parseFloat(this.value);
                if (marioIframe && marioIframe.contentWindow && typeof marioIframe.contentWindow.updateGravity === 'function') {
                    clearTimeout(gravityDebounce);
                    gravityDebounce = setTimeout(() => {
                        try {
                            marioIframe.contentWindow.updateGravity(val);
                        } catch (err) {
                            console.error('Failed to send live gravity to iframe:', err);
                        }
                    }, 50);
                }
            } catch (err) {
                console.error('Error during live gravity update:', err);
            }
        });
    }

    // Update display value and apply changes in real-time when monster speed slider changes
    if (monsterSpeedSlider && monsterSpeedValue) {
        monsterSpeedSlider.addEventListener('input', function () {
            monsterSpeedValue.textContent = this.value;
            // Send live updates to the Mario iframe (debounced for performance)
            try {
                const val = parseFloat(this.value);
                if (marioIframe && marioIframe.contentWindow && typeof marioIframe.contentWindow.updateMonsterSpeed === 'function') {
                    clearTimeout(monsterSpeedDebounce);
                    monsterSpeedDebounce = setTimeout(() => {
                        try {
                            marioIframe.contentWindow.updateMonsterSpeed(val);
                        } catch (err) {
                            console.error('Failed to send live monster speed to iframe:', err);
                        }
                    }, 50);
                }
            } catch (err) {
                console.error('Error during live monster speed update:', err);
            }
        });
    }

    // Reset game
    if (resetGameBtn && marioIframe) {
        resetGameBtn.addEventListener('click', function () {
            // Store current slider values
            const currentGravity = parseFloat(gravitySlider.value);
            const currentMonsterSpeed = parseFloat(monsterSpeedSlider.value);

            // Reload iframe
            const onLoad = () => {
                try {
                    const iframeWindow = marioIframe.contentWindow;
                    // Reapply current settings after reload
                    if (iframeWindow) {
                        if (typeof iframeWindow.updateGravity === 'function') {
                            iframeWindow.updateGravity(currentGravity);
                        }
                        if (typeof iframeWindow.updateMonsterSpeed === 'function') {
                            iframeWindow.updateMonsterSpeed(currentMonsterSpeed);
                        }
                    }
                } catch (err) {
                    console.error('Error reapplying settings after reset:', err);
                } finally {
                    marioIframe.removeEventListener('load', onLoad);
                }
            };
            marioIframe.addEventListener('load', onLoad);
            marioIframe.src = marioIframe.src;

            // Visual feedback
            this.textContent = 'Resetting...';
            setTimeout(() => {
                this.textContent = 'Reset Game';
            }, 1000);
        });
    }

    // 确保 iframe 获取焦点，这样游戏可以接收键盘事件
    try {
        if (marioIframe && marioIframe.contentWindow) {
            marioIframe.contentWindow.focus();
        }
    } catch (e) {
        console.error('[VLM Mario] 聚焦 iframe 失败:', e);
    }

    // 初始化 VLM 演示面板（自动探测后端；可自动启动）
    try {
        initVlmDemoUi();
    } catch (e) {
        console.error('[VLM Mario] 初始化 VLM 面板失败:', e);
    }
});

// Reference videos (collapse + loop)
function initLagVideos() {
    const toggleBtn = document.getElementById('lag-video-toggle');
    const panel = document.getElementById('lag-video-panel');
    if (!toggleBtn || !panel) return;

    let loaded = false;

    const ensureLoadAndPlay = () => {
        const videos = Array.from(panel.querySelectorAll('video'));
        videos.forEach(v => {
            if (!v.src) {
                const ds = v.dataset.src;
                if (ds) v.src = ds;
            }
            v.loop = true;
            v.muted = true;
            v.playsInline = true;
            try {
                v.play().catch(() => { });
            } catch (e) { }
        });
        loaded = true;
    };

    toggleBtn.addEventListener('click', () => {
        const isHidden = panel.style.display === 'none' || panel.style.display === '';
        panel.style.display = isHidden ? 'grid' : 'none';
        toggleBtn.textContent = isHidden ? 'Hide reference videos' : 'Show reference videos';
        if (isHidden && !loaded) {
            ensureLoadAndPlay();
        }
        if (!isHidden) {
            const videos = Array.from(panel.querySelectorAll('video'));
            videos.forEach(v => {
                try { v.pause(); } catch { }
            });
        }
    });
}

function initAaaGamePerformance() {
    initAaaCasePagers();
}

function initAaaCasePagers() {
    const cases = Array.from(document.querySelectorAll('.aaa-case[data-aaa-case]'));
    if (cases.length === 0) return;

    const perPage = 2;

    cases.forEach((caseEl) => {
        const grid = caseEl.querySelector('.aaa-grid');
        const items = grid ? Array.from(grid.querySelectorAll('.aaa-card')) : [];
        const pager = caseEl.querySelector('[data-aaa-pager]');
        const prevBtn = pager ? pager.querySelector('[data-aaa-prev]') : null;
        const nextBtn = pager ? pager.querySelector('[data-aaa-next]') : null;
        const statusEl = pager ? pager.querySelector('[data-aaa-status]') : null;

        const totalPages = Math.max(1, Math.ceil(items.length / perPage));
        let pageIndex = 0;

        const render = () => {
            items.forEach((item, idx) => {
                const visible = Math.floor(idx / perPage) === pageIndex;
                item.style.display = visible ? '' : 'none';
                const v = item.querySelector('video');
                if (v) {
                    try {
                        if (!visible) v.pause();
                        if (visible && v.src) v.play().catch(() => { });
                    } catch { }
                }
            });

            if (statusEl) statusEl.textContent = `${pageIndex + 1} / ${totalPages}`;
            if (prevBtn) prevBtn.disabled = pageIndex <= 0;
            if (nextBtn) nextBtn.disabled = pageIndex >= totalPages - 1;
        };

        if (!pager || totalPages <= 1) {
            if (pager) pager.style.display = 'none';
            return;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                pageIndex = Math.max(0, pageIndex - 1);
                render();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                pageIndex = Math.min(totalPages - 1, pageIndex + 1);
                render();
            });
        }

        render();
    });
}

// =======================
// Mario 键盘动作封装
// =======================

// 发送一个键盘事件到 mario iframe
function sendMarioKey(eventType, key, code) {
    const iframe = document.getElementById('mario-game');
    const iframeWindow = iframe?.contentWindow;
    if (!iframeWindow) return;

    const controls = iframeWindow.controls;
    const mario = iframeWindow.mario;
    const keyCode = keyToKeyCode(key, code);

    // 如果游戏已经初始化（有 controls 和 mario.keys），直接调用内部按键映射
    if (controls && mario && mario.keys && keyCode !== null) {
        const table =
            eventType === 'keydown'
                ? controls.keydown
                : eventType === 'keyup'
                    ? controls.keyup
                    : null;
        const fn = table && table[keyCode];
        if (typeof fn === 'function') {
            fn(mario.keys);
            return;
        }
    }

    // 如果 controls 尚未初始化，退回到派发 KeyboardEvent（老逻辑）
    try {
        const event = new KeyboardEvent(eventType, {
            key,
            code,
            bubbles: true,
            cancelable: true
        });
        iframeWindow.document.dispatchEvent(event);
        iframeWindow.dispatchEvent(event);
    } catch (e) {
        console.error('[VLM Mario] sendMarioKey fallback error:', e);
    }
}

function keyToKeyCode(key, code) {
    const mapping = {
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Space: 32,
        ' ': 32
    };

    if (key in mapping) return mapping[key];
    if (code in mapping) return mapping[code];
    return null;
}

// 按住某个键一小段时间后自动松开
// 默认按住 500ms，保证动作在画面上更明显
function tapMarioKey(key, code, holdMs = 500) {
    sendMarioKey('keydown', key, code);
    setTimeout(() => {
        sendMarioKey('keyup', key, code);
    }, holdMs);
}

// 高层动作接口：将动作字符串转换为具体按键序列
// 支持格式：ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowRight+ArrowUp 等
// 返回本次动作持续的时间（毫秒），以便下一轮 VLM 调用在动作结束后立刻进行
function poseMarioAction(action) {
    console.log('[VLM Mario] 执行动作:', action);
    // 默认动作持续 500ms
    let durationMs = 500;

    // 处理组合键（例如 "ArrowRight+ArrowUp"）
    if (action.includes('+')) {
        const keys = action.split('+').map(k => k.trim());
        const keyCodes = keys.map(key => {
            // 映射到 keyToKeyCode 函数能识别的格式
            if (key === 'ArrowLeft') return { key: 'ArrowLeft', code: 'ArrowLeft' };
            if (key === 'ArrowRight') return { key: 'ArrowRight', code: 'ArrowRight' };
            // Jump：游戏里对应空格键（单键逻辑也是这样做的）
            if (key === 'ArrowUp') return { key: ' ', code: 'Space' };
            if (key === 'ArrowDown') return { key: 'ArrowDown', code: 'ArrowDown' };
            return null;
        }).filter(k => k !== null);

        // 同时按下所有键
        keyCodes.forEach(kc => {
            sendMarioKey('keydown', kc.key, kc.code);
        });

        // 500ms 后同时释放所有键
        setTimeout(() => {
            keyCodes.forEach(kc => {
                sendMarioKey('keyup', kc.key, kc.code);
            });
        }, durationMs);
    } else {
        // 处理单个键
        switch (action) {
            case 'ArrowLeft':
                tapMarioKey('ArrowLeft', 'ArrowLeft', durationMs);
                break;
            case 'ArrowRight':
                tapMarioKey('ArrowRight', 'ArrowRight', durationMs);
                break;
            case 'ArrowUp':
                // ArrowUp 对应跳跃（空格键）
                tapMarioKey(' ', 'Space', durationMs);
                break;
            case 'ArrowDown':
                tapMarioKey('ArrowDown', 'ArrowDown', durationMs);
                break;
            default:
                // 未知动作：当作 idle 处理，不做任何按键
                console.warn('[VLM Mario] 未知动作:', action);
                durationMs = 500;
                break;
        }
    }

    return durationMs;
}

// =======================
// VLM 控制循环（调用 Qwen）
// =======================

let vlmAgentRunning = false;
let vlmLoopTimer = null;
let vlmBackendBase = null;
let vlmStepUrl = null;
let vlmHealthUrl = null;
let humanInputTimer = null;
let humanInputActive = false;

function setBadge(id, text, kind) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.classList.remove('vlm-badge-ok', 'vlm-badge-warn');
    if (kind === 'ok') el.classList.add('vlm-badge-ok');
    if (kind === 'warn') el.classList.add('vlm-badge-warn');
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHumanInputActive(active) {
    humanInputActive = !!active;
    const badge = document.getElementById('vlm-human');
    if (!badge) return;
    badge.classList.toggle('is-hidden', !humanInputActive);
    badge.classList.toggle('vlm-badge-human-active', humanInputActive);
}

function markHumanInput() {
    setHumanInputActive(true);
    if (humanInputTimer) clearTimeout(humanInputTimer);
    humanInputTimer = setTimeout(() => setHumanInputActive(false), 1200);
}

function setVlmIndicator(on) {
    const el = document.getElementById('vlm-indicator');
    if (el) el.classList.toggle('vlm-indicator-on', !!on);

    const frame = document.getElementById('mario-frame-wrapper');
    if (frame) frame.classList.toggle('vlm-active', !!on);
}

function attachHumanInputMonitor() {
    const iframe = document.getElementById('mario-game');
    const w = iframe?.contentWindow;
    const d = w?.document;
    if (!w || !d) return;

    const onAnyInput = (ev) => {
        // 只标记真实的人类输入，忽略脚本派发的事件（VLM 按键）
        if (ev && ev.isTrusted !== true) return;
        markHumanInput();
    };

    // 避免重复绑定
    if (w.__IPR_HUMAN_MONITOR_ATTACHED__) return;
    w.__IPR_HUMAN_MONITOR_ATTACHED__ = true;

    d.addEventListener('keydown', onAnyInput, true);
    d.addEventListener('keyup', onAnyInput, true);
    d.addEventListener('pointerdown', onAnyInput, true);
    d.addEventListener('mousedown', onAnyInput, true);
    d.addEventListener('wheel', onAnyInput, { capture: true, passive: true });
    d.addEventListener('touchstart', onAnyInput, { capture: true, passive: true });
}

async function probeVlmBackend() {
    const candidates = [
        { base: '', health: '/health', step: '/qwen_step', label: 'same-origin' },
        { base: 'http://localhost:8001', health: '/health', step: '/qwen_step', label: 'localhost:8001' }
    ];

    const tryOne = async (c) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 800);
        try {
            const resp = await fetch(c.base + c.health, { method: 'GET', signal: controller.signal });
            if (!resp.ok) return null;
            const data = await resp.json().catch(() => ({}));
            if (!data || data.ok !== true) return null;
            return { ...c, healthData: data };
        } catch {
            return null;
        } finally {
            clearTimeout(timer);
        }
    };

    for (const c of candidates) {
        const ok = await tryOne(c);
        if (ok) return ok;
    }
    return null;
}

function humanizeAction(action) {
    const a = String(action || '').trim();
    if (!a || a.toLowerCase() === 'idle') return '-';
    const map = {
        ArrowLeft: '←',
        ArrowRight: '→',
        ArrowDown: '↓',
        ArrowUp: 'Jump',
        'ArrowRight+ArrowUp': '→ + Jump',
        'ArrowLeft+ArrowUp': '← + Jump',
        'ArrowRight+ArrowDown': '→ + ↓',
        'ArrowLeft+ArrowDown': '← + ↓'
    };
    return map[a] || a;
}

async function ensureVlmBackend() {
    const healthCheck = async (url) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 800);
        try {
            const resp = await fetch(url, { method: 'GET', signal: controller.signal });
            if (!resp.ok) return false;
            const data = await resp.json().catch(() => ({}));
            return !!data?.ok;
        } catch {
            return false;
        } finally {
            clearTimeout(timer);
        }
    };

    if (vlmHealthUrl && vlmStepUrl) {
        const ok = await healthCheck(vlmHealthUrl);
        setBadge('vlm-conn', ok ? 'Backend: connected' : 'Backend: offline', ok ? 'ok' : 'warn');
        return ok;
    }

    const found = await probeVlmBackend();
    if (!found) {
        vlmBackendBase = null;
        vlmStepUrl = null;
        vlmHealthUrl = null;
        setBadge('vlm-conn', 'Backend: offline', 'warn');
        return false;
    }

    vlmBackendBase = found.base;
    vlmStepUrl = found.base + found.step;
    vlmHealthUrl = found.base + found.health;
    setBadge('vlm-conn', 'Backend: connected', 'ok');
    return true;
}

function setVlmRunning(running) {
    vlmAgentRunning = running;
    const btn = document.getElementById('vlm-toggle');
    if (btn) btn.textContent = running ? 'Stop IPR' : 'Start IPR';
    setText('vlm-status', running ? 'IPR: playing' : 'IPR: stopped');
    setVlmIndicator(running);
    if (!running && vlmLoopTimer) {
        clearTimeout(vlmLoopTimer);
        vlmLoopTimer = null;
    }
}

async function requestVlmAction() {
    const ok = await ensureVlmBackend();
    if (!ok) return { action: 'idle', latency_ms: null, mode: null, parsed_ok: false };

    const iframe = document.getElementById('mario-game');
    const gravitySlider = document.getElementById('gravity-slider');
    if (!iframe || !gravitySlider) throw new Error('Mario iframe or gravity slider not found.');

    const iframeWindow = iframe.contentWindow;
    let imageDataUrl = null;
    if (iframeWindow && typeof iframeWindow.captureFrame === 'function') {
        imageDataUrl = iframeWindow.captureFrame();
    }

    const gravity = parseFloat(gravitySlider.value || '0.5');
    const resp = await fetch(vlmStepUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            image: imageDataUrl,
            gravity: gravity
        })
    });

    if (!resp.ok) {
        throw new Error(`qwen_step HTTP ${resp.status} ${resp.statusText}`);
    }
    const data = await resp.json();
    return data || { action: 'idle' };
}

// 单步循环：截帧 -> 请求 Qwen -> 执行动作
async function runVlmLoop() {
    if (!vlmAgentRunning) return;

    let action = 'idle'; // 默认动作：任何失败都退回到 idle（不按键，只观察）

    try {
        const data = await requestVlmAction();
        if (data && typeof data.action === 'string') {
            action = data.action;
        }
        setText('vlm-action', `Decision: ${humanizeAction(action)}`);
    } catch (err) {
        console.error('[VLM Mario] runVlmLoop error, fallback to idle:', err);
        setBadge('vlm-conn', 'Backend: error', 'warn');
    }

    // 执行动作（包括失败时的 jump_right），并获取动作持续时间
    const durationMs = poseMarioAction(action);
    const execTs = Date.now();
    const nextTs = new Date(execTs + durationMs).toISOString();
    console.log(`[VLM Mario] ${new Date(execTs).toISOString()} execute action: ${action}, duration=${durationMs}ms, next_request_at=${nextTs}`);

    // 下一轮：在本次动作结束后立刻进行下一步 VLM 调用
    vlmLoopTimer = setTimeout(runVlmLoop, durationMs);
}

function initVlmDemoUi() {
    const toggleBtn = document.getElementById('vlm-toggle');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', async () => {
            if (vlmAgentRunning) {
                setVlmRunning(false);
                return;
            }
            const ok = await ensureVlmBackend();
            if (!ok) return;
            setVlmRunning(true);
            runVlmLoop();
        });
    }

    // 探测后端（不自动开跑）；离线时也会持续刷新状态
    setVlmRunning(false);
    ensureVlmBackend();
    setInterval(ensureVlmBackend, 1500);

    // 监听人类输入（只统计 isTrusted 事件）
    setHumanInputActive(false);
    const iframe = document.getElementById('mario-game');
    if (iframe) {
        iframe.addEventListener('load', () => {
            try {
                attachHumanInputMonitor();
            } catch (e) {
                console.warn('[VLM Mario] attachHumanInputMonitor failed:', e);
            }
        });
        // 尝试立即绑定一次（iframe 已加载时）
        setTimeout(() => {
            try {
                attachHumanInputMonitor();
            } catch (e) { }
        }, 300);
    }
}

function initModelGallery() {
    const buttonGroup = document.getElementById('model-button-group');
    const iprGrid = document.getElementById('model-gif-grid-ipr');
    const otherGrid = document.getElementById('model-gif-grid-other');
    const statusText = document.getElementById('gallery-status');
    const btnPrev = document.getElementById('gallery-prev');
    const btnNext = document.getElementById('gallery-next');

    if (!buttonGroup || !iprGrid || !otherGrid || !statusText || MODEL_GALLERY_DATA.length === 0) {
        return;
    }

    const formatClipLabel = (clipFile) => {
        const meta = CLIP_METADATA[clipFile];
        if (meta) {
            return meta.replace(/\s*\([^)]*\)\s*/g, '').trim();
        }

        let base = clipFile.replace(/\.gif$/i, '');
        base = base.replace(/-[A-Za-z0-9]+$/, '');
        base = base
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/([A-Za-z])(\d)/g, '$1 $2')
            .replace(/(\d)([A-Za-z])/g, '$1 $2');
        return base.trim();
    };

    const findModelById = (id) => MODEL_GALLERY_DATA.find(m => m.id === id);
    const IPR_MODEL = findModelById('IPR');
    if (!IPR_MODEL) return;

    const originIndex = new Map(MODEL_GALLERY_DATA.map((m, i) => [m.id, i]));
    const gptPriority = new Map([
        ['GPT-5', 0],
        ['GPT-4o', 1]
    ]);
    const selectableModels = MODEL_GALLERY_DATA
        .filter(m => m.id !== 'IPR')
        .slice()
        .sort((a, b) => {
            const aPri = gptPriority.has(a.id) ? gptPriority.get(a.id) : Number.POSITIVE_INFINITY;
            const bPri = gptPriority.has(b.id) ? gptPriority.get(b.id) : Number.POSITIVE_INFINITY;
            if (aPri !== bPri) return aPri - bPri;
            return (originIndex.get(a.id) ?? 0) - (originIndex.get(b.id) ?? 0);
        });

    if (selectableModels.length === 0) {
        statusText.textContent = 'Gallery unavailable (no comparison models found).';
        return;
    }

    let activeIndex = 0; // 选中的“其他模型”索引（selectableModels）
    let pageIndex = 0;   // 当前页：0..totalPages-1
    const buttons = [];

    const perPage = 4;
    const baseClips = Array.from(new Set(IPR_MODEL.clips || []));
    const totalPages = Math.max(1, Math.ceil(baseClips.length / perPage));

    const setActiveButton = (newIndex) => {
        activeIndex = newIndex;
        buttons.forEach((btn, idx) => {
            const isActive = idx === activeIndex;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        renderPage();
    };

    const buildPageClips = () => {
        const start = (pageIndex % totalPages) * perPage;
        return baseClips.slice(start, start + perPage);
    };

    const renderRow = (gridEl, folder, clips, modelLabel) => {
        gridEl.innerHTML = '';
        clips.forEach((clipFile) => {
            const figure = document.createElement('figure');
            figure.className = 'gif-card';

            const media = document.createElement('div');
            media.className = 'gif-media';

            const img = document.createElement('img');
            img.src = `${folder}/${clipFile}`;
            img.alt = `${modelLabel} playing ${formatClipLabel(clipFile)}`;
            img.loading = 'lazy';

            const caption = document.createElement('figcaption');
            caption.textContent = formatClipLabel(clipFile);

            media.appendChild(img);
            figure.appendChild(media);
            figure.appendChild(caption);
            gridEl.appendChild(figure);
        });
    };

    const renderPage = () => {
        const otherModel = selectableModels[activeIndex];
        const pageClips = buildPageClips();

        // 顶部：IPR 行
        renderRow(iprGrid, IPR_MODEL.folder, pageClips, IPR_MODEL.label);

        // 底部：选中模型行（按游戏对齐，不存在则占位）
        const otherSet = new Set(otherModel.clips || []);
        otherGrid.innerHTML = '';
        pageClips.forEach((clipFile) => {
            const figure = document.createElement('figure');
            figure.className = 'gif-card';

            const media = document.createElement('div');
            media.className = 'gif-media';

            if (otherSet.has(clipFile)) {
                const img = document.createElement('img');
                img.src = `${otherModel.folder}/${clipFile}`;
                img.alt = `${otherModel.label} playing ${formatClipLabel(clipFile)}`;
                img.loading = 'lazy';

                const caption = document.createElement('figcaption');
                caption.textContent = formatClipLabel(clipFile);

                media.appendChild(img);
                figure.appendChild(media);
                figure.appendChild(caption);
            } else {
                // 占位，保持上下对齐
                media.classList.add('gif-media--empty');
                figure.appendChild(media);
                const caption = document.createElement('figcaption');
                caption.textContent = '';
                figure.appendChild(caption);
            }

            otherGrid.appendChild(figure);
        });

        statusText.textContent = `Page ${pageIndex % totalPages + 1}/${totalPages} — IPR v.s. ${otherModel.label}`;
    };

    // 模型选择按钮（放到底部）
    selectableModels.forEach((model, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'model-btn' + (idx === activeIndex ? ' is-active' : '');
        btn.textContent = model.label;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', idx === activeIndex ? 'true' : 'false');
        btn.addEventListener('click', () => {
            if (activeIndex === idx) return;
            setActiveButton(idx);
        });
        buttonGroup.appendChild(btn);
        buttons.push(btn);
    });

    // 翻页按钮与键盘左右键
    const goPrev = () => { pageIndex = (pageIndex - 1 + totalPages) % totalPages; renderPage(); };
    const goNext = () => { pageIndex = (pageIndex + 1) % totalPages; renderPage(); };
    if (btnPrev) btnPrev.addEventListener('click', goPrev);
    if (btnNext) btnNext.addEventListener('click', goNext);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goPrev();
        else if (e.key === 'ArrowRight') goNext();
    });

    if (btnPrev) btnPrev.disabled = totalPages <= 1;
    if (btnNext) btnNext.disabled = totalPages <= 1;
    if (totalPages <= 1) {
        if (btnPrev) btnPrev.style.display = 'none';
        if (btnNext) btnNext.style.display = 'none';
    }

    // 初始渲染：默认选第一个非 IPR 模型
    activeIndex = 0;
    setActiveButton(activeIndex);

    // 控制台确认：所有模型共有的 GIF 数量
    let intersectAll = new Set(MODEL_GALLERY_DATA[0].clips || []);
    for (let i = 1; i < MODEL_GALLERY_DATA.length; i++) {
        const s = new Set(MODEL_GALLERY_DATA[i].clips || []);
        intersectAll = new Set([...intersectAll].filter(x => s.has(x)));
    }
    console.log('[Gallery] 所有模型共有的 GIF 数量:', Array.from(intersectAll).length, Array.from(intersectAll));
}

function initLeaderboardChart() {
    const chart = document.getElementById('leaderboard-chart-horizontal');

    if (!chart) return;

    const formatScore = (value) => Number.isInteger(value) ? value.toString() : value.toFixed(1);

    // 构建聚合后的方法分数：每个指标来自其对应目标的模型版本
    const buildAggregatedMethods = () => {
        const names = new Set();
        ['survival', 'curiosity', 'utility'].forEach(obj => {
            (OBJECTIVE_SPECIFIC_METHODS[obj] || []).forEach(m => names.add(m.name));
        });

        const findBy = (obj, name) => (OBJECTIVE_SPECIFIC_METHODS[obj] || []).find(m => m.name === name);

        return Array.from(names).map(name => {
            const ms = findBy('survival', name);
            const mc = findBy('curiosity', name);
            const mu = findBy('utility', name);
            return {
                name,
                values: {
                    survival: Number(ms?.values?.survival ?? 0),
                    curiosity: Number(mc?.values?.curiosity ?? 0),
                    utility: Number(mu?.values?.utility ?? 0)
                }
            };
        });
    };

    const datasetRaw = [
        ...SHARED_METHODS,
        ...buildAggregatedMethods(),
        ...IPR_METHODS
    ];

    const hasECharts = typeof window !== 'undefined'
        && window.echarts
        && typeof window.echarts.init === 'function';

    // If ECharts isn't available, render a simple HTML fallback table so user sees something
    if (!hasECharts) {
        console.warn('[Leaderboard] ECharts is not available; rendering fallback HTML leaderboard.');
        chart.innerHTML = '';
        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.margin = '8px 0';
        const thead = document.createElement('thead');
        thead.innerHTML = '<tr><th style="text-align:left;padding:8px;border-bottom:1px solid #e6e6e6">Method</th><th style="padding:8px;border-bottom:1px solid #e6e6e6">Survival</th><th style="padding:8px;border-bottom:1px solid #e6e6e6">Curiosity</th><th style="padding:8px;border-bottom:1px solid #e6e6e6">Utility</th></tr>';
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        datasetRaw.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td style="padding:8px;border-bottom:1px solid #f2f2f2">${row.name.replace('\n', ' ')}</td><td style="padding:8px;border-bottom:1px solid #f2f2f2">${formatScore(Number(row.values.survival || 0))}</td><td style="padding:8px;border-bottom:1px solid #f2f2f2">${formatScore(Number(row.values.curiosity || 0))}</td><td style="padding:8px;border-bottom:1px solid #f2f2f2">${formatScore(Number(row.values.utility || 0))}</td>`;
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        chart.appendChild(table);
        return;
    }

    const prioritizeDataset = (dataset) => {
        const highlighted = dataset.filter(method => method.highlight);
        const rest = dataset.filter(method => !method.highlight);
        return [...highlighted, ...rest];
    };

    const getMaxScore = (dataset) => {
        const datasetMax = dataset.reduce((highest, method) => {
            LEADERBOARD_METRICS.forEach(metric => {
                highest = Math.max(highest, Number(method.values?.[metric.key] ?? 0));
            });
            return highest;
        }, 0);

        const baselineMax = BASELINE_GUIDES.reduce((highest, guide) => Math.max(highest, guide.value), 0);
        return Math.max(datasetMax, baselineMax, 1);
    };

    const getAxisMax = (rawMax) => {
        if (!Number.isFinite(rawMax) || rawMax <= 0) return 1;
        const step = rawMax <= 60 ? 5 : 10;
        return Math.ceil(rawMax / step) * step;
    };

    let echartsInstance = null;
    let resizeObserver = null;

    const ensureECharts = () => {
        if (echartsInstance && !echartsInstance.isDisposed?.()) {
            return echartsInstance;
        }

        chart.innerHTML = '';
        echartsInstance = window.echarts.init(chart, null, {
            renderer: 'canvas',
            useDirtyRect: true
        });

        if (!resizeObserver && typeof window.ResizeObserver === 'function') {
            resizeObserver = new ResizeObserver(() => {
                try { echartsInstance?.resize?.(); } catch (e) { }
            });
            resizeObserver.observe(chart);
        }

        return echartsInstance;
    };

    const renderECharts = (dataset, maxScore) => {
        const instance = ensureECharts();
        if (!instance) return;

        const methodNames = dataset.map(method => method.name);
        const highlightSet = new Set(dataset.filter(m => m.highlight).map(m => m.name));

        const COLORS = {
            survival: '#1a73e8',
            curiosity: '#ff8a00',
            utility: '#1e8e3e'
        };

        const markLineData = BASELINE_GUIDES.map(guide => ({
            name: guide.label,
            xAxis: guide.value,
            lineStyle: {
                width: 2,
                type: 'dashed',
                color: guide.id === 'baseline-human' ? 'rgba(30, 142, 62, 0.65)' : 'rgba(32, 33, 36, 0.28)'
            },
            label: {
                color: guide.id === 'baseline-human' ? '#1e8e3e' : 'rgba(32, 33, 36, 0.7)'
            }
        }));

        const series = LEADERBOARD_METRICS.map((metric, idx) => ({
            type: 'bar',
            name: metric.label,
            data: dataset.map(method => Number(method.values?.[metric.key] ?? 0)),
            barWidth: 10,
            barMaxWidth: 14,
            itemStyle: {
                color: COLORS[metric.key] || '#888',
                borderRadius: [0, 7, 7, 0]
            },
            emphasis: {
                focus: 'series',
                itemStyle: {
                    shadowBlur: 14,
                    shadowColor: 'rgba(0, 0, 0, 0.18)'
                }
            },
            ...(idx === 0 ? {
                markLine: {
                    silent: true,
                    symbol: ['none', 'none'],
                    animation: false,
                    label: {
                        show: true,
                        position: 'insideEndTop',
                        formatter: '{b}',
                        fontSize: 11
                    },
                    data: markLineData
                }
            } : {})
        }));

        const axisFont = (() => {
            try {
                return getComputedStyle(document.body).fontFamily || undefined;
            } catch (e) {
                return undefined;
            }
        })();

        instance.setOption({
            animationDuration: 450,
            textStyle: axisFont ? { fontFamily: axisFont } : undefined,
            grid: {
                left: 16,
                right: 18,
                top: 8,
                bottom: 24,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
                backgroundColor: 'rgba(32, 33, 36, 0.92)',
                borderWidth: 0,
                textStyle: { color: '#fff', fontSize: 12 },
                padding: [10, 12],
                extraCssText: 'box-shadow: 0 12px 30px rgba(0,0,0,0.25); border-radius: 10px;',
                formatter: (params) => {
                    const rows = Array.isArray(params) ? params : [params];
                    const title = rows[0]?.axisValueLabel ?? '';
                    const lines = [`<div style="font-weight:700;margin-bottom:6px">${title}</div>`];
                    rows.forEach(p => {
                        const value = formatScore(Number(p.data ?? 0));
                        lines.push(
                            `<span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:${p.color};margin-right:8px"></span>${p.seriesName}: ${value}`
                        );
                    });
                    return lines.join('<br/>');
                }
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: maxScore,
                axisLabel: {
                    showMaxLabel: false,
                    color: 'rgba(32, 33, 36, 0.75)'
                },
                axisLine: { show: false },
                splitLine: {
                    lineStyle: { color: 'rgba(32, 33, 36, 0.08)' }
                }
            },
            yAxis: {
                type: 'category',
                data: methodNames,
                inverse: true,
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                    interval: 0,
                    width: 100,
                    overflow: 'truncate',
                    color: 'rgba(32, 33, 36, 0.9)',
                    fontWeight: 600,
                    lineHeight: 18,
                    formatter: (value) => {
                        const parts = String(value).split('\n');
                        const name = parts[0] || '';
                        const size = parts[1] || '';
                        const isHi = highlightSet.has(value);
                        const nameTag = isHi ? 'nameHi' : 'name';
                        const sizeTag = isHi ? 'sizeHi' : 'size';
                        if (size) {
                            return `{${nameTag}|${name}}\n{${sizeTag}|${size}}`;
                        }
                        return `{${nameTag}|${name}}`;
                    },
                    rich: {
                        name: {
                            color: 'rgba(32, 33, 36, 0.95)',
                            fontWeight: 700,
                            fontSize: 14
                        },
                        size: {
                            color: 'rgba(32, 33, 36, 0.75)',
                            fontWeight: 500,
                            fontSize: 11
                        },
                        nameHi: {
                            color: '#1a73e8',
                            fontWeight: 800,
                            fontSize: 15
                        },
                        sizeHi: {
                            color: '#1a73e8',
                            opacity: 0.9,
                            fontWeight: 600,
                            fontSize: 12
                        }
                    }
                }
            },
            series
        }, { notMerge: true });
    };

    // Apply explicit ordering for display
    const METHOD_ORDER = [
        'IPR\n(8B)',
        'Qwen3-VL\n(8B SFT)',
        'Qwen3-VL\n(30B-A3B)',
        'GPT-4o\n(>1T)',
        'GPT-5\n(>1T)',
        'PPO\n(150M)',
        'DQN\n(120M)',
        'DreamerV3\n(200M)',
        'V-JEPA2\n(600M)',
        'Genie\n(3B)',
        'ACT-BC\n(25M)'
    ];

    const applyOrdering = (list) => {
        const orderMap = new Map(METHOD_ORDER.map((name, idx) => [name, idx]));
        const getRank = (name) => orderMap.has(name) ? orderMap.get(name) : METHOD_ORDER.length;
        return [...list].sort((a, b) => {
            const ra = getRank(a.name);
            const rb = getRank(b.name);
            if (ra !== rb) return ra - rb;
            return a.name.localeCompare(b.name);
        });
    };

    // Render with aggregated scores in the prescribed order
    const datasetOrdered = applyOrdering(datasetRaw);
    const dataset = prioritizeDataset(datasetOrdered);
    const maxScoreRaw = getMaxScore(dataset) * 1.05;
    const maxScore = getAxisMax(maxScoreRaw);
    renderECharts(dataset, maxScore);
}

// Toggle Abstract Section
function toggleAbstract() {
    const abstractSection = document.getElementById('abstract-section');
    if (abstractSection) {
        abstractSection.classList.toggle('collapsed');
    }
}

// Make toggleAbstract available globally
window.toggleAbstract = toggleAbstract;
