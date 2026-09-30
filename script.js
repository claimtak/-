/* =====================================================
   "मी आजपासून दारू सोडली" — 3 भाषांमध्ये
   + PWA install button
   ===================================================== */

(function () {
    'use strict';

    // ---------- Storage Keys ----------
    const STORAGE_KEY_START = 'sobriety_start_date_v3';
    const STORAGE_KEY_LANG  = 'sobriety_lang_v3';

    // ---------- Translations ----------
    const translations = {
        mr: {
            title: "मी आजपासून दारू सोडली",
            daysLabel: "दिवस",
            installBtn: "ॲप डाउनलोड करा",
            installedMsg: "✅ ॲप इन्स्टॉल झालं! आता होम स्क्रीनवरच्या आयकॉनवर क्लिक करा.",
            iosHint: "📱 iPhone/iPad वापरताय? Share → \"Add to Home Screen\" निवडा.",
            confidences: [
                "तुमचा प्रवास सुरू झाला आहे 🌱",
                "तुमचा आत्मविश्वास वाढत आहे 💪",
                "तुम्ही मजबूत होत आहात 🔥",
                "तुमचा विजय जवळ येत आहे 🏆",
                "तुम्ही एक योद्धा आहात ⚡",
                "तुमचं जीवन बदलत आहे 🌟",
                "तुम्ही अजिंक्य आहात 👑"
            ],
            motivations: [
                "प्रत्येक दिवस हा तुमचा विजय आहे! 🏆",
                "तुम्ही स्वतःसाठी हे करत आहात — हेच खरे प्रेम! ❤️",
                "आजचा दिवस तुमच्या उद्याचा पाया आहे! 🌱",
                "मजबूत राहा, तुम्ही एक योद्धा आहात! 💪",
                "प्रत्येक दिवस तुम्हाला नवीन जीवन देत आहे! 🌅",
                "तुमचा संकल्प हीच तुमची सर्वात मोठी ताकद! 🔥",
                "तुमचं आरोग्य हीच तुमची खरी संपत्ती! 🌿",
                "आज तुम्ही उद्यापेक्षा मजबूत आहात! 🚀"
            ]
        },
        hi: {
            title: "मैंने आज से शराब छोड़ दी",
            daysLabel: "दिन",
            installBtn: "ऐप डाउनलोड करें",
            installedMsg: "✅ ऐप इंस्टॉल हो गया! अब होम स्क्रीन के आइकन पर क्लिक करें।",
            iosHint: "📱 iPhone/iPad? Share → \"Add to Home Screen\" चुनें।",
            confidences: [
                "आपकी यात्रा शुरू हो गई है 🌱",
                "आपका आत्मविश्वास बढ़ रहा है 💪",
                "आप मजबूत हो रहे हैं 🔥",
                "आपकी जीत करीब है 🏆",
                "आप एक योद्धा हैं ⚡",
                "आपका जीवन बदल रहा है 🌟",
                "आप अजेय हैं 👑"
            ],
            motivations: [
                "हर दिन आपकी जीत है! 🏆",
                "आप खुद के लिए यह कर रहे हैं — यही सच्चा प्यार है! ❤️",
                "आज का दिन आपके कल की नींव है! 🌱",
                "मजबूत रहें, आप एक योद्धा हैं! 💪",
                "हर दिन आपको नया जीवन दे रहा है! 🌅",
                "आपका संकल्प ही आपकी सबसे बड़ी ताकत है! 🔥",
                "आपका स्वास्थ्य ही आपकी असली संपत्ति है! 🌿",
                "आज आप कल से ज्यादा मजबूत हैं! 🚀"
            ]
        },
        en: {
            title: "I Quit Alcohol From Today",
            daysLabel: "Days",
            installBtn: "Download App",
            installedMsg: "✅ App installed! Now tap the icon on your home screen.",
            iosHint: "📱 On iPhone/iPad? Tap Share → \"Add to Home Screen\".",
            confidences: [
                "Your journey has begun 🌱",
                "Your confidence is growing 💪",
                "You are getting stronger 🔥",
                "Your victory is near 🏆",
                "You are a warrior ⚡",
                "Your life is transforming 🌟",
                "You are unstoppable 👑"
            ],
            motivations: [
                "Every day is your victory! 🏆",
                "You are doing this for yourself — that's true love! ❤️",
                "Today is the foundation of your tomorrow! 🌱",
                "Stay strong, you are a warrior! 💪",
                "Every day is giving you a new life! 🌅",
                "Your determination is your greatest strength! 🔥",
                "Your health is your true wealth! 🌿",
                "Today you are stronger than yesterday! 🚀"
            ]
        }
    };

    // ---------- Confidence Levels ----------
    const confidenceLevels = [
        { min: 0,    c1: '#95a5a6', c2: '#7f8c8d', glow: 'rgba(149,165,166,0.45)' },
        { min: 1,    c1: '#3498db', c2: '#2980b9', glow: 'rgba(52,152,219,0.50)'  },
        { min: 7,    c1: '#1abc9c', c2: '#16a085', glow: 'rgba(26,188,156,0.50)'  },
        { min: 30,   c1: '#2ecc71', c2: '#27ae60', glow: 'rgba(46,204,113,0.50)'  },
        { min: 90,   c1: '#f39c12', c2: '#e67e22', glow: 'rgba(243,156,18,0.55)'  },
        { min: 180,  c1: '#e74c3c', c2: '#c0392b', glow: 'rgba(231,76,60,0.55)'   },
        { min: 365,  c1: '#9b59b6', c2: '#8e44ad', glow: 'rgba(155,89,182,0.60)'  },
        { min: 730,  c1: '#f1c40f', c2: '#f39c12', glow: 'rgba(241,196,15,0.60)'  },
        { min: 1095, c1: '#ff6b6b', c2: '#f39c12', glow: 'rgba(255,107,107,0.65)' }
    ];

    // ---------- DOM ----------
    const appTitleEl   = document.getElementById('appTitle');
    const daysCountEl  = document.getElementById('daysCount');
    const daysLabelEl  = document.getElementById('daysLabel');
    const motivationEl = document.getElementById('motivationText');
    const confidenceEl = document.getElementById('confidenceBadge');
    const counterBox   = document.getElementById('counterBox');
    const langButtons  = document.querySelectorAll('.lang-btn');
    const installBtn   = document.getElementById('installBtn');
    const installBtnText = document.getElementById('installBtnText');
    const iosHint      = document.getElementById('iosHint');
    const installedMsg = document.getElementById('installedMsg');

    // ---------- State ----------
    let currentLang = 'mr';
    let currentDays = -1;
    let tickTimerId = null;
    let deferredPrompt = null;

    // ---------- Helpers ----------
    function getTodayStart() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    }

    function getStartDate() {
        const raw = localStorage.getItem(STORAGE_KEY_START);
        if (raw) {
            const d = new Date(raw);
            if (!isNaN(d.getTime())) return d;
        }
        const start = getTodayStart();
        localStorage.setItem(STORAGE_KEY_START, start.toISOString());
        return start;
    }

    function calculateDays() {
        const start = getStartDate();
        const today = getTodayStart();
        const diffMs = today.getTime() - start.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        return Math.max(1, diffDays + 1);
    }

    function getConfidenceLevel(days) {
        let level = confidenceLevels[0];
        for (let i = 0; i < confidenceLevels.length; i++) {
            if (days >= confidenceLevels[i].min) level = confidenceLevels[i];
        }
        return level;
    }

    // ---------- Rendering ----------
    function setLanguage(lang) {
        if (!translations[lang]) lang = 'mr';
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY_LANG, lang);
        document.documentElement.lang = lang;

        langButtons.forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        const t = translations[lang];
        appTitleEl.textContent  = t.title;
        daysLabelEl.textContent = t.daysLabel;
        if (installBtnText) installBtnText.textContent = t.installBtn;
        if (installedMsg)   installedMsg.textContent   = t.installedMsg;
        if (iosHint)        iosHint.textContent        = t.iosHint;

        applyConfidenceAndMotivation(currentDays, true);
    }

    function applyConfidenceAndMotivation(days) {
        const t = translations[currentLang];
        if (!t) return;

        const safeDays = Math.max(0, days);

        const confIdx = Math.min(
            t.confidences.length - 1,
            Math.floor(safeDays / 30)
        );
        confidenceEl.textContent = t.confidences[confIdx];

        const motIdx = safeDays % t.motivations.length;
        motivationEl.textContent = t.motivations[motIdx];

        const level = getConfidenceLevel(safeDays);
        counterBox.style.background = 'linear-gradient(135deg, ' + level.c1 + ', ' + level.c2 + ')';
        counterBox.style.boxShadow  = '0 15px 45px ' + level.glow;

        confidenceEl.style.borderColor = level.c1;
        confidenceEl.style.color       = level.c1;
    }

    function updateDays() {
        const days = calculateDays();
        if (days !== currentDays) {
            const prev = currentDays;
            currentDays = days;
            daysCountEl.textContent = days.toLocaleString('en-IN');

            if (prev !== -1 && days > prev) {
                daysCountEl.classList.remove('bump');
                void daysCountEl.offsetWidth;
                daysCountEl.classList.add('bump');
            }
            applyConfidenceAndMotivation(days);
        }
    }

    // ---------- PWA Install ----------
    function isStandalone() {
        return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
            || window.navigator.standalone === true;
    }

    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    // beforeinstallprompt — Android/Chrome/Edge मध्ये
    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) installBtn.style.display = 'inline-flex';
    });

    // आधीच install झालं असेल तर बटण लपवा
    window.addEventListener('appinstalled', function () {
        deferredPrompt = null;
        if (installBtn) installBtn.style.display = 'none';
        if (installedMsg) {
            installedMsg.style.display = 'block';
            setTimeout(function () {
                installedMsg.style.display = 'none';
            }, 6000);
        }
    });

    if (installBtn) {
        installBtn.addEventListener('click', async function () {
            // Android / Chrome / Edge
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const choice = await deferredPrompt.userChoice;
                if (choice && choice.outcome === 'accepted') {
                    if (installedMsg) {
                        installedMsg.style.display = 'block';
                        setTimeout(function () {
                            installedMsg.style.display = 'none';
                        }, 6000);
                    }
                }
                deferredPrompt = null;
                installBtn.style.display = 'none';
                return;
            }

            // iOS — manual instructions
            if (isIOS()) {
                alert(translations[currentLang].iosHint.replace(/<[^>]*>/g, ''));
                return;
            }

            // Browser ने PWA support देत नसेल
            alert(
                currentLang === 'mr'
                    ? 'तुमचा ब्राउझर हे आपोआप इन्स्टॉल करू शकत नाही. कृपया Chrome / Edge वापरा किंवा ब्राउझर मेनू → "Install app" / "Add to Home screen" निवडा.'
                    : currentLang === 'hi'
                    ? 'आपका ब्राउज़र इसे अपने आप इंस्टॉल नहीं कर सकता। कृपया Chrome / Edge उपयोग करें या ब्राउज़र मेनू → "Install app" / "Add to Home screen" चुनें।'
                    : 'Your browser cannot install this automatically. Please use Chrome / Edge or use the browser menu → "Install app" / "Add to Home screen".'
            );
        });
    }

    // iOS — install button मॅन्युअली दाखवा
    if (isIOS() && !isStandalone()) {
        if (installBtn) installBtn.style.display = 'inline-flex';
        if (iosHint)    iosHint.style.display = 'block';
    }

    // Standalone मध्ये चालू असेल तर काहीही दाखवू नका
    if (isStandalone()) {
        if (installBtn) installBtn.style.display = 'none';
        if (iosHint)    iosHint.style.display = 'none';
    }

    // ---------- Service Worker register ----------
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('service-worker.js')
                .then(function (reg) {
                    console.log('Service Worker registered:', reg.scope);
                })
                .catch(function (err) {
                    console.warn('Service Worker failed:', err);
                });
        });
    }

    // ---------- Midnight tick ----------
    function scheduleMidnightTick() {
        if (tickTimerId) clearInterval(tickTimerId);
        tickTimerId = setInterval(updateDays, 30 * 1000);
    }

    // ---------- Init ----------
    function init() {
        const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
        } else {
            const nav = (navigator.language || 'mr').toLowerCase();
            if (nav.indexOf('hi') === 0) currentLang = 'hi';
            else if (nav.indexOf('en') === 0) currentLang = 'en';
            else currentLang = 'mr';
        }

        langButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLanguage(btn.dataset.lang);
            });
        });

        getStartDate();
        setLanguage(currentLang);
        updateDays();
        scheduleMidnightTick();

        document.addEventListener('visibilitychange', function () {
            if (!document.hidden) updateDays();
        });
        window.addEventListener('focus', updateDays);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
