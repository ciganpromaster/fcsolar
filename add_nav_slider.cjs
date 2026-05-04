const fs = require('fs');

// 1. Update index.css
let css = fs.readFileSync('index.css', 'utf-8');
if (!css.includes('.hero-slider')) {
    css += `
/* ==========================================
   Hero Slider
   ========================================== */
.hero-slider { position: relative; width: 100%; height: 400px; overflow: hidden; border-radius: 16px; }
.hero-slider img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 1s ease-in-out; }
.hero-slider img.active { opacity: 1; }

/* ==========================================
   Mobile Tab Navigation
   ========================================== */
.mobile-tab-nav {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid var(--glass-border);
    z-index: 1000;
    padding-bottom: env(safe-area-inset-bottom);
}
.tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    text-decoration: none;
    padding: 0.8rem 0;
    font-size: 0.75rem;
    gap: 0.3rem;
    transition: color 0.3s;
    min-height: 56px;
}
.tab-item i { font-size: 1.2rem; }
.tab-item:hover, .tab-item:active { color: var(--primary); }

@media (max-width: 900px) {
    .mobile-tab-nav { display: flex; }
    footer { padding-bottom: 6rem; }
}
`;
    fs.writeFileSync('index.css', css, 'utf-8');
}

// 2. Update main.js for slider
let mainJs = fs.readFileSync('main.js', 'utf-8');
if (!mainJs.includes('heroSlides')) {
    mainJs += `
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
`;
    fs.writeFileSync('main.js', mainJs, 'utf-8');
}

// 3. Update index.html and en/index.html
function injectHtml(file, contactLink, homeLink, busLink, instLink) {
    let html = fs.readFileSync(file, 'utf-8');
    
    // Replace hero image with slider
    if (html.includes('<img src="./images/hero_solar.png"')) {
        html = html.replace(
            /<div class="glass-image-wrapper reveal delay-1">\s*<img src="\.\/images\/hero_solar\.png"[^>]+>\s*<\/div>/,
            `<div class="glass-image-wrapper reveal delay-1">
                    <div class="hero-slider">
                        <img src="./images/hero_solar.png" alt="FC Solar" width="600" height="400" loading="eager" class="slide active">
                        <img src="./images/firmy_solar.png" alt="FC Solar Firmy" width="600" height="400" loading="lazy" class="slide">
                        <img src="./images/kosice_1.png" alt="FC Solar Lokality" width="600" height="400" loading="lazy" class="slide">
                    </div>
                </div>`
        );
    }
    
    // Inject bottom nav
    if (!html.includes('mobile-tab-nav')) {
        html = html.replace('</body>', `    <!-- Mobile Tab Navigation -->
    <nav class="mobile-tab-nav">
        <a href="${homeLink}" class="tab-item">
            <i class="fas fa-home"></i>
            <span data-i18n="nav_home">Domácnosti</span>
        </a>
        <a href="${busLink}" class="tab-item">
            <i class="fas fa-building"></i>
            <span data-i18n="nav_business">Firmy</span>
        </a>
        <a href="${instLink}" class="tab-item">
            <i class="fas fa-map-marker-alt"></i>
            <span data-i18n="nav_installations">Inštalácie</span>
        </a>
        <a href="${contactLink}" class="tab-item">
            <i class="fas fa-envelope"></i>
            <span data-i18n="nav_contact">Kontakt</span>
        </a>
    </nav>
</body>`);
    }
    fs.writeFileSync(file, html, 'utf-8');
}

injectHtml('index.html', '#kontakt', '#domacnosti', '#firmy', '#lokality');
injectHtml('en/index.html', '#kontakt', '#domacnosti', '#firmy', '#lokality');
