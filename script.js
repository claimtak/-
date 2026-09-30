/* =====================================================
   "मी आजपासून दारू सोडली" — Full Script
   3 भाषा + रोजची जादू + घसरलो बटण + Highest Record
   ===================================================== */

(function () {
    'use strict';

    var KEY_START = 'sobriety_start_date_v6';
    var KEY_LANG  = 'sobriety_lang_v6';
    var KEY_LAST_CONFETTI = 'sobriety_last_confetti_v6';
    var KEY_HIGHEST = 'sobriety_highest_record_v6';

    // ---------- Translations ----------
    var translations = {
        mr: {
            title: "मी आजपासून दारू सोडली",
            daysLabel: "दिवस",
            installBtn: "ॲप डाउनलोड करा",
            installedMsg: "✅ ॲप इन्स्टॉल झालं!",
            iosHint: '📱 iPhone/iPad? Share → "Add to Home Screen" निवडा.',
            slippedBtn: "आज मी घसरलो",
            // Modal
            modalTitle: "तू घसरलास!",
            modalLine1: "आज तू स्वतःला विसरलास.",
            modalLine2: "दारू जिंकली. तू हरलास.",
            modalHope: "🏆 खरा योद्धा हरतो — पण शरण जात नाही.",
            restartBtn: "पुन्हा सुरुवात कर",
            closeBtn: "बंद कर",
            recordLabel: "तुमचा सर्वोच्च record",
            recordText: "🔥 तुझा सर्वोच्च record: {N} दिवस\nएकदा का तुझ्यात ताकद होती — अजूनही आहे!",
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
            ],
            dailyMagic: [
                "आज पहिला दिवस — नव्या जीवनाची सुरुवात! 🌅",
                "तुमच्या शरीरात नवी उर्जा येत आहे! ⚡",
                "तुमचं मन स्वच्छ होत आहे! 🧘",
                "तुमची त्वचा उजळत आहे! ✨",
                "तुमची झोप सुधारत आहे! 😴",
                "तुमचं हृदय मजबूत होत आहे! ❤️",
                "तुमचं यकृत बरे होत आहे! 💚",
                "तुमच्या कुटुंबाचा आनंद वाढत आहे! 🏡",
                "तुमचा आत्मविश्वास वाढत आहे! 💪",
                "तुमचा संयम वाढत आहे! 🎯",
                "तुमचं वजन नियंत्रित होत आहे! ⚖️",
                "तुमचं रक्तदाब सुधारत आहे! 🩺",
                "तुमची स्मरणशक्ती सुधारत आहे! 🧠",
                "तुमची त्वचा अधिक तरुण दिसत आहे! 🌟",
                "तुमची ऊर्जा वाढत आहे! 🔋",
                "तुमची चिंता कमी होत आहे! ☁️",
                "तुमचं हसू अधिक आहे! 😊",
                "तुमचं नातं सुधारत आहे! 👨‍👩‍👧",
                "तुमचं काम अधिक चांगलं होत आहे! 💼",
                "तुमचा वेळ आणि पैसा वाचत आहे! 💰",
                "तुमचं भविष्य उजळ होत आहे! 🔆",
                "तुमचं जीवन अर्थपूर्ण होत आहे! 🎁",
                "तुमचं मन शांत होत आहे! 🕊️",
                "तुमचं शरीर स्वच्छ होत आहे! 🌿",
                "तुमची त्वचा निरोगी आहे! 🌸",
                "तुमचं आतडं सुधारत आहे! 🍎",
                "तुमचं रक्त शुद्ध होत आहे! 🩸",
                "तुमचं आयुष्य वाढत आहे! ⏳",
                "तुमचा आत्मसन्मान वाढत आहे! 👑",
                "तुम्ही अधिक सुंदर दिसत आहे! 💎"
            ],
            milestoneLabel: "🎉 महत्त्वाचा टप्पा पूर्ण!"
        },
        hi: {
            title: "मैंने आज से शराब छोड़ दी",
            daysLabel: "दिन",
            installBtn: "ऐप डाउनलोड करें",
            installedMsg: "✅ ऐप इंस्टॉल हो गया!",
            iosHint: '📱 iPhone/iPad? Share → "Add to Home Screen" चुनें।',
            slippedBtn: "आज मैं फिसल गया",
            modalTitle: "तू फिसल गया!",
            modalLine1: "आज तू खुद को भूल गया।",
            modalLine2: "शराब जीत गई। तू हार गया।",
            modalHope: "🏆 असली योद्धा हारता है — पर हार नहीं मानता।",
            restartBtn: "फिर से शुरू कर",
            closeBtn: "बंद कर",
            recordLabel: "आपका सर्वोच्च रिकॉर्ड",
            recordText: "🔥 तेरा सर्वोच्च रिकॉर्ड: {N} दिन\nएक बार तुझमें ताकत थी — अब भी है!",
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
            ],
            dailyMagic: [
                "आज पहला दिन — नए जीवन की शुरुआत! 🌅",
                "आपके शरीर में नई ऊर्जा आ रही है! ⚡",
                "आपका मन साफ हो रहा है! 🧘",
                "आपकी त्वचा निखर रही है! ✨",
                "आपकी नींद सुधर रही है! 😴",
                "आपका दिल मजबूत हो रहा है! ❤️",
                "आपका लिवर ठीक हो रहा है! 💚",
                "आपके परिवार की खुशी बढ़ रही है! 🏡",
                "आपका आत्मविश्वास बढ़ रहा है! 💪",
                "आपका संयम बढ़ रहा है! 🎯",
                "आपका वजन नियंत्रित हो रहा है! ⚖️",
                "आपका रक्तचाप सुधर रहा है! 🩺",
                "आपकी याददाश्त सुधर रही है! 🧠",
                "आपकी त्वचा और जवान दिख रही है! 🌟",
                "आपकी ऊर्जा बढ़ रही है! 🔋",
                "आपकी चिंता कम हो रही है! ☁️",
                "आपकी हँसी बढ़ रही है! 😊",
                "आपके रिश्ते सुधर रहे हैं! 👨‍👩‍👧",
                "आपका काम बेहतर हो रहा है! 💼",
                "आपका समय और पैसा बच रहा है! 💰",
                "आपका भविष्य उज्ज्वल हो रहा है! 🔆",
                "आपका जीवन सार्थक हो रहा है! 🎁",
                "आपका मन शांत हो रहा है! 🕊️",
                "आपका शरीर साफ हो रहा है! 🌿",
                "आपकी त्वचा स्वस्थ है! 🌸",
                "आपका पेट सुधर रहा है! 🍎",
                "आपका रक्त शुद्ध हो रहा है! 🩸",
                "आपकी उम्र बढ़ रही है! ⏳",
                "आपका आत्मसम्मान बढ़ रहा है! 👑",
                "आप और सुंदर दिख रहे हैं! 💎"
            ],
            milestoneLabel: "🎉 महत्वपूर्ण पड़ाव पूरा!"
        },
        en: {
            title: "I Quit Alcohol From Today",
            daysLabel: "Days",
            installBtn: "Download App",
            installedMsg: "✅ App installed!",
            iosHint: '📱 On iPhone/iPad? Tap Share → "Add to Home Screen".',
            slippedBtn: "I slipped today",
            modalTitle: "You slipped!",
            modalLine1: "Today you forgot yourself.",
            modalLine2: "Alcohol won. You lost.",
            modalHope: "🏆 A true warrior falls — but never surrenders.",
            restartBtn: "Start again",
            closeBtn: "Close",
            recordLabel: "Your highest record",
            recordText: "🔥 Your highest record: {N} days\nYou once had the strength — you still do!",
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
            ],
            dailyMagic: [
                "Day one — the start of a new life! 🌅",
                "New energy is flowing through you! ⚡",
                "Your mind is clearing up! 🧘",
                "Your skin is glowing! ✨",
                "Your sleep is improving! 😴",
                "Your heart is getting stronger! ❤️",
                "Your liver is healing! 💚",
                "Your family's joy is growing! 🏡",
                "Your confidence is rising! 💪",
                "Your self-control is growing! 🎯",
                "Your weight is balancing! ⚖️",
                "Your blood pressure is improving! 🩺",
                "Your memory is sharpening! 🧠",
                "Your skin looks younger! 🌟",
                "Your energy is increasing! 🔋",
                "Your anxiety is fading! ☁️",
                "Your smile is brighter! 😊",
                "Your relationships are healing! 👨‍👩‍👧",
                "Your work is improving! 💼",
                "Your time and money are saving! 💰",
                "Your future is getting brighter! 🔆",
                "Your life is becoming meaningful! 🎁",
                "Your mind is becoming calm! 🕊️",
                "Your body is getting cleaner! 🌿",
                "Your skin is healthy! 🌸",
                "Your gut is healing! 🍎",
                "Your blood is purifying! 🩸",
                "Your lifespan is increasing! ⏳",
                "Your self-respect is rising! 👑",
                "You look more beautiful! 💎"
            ],
            milestoneLabel: "🎉 Major milestone achieved!"
        }
    };

    // ---------- Rainbow colors ----------
    var rainbowPalette = [
        { c1: '#e74c3c', c2: '#c0392b', glow: 'rgba(231,76,60,0.55)'   },
        { c1: '#e67e22', c2: '#d35400', glow: 'rgba(230,126,34,0.55)'  },
        { c1: '#f39c12', c2: '#e67e22', glow: 'rgba(243,156,18,0.55)'  },
        { c1: '#f1c40f', c2: '#f39c12', glow: 'rgba(241,196,15,0.55)'  },
        { c1: '#2ecc71', c2: '#27ae60', glow: 'rgba(46,204,113,0.55)'  },
        { c1: '#1abc9c', c2: '#16a085', glow: 'rgba(26,188,156,0.55)'  },
        { c1: '#3498db', c2: '#2980b9', glow: 'rgba(52,152,219,0.55)'  },
        { c1: '#9b59b6', c2: '#8e44ad', glow: 'rgba(155,89,182,0.55)'  },
        { c1: '#e91e63', c2: '#c2185b', glow: 'rgba(233,30,99,0.55)'   }
    ];

    var milestones = [7, 30, 90, 180, 365, 730, 1095];

    // ---------- DOM ----------
    var $ = function (id) { return document.getElementById(id); };
    var appTitleEl   = $('appTitle');
    var daysCountEl  = $('daysCount');
    var daysLabelEl  = $('daysLabel');
    var motivationEl = $('motivationText');
    var confidenceEl = $('confidenceBadge');
    var counterBox   = $('counterBox');
    var recordBadgeEl = $('recordBadge');
    var langButtons  = document.querySelectorAll('.lang-btn');
    var installBtn   = $('installBtn');
    var installBtnText = $('installBtnText');
    var iosHint      = $('iosHint');
    var installedMsg = $('installedMsg');
    var magicEmojiEl = $('magicEmoji');
    var dailyMagicEl = $('dailyMagic');
    var milestoneEl  = $('milestoneBadge');
    var rainbowParticlesEl = $('rainbowParticles');
    var fireworksEl  = $('fireworks');
    var sparklesEl   = $('sparkles');
    var confettiCanvas = $('confettiCanvas');

    // Slipped
    var slippedBtn      = $('slippedBtn');
    var slippedBtnText  = $('slippedBtnText');
    var slippedModal    = $('slippedModal');
    var modalTitle      = $('modalTitle');
    var modalLine1      = $('modalLine1');
    var modalLine2      = $('modalLine2');
    var modalHope       = $('modalHope');
    var modalRecord     = $('modalRecord');
    var restartBtn      = $('restartBtn');
    var closeModalBtn   = $('closeModalBtn');
    var restartBtnText  = $('restartBtnText');
    var closeBtnText    = $('closeBtnText');

    // ---------- State ----------
    var currentLang = 'mr';
    var currentDays = -1;
    var tickTimerId = null;
    var deferredPrompt = null;

    // ---------- Helpers ----------
    function getTodayStart() {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    }

    function getStartDate() {
        var raw = localStorage.getItem(KEY_START);
        if (raw) {
            var d = new Date(raw);
            if (!isNaN(d.getTime())) return d;
        }
        var start = getTodayStart();
        localStorage.setItem(KEY_START, start.toISOString());
        return start;
    }

    function calculateDays() {
        var start = getStartDate();
        var today = getTodayStart();
        var diffMs = today.getTime() - start.getTime();
        var diffDays = Math.floor(diffMs / 86400000);
        return Math.max(1, diffDays + 1);
    }

    function getHighestRecord() {
        var v = parseInt(localStorage.getItem(KEY_HIGHEST) || '0', 10);
        return isNaN(v) ? 0 : v;
    }

    function setHighestRecord(n) {
        if (n > getHighestRecord()) {
            localStorage.setItem(KEY_HIGHEST, String(n));
        }
    }

    function getRainbowForDay(days) {
        return rainbowPalette[(days - 1) % rainbowPalette.length];
    }

    function getDailyEmoji(days) {
        var emojis = ['🌱','🌿','🍀','🌳','🌸','🌻','🌞','⭐','✨','🌟','💎','👑','🏆','🎯','🔥','⚡','💪','❤️','🎁','🌈','🦋','🌺','🍁','🌊','🗻','🦁','🐯','🚀','🎨','🎵'];
        return emojis[(days - 1) % emojis.length];
    }

    function getMilestone(days) {
        for (var i = 0; i < milestones.length; i++) {
            if (days === milestones[i]) return milestones[i];
        }
        return null;
    }

    // ---------- Confetti ----------
    var confettiParticles = [];
    var confettiRunning = false;

    function resizeCanvas() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function spawnConfetti(count, options) {
        options = options || {};
        var colors = options.colors || ['#f39c12','#e74c3c','#3498db','#2ecc71','#9b59b6','#f1c40f','#e91e63','#1abc9c'];
        for (var i = 0; i < count; i++) {
            confettiParticles.push({
                x: Math.random() * confettiCanvas.width,
                y: -20 - Math.random() * 100,
                vx: (Math.random() - 0.5) * 3,
                vy: 2 + Math.random() * 3,
                size: 6 + Math.random() * 8,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.2,
                shape: Math.random() < 0.5 ? 'rect' : 'circle',
                life: 1
            });
        }
        if (!confettiRunning) {
            confettiRunning = true;
            requestAnimationFrame(confettiLoop);
        }
    }

    function confettiLoop() {
        var ctx = confettiCanvas.getContext('2d');
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        for (var i = confettiParticles.length - 1; i >= 0; i--) {
            var p = confettiParticles[i];
            p.x += p.vx; p.y += p.vy; p.vy += 0.06;
            p.rotation += p.rotSpeed; p.life -= 0.004;
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.translate(p.x, p.y); ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            if (p.shape === 'rect') {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            } else {
                ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill();
            }
            ctx.restore();
            if (p.y > confettiCanvas.height + 30 || p.life <= 0) confettiParticles.splice(i, 1);
        }
        if (confettiParticles.length > 0) requestAnimationFrame(confettiLoop);
        else confettiRunning = false;
    }

    function triggerFireworks(colors, count) {
        count = count || 2;
        colors = colors || ['#f39c12','#e74c3c','#3498db','#2ecc71','#9b59b6','#f1c40f'];
        for (var c = 0; c < count; c++) {
            var originX = 20 + Math.random() * 60;
            var originY = 20 + Math.random() * 50;
            var sparkCount = 16 + Math.floor(Math.random() * 8);
            for (var i = 0; i < sparkCount; i++) {
                var angle = (Math.PI * 2 * i) / sparkCount;
                var distance = 60 + Math.random() * 80;
                var spark = document.createElement('span');
                spark.className = 'firework-spark';
                spark.style.left = originX + '%';
                spark.style.top  = originY + '%';
                spark.style.background = colors[Math.floor(Math.random() * colors.length)];
                spark.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
                spark.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
                spark.style.animationDelay = (c * 0.15) + 's';
                fireworksEl.appendChild(spark);
                (function (s) {
                    setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 2000);
                })(spark);
            }
        }
    }

    function refreshSparkles(days) {
        sparklesEl.innerHTML = '';
        var count = Math.min(8, 3 + Math.floor(days / 10));
        var icons = ['✨','⭐','🌟','💫'];
        for (var i = 0; i < count; i++) {
            var sp = document.createElement('span');
            sp.className = 'sparkle';
            sp.textContent = icons[Math.floor(Math.random() * icons.length)];
            sp.style.left = (5 + Math.random() * 90) + '%';
            sp.style.top = (5 + Math.random() * 85) + '%';
            sp.style.animationDelay = (Math.random() * 2.5) + 's';
            sparklesEl.appendChild(sp);
        }
    }

    function refreshRainbowParticles(days) {
        rainbowParticlesEl.innerHTML = '';
        var count = 10 + Math.min(20, days);
        for (var i = 0; i < count; i++) {
            var p = document.createElement('span');
            p.className = 'particle';
            var color = rainbowPalette[(days + i) % rainbowPalette.length].c1;
            p.style.background = color;
            p.style.left = Math.random() * 100 + '%';
            p.style.bottom = '-10px';
            var size = 4 + Math.random() * 6;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.animationDelay = (Math.random() * 6) + 's';
            p.style.animationDuration = (4 + Math.random() * 4) + 's';
            rainbowParticlesEl.appendChild(p);
        }
    }

    // ---------- Render ----------
    function setLanguage(lang) {
        if (!translations[lang]) lang = 'mr';
        currentLang = lang;
        localStorage.setItem(KEY_LANG, lang);
        document.documentElement.lang = lang;

        langButtons.forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        var t = translations[lang];
        appTitleEl.textContent  = t.title;
        daysLabelEl.textContent = t.daysLabel;
        if (installBtnText) installBtnText.textContent = t.installBtn;
        if (installedMsg)   installedMsg.textContent   = t.installedMsg;
        if (iosHint)        iosHint.textContent        = t.iosHint;
        if (slippedBtnText) slippedBtnText.textContent = t.slippedBtn;
        if (modalTitle)     modalTitle.textContent     = t.modalTitle;
        if (modalLine1)     modalLine1.textContent     = t.modalLine1;
        if (modalLine2)     modalLine2.textContent     = t.modalLine2;
        if (modalHope)      modalHope.textContent      = t.modalHope;
        if (restartBtnText) restartBtnText.textContent = t.restartBtn;
        if (closeBtnText)   closeBtnText.textContent   = t.closeBtn;

        applyEverything(currentDays, true);
    }

    function applyEverything(days) {
        var t = translations[currentLang];
        if (!t) return;
        var safeDays = Math.max(1, days);

        var rainbow = getRainbowForDay(safeDays);
        counterBox.style.background = 'linear-gradient(135deg, ' + rainbow.c1 + ', ' + rainbow.c2 + ')';
        counterBox.style.boxShadow  = '0 15px 45px ' + rainbow.glow;

        var confIdx = Math.min(t.confidences.length - 1, Math.floor(safeDays / 30));
        confidenceEl.textContent = t.confidences[confIdx];
        confidenceEl.style.borderColor = rainbow.c1;
        confidenceEl.style.color       = rainbow.c1;

        motivationEl.textContent = t.motivations[safeDays % t.motivations.length];

        var magicIdx = (safeDays - 1) % 30;
        dailyMagicEl.textContent = t.dailyMagic[magicIdx] || t.dailyMagic[0];

        magicEmojiEl.textContent = getDailyEmoji(safeDays);

        var milestone = getMilestone(safeDays);
        if (milestone) {
            milestoneEl.style.display = 'inline-block';
            milestoneEl.textContent = t.milestoneLabel + ' (' + milestone + ')';
        } else {
            milestoneEl.style.display = 'none';
        }

        // Highest record badge (काउंटरच्या वर)
        var highest = getHighestRecord();
        if (highest > 0 && highest > safeDays) {
            recordBadgeEl.style.display = 'block';
            recordBadgeEl.textContent = '🔥 ' + t.recordLabel + ': ' + highest + ' ' + t.daysLabel;
        } else {
            recordBadgeEl.style.display = 'none';
        }

        refreshSparkles(safeDays);
        refreshRainbowParticles(safeDays);
    }

    function updateDays() {
        var days = calculateDays();
        if (days !== currentDays) {
            var prev = currentDays;
            currentDays = days;
            daysCountEl.textContent = days.toLocaleString('en-IN');

            if (prev !== -1 && days > prev) {
                daysCountEl.classList.remove('bump');
                void daysCountEl.offsetWidth;
                daysCountEl.classList.add('bump');
                var rainbow = getRainbowForDay(days);
                triggerFireworks([rainbow.c1, rainbow.c2, '#f1c40f', '#3498db', '#2ecc71'], 2);
                spawnConfetti(60);
            }

            // सर्वोच्च record अपडेट
            setHighestRecord(days);

            applyEverything(days);

            if (getMilestone(days)) {
                setTimeout(function () {
                    spawnConfetti(150);
                    setTimeout(function () { spawnConfetti(120); }, 600);
                    setTimeout(function () { spawnConfetti(120); }, 1200);
                    triggerFireworks(['#f39c12','#e74c3c','#f1c40f','#2ecc71','#9b59b6'], 5);
                }, 300);
            }
        }
    }

    // ---------- Slipped Actions ----------
    function openSlippedModal() {
        var t = translations[currentLang];
        var highest = getHighestRecord();

        if (highest > 0) {
            modalRecord.style.display = 'block';
            modalRecord.textContent = t.recordText.replace('{N}', highest);
        } else {
            modalRecord.style.display = 'none';
        }

        slippedModal.classList.add('show');
    }

    function closeSlippedModal() {
        slippedModal.classList.remove('show');
    }

    function restartCounter() {
        var today = getTodayStart();
        localStorage.setItem(KEY_START, today.toISOString());
        currentDays = -1;
        closeSlippedModal();
        updateDays();
        setTimeout(function () {
            spawnConfetti(60);
        }, 300);
    }

    if (slippedBtn) slippedBtn.addEventListener('click', openSlippedModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeSlippedModal);
    if (restartBtn) restartBtn.addEventListener('click', restartCounter);

    // Modal बाहेर क्लिक केल्यावर बंद
    if (slippedModal) {
        slippedModal.addEventListener('click', function (e) {
            if (e.target === slippedModal) closeSlippedModal();
        });
    }

    // ---------- PWA Install ----------
    function isStandalone() {
        return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
            || window.navigator.standalone === true;
    }

    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) installBtn.style.display = 'flex';
    });

    window.addEventListener('appinstalled', function () {
        deferredPrompt = null;
        if (installBtn) installBtn.style.display = 'none';
        if (installedMsg) {
            installedMsg.style.display = 'block';
            setTimeout(function () { installedMsg.style.display = 'none'; }, 6000);
        }
    });

    if (installBtn) {
        installBtn.addEventListener('click', function () {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(function (choice) {
                    if (choice && choice.outcome === 'accepted') {
                        if (installedMsg) {
                            installedMsg.style.display = 'block';
                            setTimeout(function () { installedMsg.style.display = 'none'; }, 6000);
                        }
                    }
                    deferredPrompt = null;
                    installBtn.style.display = 'none';
                });
                return;
            }
            if (isIOS()) {
                if (iosHint) iosHint.style.display = 'block';
                return;
            }
            var msg = currentLang === 'mr'
                ? 'ब्राउझर आपोआप इन्स्टॉल करू शकत नाही.\n\nकृपया Chrome / Edge वापरा किंवा ब्राउझर मेनू (⋮) → "Install app" / "Add to Home screen" निवडा.'
                : currentLang === 'hi'
                ? 'ब्राउज़र अपने आप इंस्टॉल नहीं कर सकता।\n\nChrome / Edge उपयोग करें या मेनू (⋮) → "Install app" / "Add to Home screen" चुनें।'
                : 'Browser cannot install automatically.\n\nPlease use Chrome / Edge or use menu (⋮) → "Install app" / "Add to Home screen".';
            alert(msg);
        });
    }

    if (isIOS() && !isStandalone()) {
        if (installBtn) installBtn.style.display = 'flex';
        if (iosHint)    iosHint.style.display = 'block';
    }

    if (isStandalone()) {
        if (installBtn) installBtn.style.display = 'none';
        if (iosHint)    iosHint.style.display = 'none';
    }

    // ---------- Timers ----------
    function scheduleMidnightTick() {
        if (tickTimerId) clearInterval(tickTimerId);
        tickTimerId = setInterval(updateDays, 30 * 1000);
    }

    // ---------- Init ----------
    function init() {
        var savedLang = localStorage.getItem(KEY_LANG);
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
        } else {
            var nav = (navigator.language || 'mr').toLowerCase();
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

        // पहिल्यांदा उघडल्यावर confetti
        var todayKey = getTodayStart().toISOString();
        var lastConfetti = localStorage.getItem(KEY_LAST_CONFETTI);
        if (lastConfetti !== todayKey) {
            localStorage.setItem(KEY_LAST_CONFETTI, todayKey);
            setTimeout(function () {
                spawnConfetti(80);
                triggerFireworks(['#f39c12','#e74c3c','#3498db','#2ecc71'], 2);
            }, 500);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
