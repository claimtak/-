/* =====================================================
   "मी आजपासून दारू सोडली" — 3 भाषा + रोजची जादू
   Confetti, Fireworks, Sparkles, Rainbow, Daily Magic
   ===================================================== */

(function () {
    'use strict';

    var STORAGE_KEY_START = 'sobriety_start_date_v5';
    var STORAGE_KEY_LANG  = 'sobriety_lang_v5';
    var STORAGE_KEY_LAST_CONFETTI = 'sobriety_last_confetti_v5';

    // ---------- Translations ----------
    var translations = {
        mr: {
            title: "मी आजपासून दारू सोडली",
            daysLabel: "दिवस",
            installBtn: "ॲप डाउनलोड करा",
            installedMsg: "✅ ॲप इन्स्टॉल झालं! होम स्क्रीनवरच्या आयकॉनवर क्लिक करा.",
            iosHint: '📱 iPhone/iPad? Share → "Add to Home Screen" निवडा.',
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
            // रोजची खास जादू — 30 वेगवेगळे संदेश (एक cycle)
            dailyMagic: [
                "आज पहिला दिवस — नव्या जीवनाची सुरुवात! 🌅",
                "तुमच्या शरीरात नवी उर्जा येत आहे! ⚡",
                "तुमचं मन स्वच्छ होत आहे! 🧘",
                "तुमची त्वचा उजळत आहे! ✨",
                "तुमची झोप सुधारत आहे! 😴",
                "तुमचं हृदय मजबूत होत आहे! ❤️",
                "तुमचं यकृत (liver) बरे होत आहे! 💚",
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
            installedMsg: "✅ ऐप इंस्टॉल हो गया! होम स्क्रीन के आइकन पर क्लिक करें।",
            iosHint: '📱 iPhone/iPad? Share → "Add to Home Screen" चुनें।',
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
            installedMsg: "✅ App installed! Tap the icon on your home screen.",
            iosHint: '📱 On iPhone/iPad? Tap Share → "Add to Home Screen".',
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

    // ---------- Rainbow Color Levels (दिवसानुसार बदलतो) ----------
    // प्रत्येक दिवशी नवीन रंग-संयोजन
    var rainbowPalette = [
        { c1: '#e74c3c', c2: '#c0392b', glow: 'rgba(231,76,60,0.55)'   }, // लाल
        { c1: '#e67e22', c2: '#d35400', glow: 'rgba(230,126,34,0.55)'  }, // नारिंगी
        { c1: '#f39c12', c2: '#e67e22', glow: 'rgba(243,156,18,0.55)'  }, // सोनेरी
        { c1: '#f1c40f', c2: '#f39c12', glow: 'rgba(241,196,15,0.55)'  }, // पिवळा
        { c1: '#2ecc71', c2: '#27ae60', glow: 'rgba(46,204,113,0.55)'  }, // हिरवा
        { c1: '#1abc9c', c2: '#16a085', glow: 'rgba(26,188,156,0.55)'  }, // हिरवट-निळा
        { c1: '#3498db', c2: '#2980b9', glow: 'rgba(
