/* =====================================================
   "मी आजपासून दारू सोडली" — 3 भाषांमध्ये
   फक्त दिवस मोजणारा काउंटर
   दिवस वाढत गेल्यावर confidence वाढतो (रंग + संदेश)
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

    // ---------- Confidence Levels (दिवस वाढत गेल्यावर रंग बदलतो) ----------
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

    // ---------- DOM Elements ----------
    const appTitleEl   = document.getElementById('appTitle');
    const daysCountEl  = document.getElementById('daysCount');
    const daysLabelEl  = document.getElementById('daysLabel');
    const motivationEl = document.getElementById('motivationText');
    const confidenceEl = document.getElementById('confidenceBadge');
    const counterBox   = document.getElementById('counterBox');
    const langButtons  = document.querySelectorAll('.lang-btn');

    // ---------- State ----------
    let currentLang = 'mr';
    let currentDays = -1;
    let tickTimerId = null;

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
        // पहिल्यांदा ॲप उघडलं → आजचा दिवस 00:00 वाजता सेट
        const start = getTodayStart();
        localStorage.setItem(STORAGE_KEY_START, start.toISOString());
        return start;
    }

    /**
     * पहिल्या दिवशी = 1 (म्हणजे आज = Day 1)
     * उद्या = 2, परवा = 3 ...
     */
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

        appTitleEl.textContent  = translations[lang].title;
        daysLabelEl.textContent = translations[lang].daysLabel;

        // Force re-apply confidence + motivation in new language
        applyConfidenceAndMotivation(currentDays, true);
    }

    function applyConfidenceAndMotivation(days, force) {
        const t = translations[currentLang];
        if (!t) return;

        const safeDays = Math.max(0, days);

        // Confidence message — दर 30 दिवसांनी पुढचा
        const confIdx = Math.min(
            t.confidences.length - 1,
            Math.floor(safeDays / 30)
        );
        confidenceEl.textContent = t.confidences[confIdx];

        // Motivation — दिवसावर आधारित (रोज बदलतो)
        const motIdx = safeDays % t.motivations.length;
        motivationEl.textContent = t.motivations[motIdx];

        // रंग
        const level = getConfidenceLevel(safeDays);
        counterBox.style.background = 'linear-gradient(135deg, ' + level.c1 + ', ' + level.c2 + ')';
        counterBox.style.boxShadow  = '0 15px 45px ' + level.glow;

        confidenceEl.style.borderColor = level.c1;
        confidenceEl.style.color       = level.c1;
        confidenceEl.style.background  = 'rgba(243, 156, 18, 0.12)';
    }

    function updateDays() {
        const days = calculateDays();

        if (days !== currentDays) {
            const prev = currentDays;
            currentDays = days;

            daysCountEl.textContent = days.toLocaleString('en-IN');

            // Bump animation — फक्त जेव्हा दिवस वाढला तेव्हा
            if (prev !== -1 && days > prev) {
                daysCountEl.classList.remove('bump');
                void daysCountEl.offsetWidth; // reflow to restart animation
                daysCountEl.classList.add('bump');
            }

            applyConfidenceAndMotivation(days, false);
        }
    }

    // ---------- Midnight check ----------
    function scheduleMidnightTick() {
        if (tickTimerId) clearInterval(tickTimerId);
        // दर 30 सेकंदाला तपासा — मध्यरात्रीनंतर दिवस बदलतो
        tickTimerId = setInterval(updateDays, 30 * 1000);
    }

    // ---------- Init ----------
    function init() {
        // Language load
        const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
        } else {
            // Browser language detect करा
            const nav = (navigator.language || 'mr').toLowerCase();
            if (nav.indexOf('hi') === 0) currentLang = 'hi';
            else if (nav.indexOf('en') === 0) currentLang = 'en';
            else currentLang = 'mr';
        }

        // Language button listeners
        langButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLanguage(btn.dataset.lang);
            });
        });

        // Start date ensure
        getStartDate();

        // First render
        setLanguage(currentLang);
        updateDays();

        // Midnight tick check
        scheduleMidnightTick();

        // Tab पुन्हा active झाल्यावर update
        document.addEventListener('visibilitychange', function () {
            if (!document.hidden) updateDays();
        });

        // Window focus झाल्यावर update
        window.addEventListener('focus', updateDays);
    }

    // ---------- Start ----------
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
