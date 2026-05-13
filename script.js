const langToggle = document.getElementById('lang-toggle');
const translations = {
    en: {
        "linkedin": "View LinkedIn Profile",
        name: "TAMIM ALBAHUSSEIN",
        "title": "Computer Science Student | Web Developer",
        "about-title": "Professional Summary",
        "about-text": "Focused Computer Science student with expertise in Web Development and Cybersecurity.",
        "skills-title": "Technical Skills",
        "skill-1": "HTML5 & CSS3 (Semantic & Responsive)",
        "skill-2": "JavaScript (Vanilla ES6+)",
        "skill-3": "Digital Forensics & Cloud Security",
        btn: "العربية"
    },
    ar: {
        "linkedin": "عرض الملف الشخصي على لينكد إن",
        name: "تميم الباحسين",
        "title": "طالب علوم حاسب | مطور ويب",
        "about-title": "الملخص المهني",
        "about-text": "طالب علوم حاسب مهتم بتطوير الويب والأمن السيبراني والبنية التحتية للسحابية.",
        "skills-title": "المهارات التقنية",
        "skill-1": "HTML5 و CSS3 (بناء هيكلي واستجابة)",
        "skill-2": "جاوا سكريبت (Vanilla ES6+)",
        "skill-3": "التحقيق الجنائي الرقمي وأمن السحاب",
        btn: "English"
    }
};

let currentLang = 'en';

langToggle.addEventListener('click', () => {
    // Switch language state
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update direction and font
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Update all text elements
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        elem.innerText = translations[currentLang][key];
    });

    // Update button text
    langToggle.innerText = translations[currentLang].btn;
});

// Theme Toggle Logic (from previous response)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

