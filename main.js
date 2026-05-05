/**
 * BRAND IDENTIFICATION: FC SOLAR (Green Site)
 * Primary Color: #10B981 (Emerald)
 * Directory: Root (/)
 */

// ==========================================
// 1. Loading Animation
// ==========================================
function hideLoader() {
    const loader = document.getElementById('loader-wrapper');
    const plug = document.querySelector('.plug');
    const cable = document.querySelector('.cable');
    const socket = document.querySelector('.socket');
    if (loader && loader.style.opacity === '0') return;
    if(plug) plug.classList.add('connected');
    if(cable) cable.classList.add('connected');
    if(socket) socket.classList.add('connected');
    setTimeout(() => {
        if(loader) { loader.style.opacity = '0'; loader.style.visibility = 'hidden'; }
    }, 800);
}
setTimeout(() => {
    if (document.readyState === 'complete') { hideLoader(); }
    else { window.addEventListener('load', hideLoader); setTimeout(hideLoader, 3000); }
}, 800);

// ==========================================
// 2. Header Scroll Effect
// ==========================================
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
});

// ==========================================
// 3. Scroll Reveal Animations
// ==========================================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); revealObserver.unobserve(entry.target); }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
revealElements.forEach(el => revealObserver.observe(el));

// ==========================================
// 4. Energy Streaks Background
// ==========================================
const starContainer = document.getElementById('star-container');
function spawnStar() {
    if (!starContainer) return;
    const star = document.createElement('div');
    star.className = 'energy-streak';
    const startY = Math.random() * 100;
    const duration = 0.57 + Math.random() * 1.71;
    const distance = window.innerWidth + 400;
    star.style.setProperty('--distance', `${distance}px`);
    star.style.setProperty('--duration', `${duration}s`);
    star.style.left = `-200px`;
    star.style.top = `${startY}%`;
    starContainer.appendChild(star);
    setTimeout(() => { star.remove(); }, duration * 1000);
}
function scheduleNextStar() {
    const delay = 100 + Math.random() * 300;
    setTimeout(() => { spawnStar(); scheduleNextStar(); }, delay);
}
scheduleNextStar();

// ==========================================
// 5. Multilingual Support (SK / EN)
// ==========================================
const translations = {
    sk: {
        nav_home: "Domácnosti",
        nav_business: "Firmy",
        nav_installations: "Inštalácie",
        nav_installations_btn: "Naše inštalácie",
        nav_process: "Ako to funguje",
        nav_contact: "Mám záujem",
        hero_title: 'Zelená energia pre <span class="highlight">Slovensko</span>',
        hero_subtitle: "Najmodernejšie fotovoltické riešenia s maximálnou účinnosťou. Vybavíme za vás dotácie a zabezpečíme profesionálnu inštaláciu.",
        hero_cta1: "Získať ponuku",
        hero_cta2: "Zistiť viac",
        why_title: "Prečo si vybrať FC Solar?",
        why_subtitle: "Prinášame inovatívny prístup k solárnej energii s ohľadom na životné prostredie a vašu peňaženku.",
        card1_title: "Skúsenosti a odbornosť",
        card1_desc: "Viacročné skúsenosti a stovky zrealizovaných projektov po celom Slovensku zaručujú profesionálny prístup.",
        card2_title: "Vysoké štandardy kvality",
        card2_desc: "Používame len overené a certifikované komponenty od špičkových svetových výrobcov pre maximálnu životnosť.",
        card3_title: "Riešenia na kľúč (A po Z)",
        card3_desc: "Od návrhu, cez byrokraciu až po inštaláciu a revíziu. Zabezpečujeme kompletný servis bez starostí.",
        card4_title: "Vybavenie dotácií",
        card4_desc: "Sme registrovaní zhotovitelia. Vybavíme za vás celú administratívu pre získanie dotácií Zelená domácnostiam.",
        firmy_title: "Riešenia pre domácnosti a firmy",
        firmy_subtitle: "Znížte svoje náklady vďaka vlastnej slnečnej elektrárni.",
        firmy_h3: "Energetická nezávislosť pre váš domov aj biznis",
        firmy_p1: "Inštalácie pre domácnosti aj komerčné priestory navrhujeme s dôrazom na rýchlu návratnosť investície a maximálny výkon.",
        firmy_bullet1: "Optimalizácia nákladov",
        firmy_bullet2: "Zelené ESG reportovanie",
        firmy_bullet3: "Ochrana pred výkyvmi cien energií",
        process_title: "Váš prechod na zelenú energiu",
        process_subtitle: "Jednoducho a bezpečne, krok za krokom.",
        step1_title: "Návrh riešenia",
        step1_desc: "Bezplatná obhliadka vašej strechy, analýza aktuálnej spotreby a vypracovanie optimálneho projektu pre vašu nehnuteľnosť.",
        step2_title: "Administratíva a Dotácie",
        step2_desc: "Zabezpečíme schválenie distribučnou spoločnosťou a vybavíme žiadosti o štátne dotácie, aby ste ušetrili čo najviac.",
        step3_title: "Inštalácia a Revízia",
        step3_desc: "Rýchla a profesionálna montáž našimi certifikovanými technikmi. Väčšina systémov je sprevádzkovaná v priebehu jedného dňa.",
        contact_title: "Začnite svoju solárnu cestu",
        contact_name: "Meno a Priezvisko",
        contact_email: "E-mailová adresa",
        contact_phone: "Telefónne číslo",
        contact_message: "Vaša správa alebo popis dopytu",
        contact_gdpr: "Súhlasím so spracovaním osobných údajov za účelom vybavenia dopytu.",
        contact_btn: "Odoslať nezáväzný dopyt",
        footer_slogan: "Zelenšia budúcnosť pre Slovensko",
        footer_copyright: "&copy; 2026 Galaxion s.r.o. Všetky práva vyhradené.",
        showcase_title: "Naše inštalácie po celom Slovensku",
        showcase_subtitle: "Pozrite si naše projekty v najväčších slovenských mestách a zistite, prečo nám dôverujú stovky klientov.",
        city_ba: "Bratislava a okolie",
        city_ba_desc: "Komplexné riešenia pre hlavné mesto.",
        city_ke: "Košice a okolie",
        city_ke_desc: "Efektívna energia pre metropolu východu.",
        city_za: "Žilina a okolie",
        city_za_desc: "Solárne systémy v srdci severného Slovenska.",
        city_nr: "Nitra a okolie",
        city_nr_desc: "Zelená energia pre nitriansky <span class=\"highlight\">región</span>.",
        view_gallery: "Zobraziť galériu",
        roi_years: "Rokov",
        roi_household_sub: "Návratnosť s dotáciou pre rodinný dom",
        roi_sub_suffix: "(bez dotácie 7.5 - 8.5 r.)",
        stat_annual_savings: "Ročná úspora (5 kWp systém)",
        stat_annual_yield: "Ročná výroba elektriny",
        stat_max_subsidy: "Maximálna dotácia EÚ",
        yield_best_juh: "Maximálna výťažnosť, Juh",
        yield_excellent_juh: "Excelentný potenciál, Juh",
        yield_good_vychod: "Vysoká efektivita, Východ",
        yield_good_sever: "Dobrý potenciál, Sever",
        seo_title_suffix: "Dotácie a Pripojenie do Siete",
        seo_subtitle_generic: "Dôležité informácie pre domácnosti a firmy v <span class=\"highlight\">regióne</span>.",
        grid_ba_nr: "Západoslovenská distribučná",
        grid_ke: "Východoslovenská distribučná",
        grid_za: "Stredoslovenská distribučná",
        seo_siea_title: "Kto administruje dotácie (SIEA)",
        seo_siea_desc: "Priame štátne dotácie na solárne panely pre domácnosti a firmy nie sú poskytované súkromnou firmou, ale spravuje ich <strong>Slovenská inovačná a energetická agentúra (SIEA)</strong>. Domácnosti môžu využiť projekt <strong>Zelená domácnostiam</strong>, zatiaľ čo firmy projekt <strong>Zelená podnikom</strong>. Dotácia vám výrazne zníži počiatočnú investíciu (až do 4 050 € pre domácnosť, až do 50 000 € pre firmy).",
        seo_contact_title: "Všetko vybavíme za vás",
        seo_contact_desc_ba_nr: "Kompletnú administratívu a byrokraciu vyriešime za vás. Ako váš profesionálny partner sa postaráme o všetko, vrátane komunikácie s vaším distribútorom – <strong>ZSD</strong> a overenia rezervovanej kapacity na pripojenie. S FC Solar nemusíte riešiť žiadne úradné úkony; od vás potrebujeme len list vlastníctva k rodinnému domu, o zvyšok sa postaráme my.",
        seo_contact_desc_ke: "Kompletnú administratívu a byrokraciu vyriešime za vás. Ako váš profesionálny partner sa postaráme o všetko, vrátane komunikácie s vaším distribútorom – <strong>VSD</strong> a overenia rezervovanej kapacity na pripojenie. S FC Solar nemusíte riešiť žiadne úradné úkony; od vás potrebujeme len list vlastníctva k rodinnému domu, o zvyšok sa postaráme my.",
        seo_contact_desc_za: "Kompletnú administratívu a byrokraciu vyriešime za vás. Ako váš profesionálny partner sa postaráme o všetko, vrátane komunikácie s vaším distribútorom – <strong>SSD</strong> a overenia rezervovanej kapacity na pripojenie. S FC Solar nemusíte riešiť žiadne úradné úkony; od vás potrebujeme len list vlastníctva k rodinnému domu, o zvyšok sa postaráme my.",
        business_solutions_title: "Riešenia pre firmy v <span class=\"highlight\">regióne</span>",
        business_solutions_desc: "Fotovoltika pre firmy predstavuje efektívny spôsob znižovania prevádzkových nákladov s rýchlou návratnosťou investície (6 – 8 rokov bez dotácií). Prostredníctvom projektu <strong>Zelená podnikom</strong> navyše získate preplatenie nákladov na profesionálny energetický audit.",
        roi_business_label: "Rokov návratnosť s dotáciou",
        gallery_in_images: ", váš domov",
        gallery_desc: "Riešenia v <span class=\"highlight\">regióne</span>.",
        calc_title: "Vypočítajte si úsporu pre váš dom",
        calc_desc: "Naši experti vám pripravia presný výpočet návratnosti pre vašu nehnuteľnosť.",
        city_around: "a okolie",
        ba_h1: "Fotovoltika Bratislava",
        nr_h1: "Fotovoltika Nitra",
        ke_h1: "Fotovoltika Košice",
        za_h1: "Fotovoltika Žilina",
        ba_p: "Zistite, koľko môžete ušetriť s vlastnou solárnou elektrárňou. S FC Solar dosiahnete v <span class=\"highlight\">regióne</span> Bratislava návratnosť, ktorá dáva zmysel od prvého dňa.",
        nr_p: "Zistite, koľko môžete ušetriť s vlastnou solárnou elektrárňou. S FC Solar dosiahnete v <span class=\"highlight\">regióne</span> Nitra návratnosť, ktorá dáva zmysel od prvého dňa.",
        ke_p: "Zistite, koľko môžete ušetriť s vlastnou solárnou elektrárňou. S FC Solar dosiahnete v <span class=\"highlight\">regióne</span> Košice návratnosť, ktorá dáva zmysel od prvého dňa.",
        za_p: "Zistite, koľko môžete ušetriť s vlastnou solárnou elektrárňou. S FC Solar dosiahnete v <span class=\"highlight\">regióne</span> Žilina návratnosť, ktorá dáva zmysel od prvého dňa.",
        calc_desc_ba: "Naši experti pre <span class=\"highlight\">región</span> Bratislava vám pripravia presný výpočet návratnosti pre vašu nehnuteľnosť.",
        calc_desc_nr: "Naši experti pre <span class=\"highlight\">región</span> Nitra vám pripravia presný výpočet návratnosti pre vašu nehnuteľnosť.",
        calc_desc_ke: "Naši experti pre <span class=\"highlight\">región</span> Košice vám pripravia presný výpočet návratnosti pre vašu nehnuteľnosť.",
        calc_desc_za: "Naši experti pre <span class=\"highlight\">región</span> Žilina vám pripravia presný výpočet návratnosti pre vašu nehnuteľnosť."
    },
    en: {
        nav_home: "Residential",
        nav_business: "Commercial",
        nav_installations: "Installations",
        nav_installations_btn: "Our Installations",
        nav_process: "How it works",
        nav_contact: "Get a quote",
        hero_title: 'Green energy for <span class="highlight">Slovakia</span>',
        hero_subtitle: "State-of-the-art photovoltaic solutions with maximum efficiency. We handle subsidies and ensure professional installation.",
        hero_cta1: "Get a quote",
        hero_cta2: "Learn more",
        why_title: "Why choose FC Solar?",
        why_subtitle: "We bring an innovative approach to solar energy with respect to the environment and your wallet.",
        card1_title: "Experience and expertise",
        card1_desc: "Years of experience and hundreds of completed projects across Slovakia guarantee a professional approach.",
        card2_title: "High quality standards",
        card2_desc: "We use only verified and certified components from top global manufacturers for maximum lifespan.",
        card3_title: "Turnkey solutions (A to Z)",
        card3_desc: "From design and bureaucracy to installation and revision. We provide a complete hassle-free service.",
        card4_title: "Subsidy assistance",
        card4_desc: "We handle all the paperwork to get you the state subsidies without any effort on your part.",
        firmy_title: "Solutions for households and businesses",
        firmy_subtitle: "Reduce your costs with your own solar power plant.",
        firmy_h3: "Energy independence for your home and business",
        firmy_p1: "We design residential and commercial installations with an emphasis on rapid return on investment and maximum performance.",
        firmy_bullet1: "Cost optimization",
        firmy_bullet2: "Green ESG reporting",
        firmy_bullet3: "Protection against energy price fluctuations",
        process_title: "Your transition to green energy",
        process_subtitle: "Simple and safe, step by step.",
        step1_title: "Solution Design",
        step1_desc: "Free roof inspection, consumption analysis, and development of an optimal project for your property.",
        step2_title: "Administration & Subsidies",
        step2_desc: "We secure distribution company approval and process state subsidy applications to save you the most.",
        step3_title: "Installation & Revision",
        step3_desc: "Fast and professional installation by our certified technicians. Most systems are operational within a day.",
        contact_title: "Start your solar journey",
        contact_name: "Full Name",
        contact_email: "Email Address",
        contact_phone: "Phone Number",
        contact_message: "Your message or inquiry description",
        contact_gdpr: "I consent to the processing of personal data for the purpose of handling my inquiry.",
        contact_btn: "Send non-binding inquiry",
        footer_slogan: "A greener future for Slovakia",
        footer_copyright: "&copy; 2026 Galaxion s.r.o. All rights reserved.",
        showcase_title: "Our Installations Across Slovakia",
        showcase_subtitle: "Check out our projects in major Slovak cities and discover why hundreds of clients trust us.",
        city_ba: "Bratislava <span class=\"highlight\">Region</span>",
        city_ba_desc: "Comprehensive solutions for the capital.",
        city_ke: "Košice <span class=\"highlight\">Region</span>",
        city_ke_desc: "Efficient energy for the eastern metropolis.",
        city_za: "Žilina <span class=\"highlight\">Region</span>",
        city_za_desc: "Solar systems in the heart of northern Slovakia.",
        city_nr: "Nitra <span class=\"highlight\">Region</span>",
        city_nr_desc: "Green energy for the Nitra <span class=\"highlight\">region</span>.",
        view_gallery: "View Gallery",
        roi_years: "Years",
        roi_household_sub: "Return with subsidy for a family house",
        roi_sub_suffix: "(without subsidy 7.5 - 8.5 y.)",
        stat_annual_savings: "Annual savings (5 kWp system)",
        stat_annual_yield: "Annual electricity generation",
        stat_max_subsidy: "Maximum EU subsidy",
        yield_best_juh: "Maximum Yield, South",
        yield_excellent_juh: "Excellent Potential, South",
        yield_good_vychod: "High Efficiency, East",
        yield_good_sever: "Good Potential, North",
        seo_title_suffix: "Subsidies and Grid Connection",
        seo_subtitle_generic: "Important information for households and businesses in the <span class=\"highlight\">region</span>.",
        grid_ba_nr: "West Slovak Distribution",
        grid_ke: "East Slovak Distribution",
        grid_za: "Central Slovak Distribution",
        seo_siea_title: "Who administers the subsidies (SIEA)",
        seo_siea_desc: "Direct state subsidies for solar panels are managed by the <strong>Slovak Innovation and Energy Agency (SIEA)</strong>. Households can use the <strong>Green for Households</strong> project, while businesses use <strong>Green for Businesses</strong>. The subsidy significantly reduces your initial investment (up to €4,050 for a household, up to €50,000 for businesses).",
        seo_contact_title: "We will handle everything for you",
        seo_contact_desc_ba_nr: "We take complete care of all administration and bureaucracy for you. As your professional partner, we manage everything, including communication with your distributor – <strong>ZSD</strong> and verifying the reserved connection capacity. With FC Solar, you won't have to deal with any paperwork; we handle all the work for you, requiring only your title deed to get started.",
        seo_contact_desc_ke: "We take complete care of all administration and bureaucracy for you. As your professional partner, we manage everything, including communication with your distributor – <strong>VSD</strong> and verifying the reserved connection capacity. With FC Solar, you won't have to deal with any paperwork; we handle all the work for you, requiring only your title deed to get started.",
        seo_contact_desc_za: "We take complete care of all administration and bureaucracy for you. As your professional partner, we manage everything, including communication with your distributor – <strong>SSD</strong> and verifying the reserved connection capacity. With FC Solar, you won't have to deal with any paperwork; we handle all the work for you, requiring only your title deed to get started.",
        business_solutions_title: "Solutions for companies in the <span class=\"highlight\">region</span>",
        business_solutions_desc: "Commercial solar installations offer a rapid return on investment (typically 6–8 years without subsidies) due to higher business electricity rates. Furthermore, the <strong>Green for Businesses</strong> program covers the full cost of mandatory professional energy audits.",
        roi_business_label: "Years return on investment with subsidy",
        gallery_in_images: ", your home",
        gallery_desc: "Solutions in the <span class=\"highlight\">region</span>.",
        calc_title: "Calculate savings for your home",
        calc_desc: "Our experts will prepare a precise return on investment calculation for your property.",
        city_around: "<span class=\"highlight\">Region</span>",
        ba_h1: "Photovoltaics Bratislava",
        nr_h1: "Photovoltaics Nitra",
        ke_h1: "Photovoltaics Košice",
        za_h1: "Photovoltaics Žilina",
        ba_p: "Find out how much you can save with your own solar power plant. With FC Solar, you achieve a return on investment in the Bratislava <span class=\"highlight\">region</span> that makes sense from day one.",
        nr_p: "Find out how much you can save with your own solar power plant. With FC Solar, you achieve a return on investment in the Nitra <span class=\"highlight\">region</span> that makes sense from day one.",
        ke_p: "Find out how much you can save with your own solar power plant. With FC Solar, you achieve a return on investment in the Košice <span class=\"highlight\">region</span> that makes sense from day one.",
        za_p: "Find out how much you can save with your own solar power plant. With FC Solar, you achieve a return on investment in the Žilina <span class=\"highlight\">region</span> that makes sense from day one.",
        calc_desc_ba: "Our experts for the Bratislava <span class=\"highlight\">region</span> will prepare a precise return on investment calculation for your property.",
        calc_desc_nr: "Our experts for the Nitra <span class=\"highlight\">region</span> will prepare a precise return on investment calculation for your property.",
        calc_desc_ke: "Our experts for the Košice <span class=\"highlight\">region</span> will prepare a precise return on investment calculation for your property.",
        calc_desc_za: "Our experts for the Žilina <span class=\"highlight\">region</span> will prepare a precise return on investment calculation for your property."
    }
};

function switchLanguage(lang) {
    if (!lang || !translations[lang]) return;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('preferred_lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => { switchLanguage(btn.getAttribute('data-lang')); });
});

const savedLang = localStorage.getItem('preferred_lang');
if (savedLang && savedLang !== 'sk' && translations[savedLang]) {
    try {
        switchLanguage(savedLang);
    } catch (e) {
        console.error("Language switch failed:", e);
    }
}

// ==========================================
// 6. Stats Counter Animation
// ==========================================
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    const animateValue = (obj, start, end, duration, suffix = "") => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = (progress * (end - start) + start);
            
            let formattedVal;
            if (end % 1 !== 0) {
                formattedVal = currentVal.toFixed(1);
            } else {
                formattedVal = Math.floor(currentVal);
            }
            
            obj.innerHTML = formattedVal + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetStr = entry.target.getAttribute('data-target');
                const suffix = entry.target.getAttribute('data-suffix') || "";
                const target = parseFloat(targetStr);
                
                if (!isNaN(target)) {
                    setTimeout(() => {
                        animateValue(entry.target, 0, target, 2000, suffix);
                    }, 300);
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1 
    });

    statNumbers.forEach(num => statsObserver.observe(num));
}

// Ensure it runs on load or if script loads after DOM is ready
window.addEventListener('load', initStatsAnimation);
if (document.readyState === 'complete') {
    initStatsAnimation();
} else {
    document.addEventListener('DOMContentLoaded', initStatsAnimation);
}

// ==========================================
// 7. Contact Form Toast Notification
// ==========================================
(function () {
    const params = new URLSearchParams(window.location.search);
    const isEN = document.documentElement.lang === 'en';

    let msg = null;
    let type = 'success';

    if (params.has('success')) {
        msg = isEN
            ? '✅ Your enquiry was sent! We will contact you shortly.'
            : '✅ Váš dopyt bol odoslaný! Ozveme sa vám čoskoro.';
        type = 'success';
    } else if (params.has('error')) {
        msg = isEN
            ? '❌ Something went wrong. Please try again or email us directly.'
            : '❌ Niečo sa pokazilo. Skúste znovu alebo nás kontaktujte priamo.';
        type = 'error';
    }

    if (!msg) return;

    // Remove query param from URL without reload
    const clean = window.location.pathname + window.location.hash;
    window.history.replaceState({}, '', clean);

    // Build toast
    const toast = document.createElement('div');
    toast.setAttribute('role', 'alert');
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: '9999',
        maxWidth: '380px',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        fontSize: '0.95rem',
        fontWeight: '500',
        lineHeight: '1.5',
        boxShadow: '0 8px 32px rgba(0,0,0,.35)',
        backdropFilter: 'blur(12px)',
        color: '#fff',
        background: type === 'success'
            ? 'linear-gradient(135deg,#064e3b,#10b981)'
            : 'linear-gradient(135deg,#7f1d1d,#ef4444)',
        transform: 'translateY(120%)',
        transition: 'transform .4s cubic-bezier(.34,1.56,.64,1)',
    });
    toast.textContent = msg;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => { toast.style.transform = 'translateY(0)'; });
    });

    // Auto-dismiss after 6 s
    setTimeout(() => {
        toast.style.transform = 'translateY(120%)';
        setTimeout(() => toast.remove(), 500);
    }, 6000);

    // Click to dismiss early
    toast.addEventListener('click', () => {
        toast.style.transform = 'translateY(120%)';
        setTimeout(() => toast.remove(), 500);
    });
})();

// ==========================================
// 8. Hero Slider Animation
// ==========================================
const heroSlides = document.querySelectorAll('.hero-slider .slide');
if (heroSlides.length > 0) {
    let currentHeroSlide = 0;
    setInterval(() => {
        heroSlides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add('active');
    }, 5000);
}
