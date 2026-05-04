const fs = require('fs');

// Update main.js
let mainJs = fs.readFileSync('main.js', 'utf-8');
mainJs = mainJs.replace(/firmy_title: "Riešenia pre firmy",/g, 'firmy_title: "Riešenia pre domácnosti a firmy",');
mainJs = mainJs.replace(/firmy_title: "Commercial Solutions",/g, 'firmy_title: "Solutions for households and businesses",');
mainJs = mainJs.replace(/firmy_subtitle: "Znížte prevádzkové náklady vašej firmy vďaka vlastnej slnečnej elektrárni\.",/g, 'firmy_subtitle: "Znížte svoje náklady vďaka vlastnej slnečnej elektrárni.",');
mainJs = mainJs.replace(/firmy_subtitle: "Reduce your company's operating costs with your own solar power plant\.",/g, 'firmy_subtitle: "Reduce your costs with your own solar power plant.",');
mainJs = mainJs.replace(/firmy_h3: "Energetická nezávislosť pre váš biznis",/g, 'firmy_h3: "Energetická nezávislosť pre váš domov aj biznis",');
mainJs = mainJs.replace(/firmy_h3: "Energy independence for your business",/g, 'firmy_h3: "Energy independence for your home and business",');
mainJs = mainJs.replace(/firmy_p1: "Priemyselné a komerčné inštalácie navrhujeme s dôrazom na rýchlu návratnosť investície a maximálny výkon\.",/g, 'firmy_p1: "Inštalácie pre domácnosti aj komerčné priestory navrhujeme s dôrazom na rýchlu návratnosť investície a maximálny výkon.",');
mainJs = mainJs.replace(/firmy_p1: "We design industrial and commercial installations with an emphasis on rapid return on investment and maximum performance\.",/g, 'firmy_p1: "We design residential and commercial installations with an emphasis on rapid return on investment and maximum performance.",');

// Update feature cards in main.js
mainJs = mainJs.replace(/card1_title: "Smart technológie",/g, 'card1_title: "Skúsenosti a odbornosť",');
mainJs = mainJs.replace(/card1_title: "Smart Technology",/g, 'card1_title: "Experience and expertise",');
mainJs = mainJs.replace(/card1_desc: "Ovládajte svoju spotrebu pomocou inteligentnej aplikácie priamo z vášho mobilu nech ste kdekoľvek\.",/g, 'card1_desc: "Viacročné skúsenosti a stovky zrealizovaných projektov po celom Slovensku zaručujú profesionálny prístup.",');
mainJs = mainJs.replace(/card1_desc: "Control your consumption using an intelligent app directly from your smartphone wherever you are\.",/g, 'card1_desc: "Years of experience and hundreds of completed projects across Slovakia guarantee a professional approach.",');

mainJs = mainJs.replace(/card2_title: "Dotácie na kľúč",/g, 'card2_title: "Vysoké štandardy kvality",');
mainJs = mainJs.replace(/card2_title: "Turnkey Subsidies",/g, 'card2_title: "High quality standards",');
mainJs = mainJs.replace(/card2_desc: "Získajte štátnu podporu z programu Zelená domácnostiam bez starostí\. Všetku byrokraciu vyriešime za vás\.",/g, 'card2_desc: "Používame len overené a certifikované komponenty od špičkových svetových výrobcov pre maximálnu životnosť.",');
mainJs = mainJs.replace(/card2_desc: "Get state support without the hassle\. We handle all the bureaucracy for you\.",/g, 'card2_desc: "We use only verified and certified components from top global manufacturers for maximum lifespan.",');

// Add new cards to main.js if not exist
if (!mainJs.includes('card3_title')) {
    mainJs = mainJs.replace(/card2_desc: "Používame len overené a certifikované komponenty od špičkových svetových výrobcov pre maximálnu životnosť\.",/g, 'card2_desc: "Používame len overené a certifikované komponenty od špičkových svetových výrobcov pre maximálnu životnosť.",\n        card3_title: "Riešenia na kľúč (A po Z)",\n        card3_desc: "Od návrhu, cez byrokraciu až po inštaláciu a revíziu. Zabezpečujeme kompletný servis bez starostí.",\n        card4_title: "Vybavenie dotácií",\n        card4_desc: "Sme registrovaní zhotovitelia. Vybavíme za vás celú administratívu pre získanie dotácií Zelená domácnostiam.",');
    mainJs = mainJs.replace(/card2_desc: "We use only verified and certified components from top global manufacturers for maximum lifespan\.",/g, 'card2_desc: "We use only verified and certified components from top global manufacturers for maximum lifespan.",\n        card3_title: "Turnkey solutions (A to Z)",\n        card3_desc: "From design and bureaucracy to installation and revision. We provide a complete hassle-free service.",\n        card4_title: "Subsidy assistance",\n        card4_desc: "We handle all the paperwork to get you the state subsidies without any effort on your part.",');
}
fs.writeFileSync('main.js', mainJs, 'utf-8');
console.log('Updated main.js feature cards');

// Update index.html feature cards
let indexHtml = fs.readFileSync('index.html', 'utf-8');
let newCardsSk = `
                <div class="grid-2" style="gap: 2rem; margin-bottom: 2rem;">
                    <div class="feature-card reveal">
                        <div class="icon-box"><i class="fas fa-medal"></i></div>
                        <h3 data-i18n="card1_title">Skúsenosti a odbornosť</h3>
                        <p data-i18n="card1_desc">Viacročné skúsenosti a stovky zrealizovaných projektov po celom Slovensku zaručujú profesionálny prístup.</p>
                    </div>
                    <div class="feature-card reveal delay-1">
                        <div class="icon-box"><i class="fas fa-shield-alt"></i></div>
                        <h3 data-i18n="card2_title">Vysoké štandardy kvality</h3>
                        <p data-i18n="card2_desc">Používame len overené a certifikované komponenty od špičkových svetových výrobcov pre maximálnu životnosť.</p>
                    </div>
                </div>
                <div class="grid-2" style="gap: 2rem;">
                    <div class="feature-card reveal delay-2">
                        <div class="icon-box"><i class="fas fa-tools"></i></div>
                        <h3 data-i18n="card3_title">Riešenia na kľúč (A po Z)</h3>
                        <p data-i18n="card3_desc">Od návrhu, cez byrokraciu až po inštaláciu a revíziu. Zabezpečujeme kompletný servis bez starostí.</p>
                    </div>
                    <div class="feature-card reveal delay-3">
                        <div class="icon-box"><i class="fas fa-hand-holding-usd"></i></div>
                        <h3 data-i18n="card4_title">Vybavenie dotácií</h3>
                        <p data-i18n="card4_desc">Sme registrovaní zhotovitelia. Vybavíme za vás celú administratívu pre získanie dotácií Zelená domácnostiam.</p>
                    </div>
                </div>
`;
// Replace the old grid-2 with the new one
indexHtml = indexHtml.replace(/<div class="grid-2">[\s\S]*?(?=<\/section>)/, newCardsSk + '            </div>\n        ');
indexHtml = indexHtml.replace(/<h2 data-i18n="firmy_title">Riešenia pre firmy<\/h2>/, '<h2 data-i18n="firmy_title">Riešenia pre domácnosti a firmy</h2>');
indexHtml = indexHtml.replace(/<p data-i18n="firmy_subtitle">Znížte prevádzkové náklady vašej firmy vďaka vlastnej slnečnej elektrárni\.<\/p>/, '<p data-i18n="firmy_subtitle">Znížte svoje náklady vďaka vlastnej slnečnej elektrárni.</p>');
indexHtml = indexHtml.replace(/<h3 style="font-size: 2rem; margin-bottom: 1\.5rem;" data-i18n="firmy_h3">Energetická nezávislosť pre váš biznis<\/h3>/, '<h3 style="font-size: 2rem; margin-bottom: 1.5rem;" data-i18n="firmy_h3">Energetická nezávislosť pre váš domov aj biznis</h3>');
indexHtml = indexHtml.replace(/<p style="color: var\(--text-muted\); margin-bottom: 2rem; line-height: 1\.8;" data-i18n="firmy_p1">Priemyselné a komerčné inštalácie navrhujeme s dôrazom na rýchlu návratnosť investície a maximálny výkon\.<\/p>/, '<p style="color: var(--text-muted); margin-bottom: 2rem; line-height: 1.8;" data-i18n="firmy_p1">Inštalácie pre domácnosti aj komerčné priestory navrhujeme s dôrazom na rýchlu návratnosť investície a maximálny výkon.</p>');
fs.writeFileSync('index.html', indexHtml, 'utf-8');

// Update en/index.html feature cards
let enIndexHtml = fs.readFileSync('en/index.html', 'utf-8');
let newCardsEn = `
                <div class="grid-2" style="gap: 2rem; margin-bottom: 2rem;">
                    <div class="feature-card reveal">
                        <div class="icon-box"><i class="fas fa-medal"></i></div>
                        <h3 data-i18n="card1_title">Experience and expertise</h3>
                        <p data-i18n="card1_desc">Years of experience and hundreds of completed projects across Slovakia guarantee a professional approach.</p>
                    </div>
                    <div class="feature-card reveal delay-1">
                        <div class="icon-box"><i class="fas fa-shield-alt"></i></div>
                        <h3 data-i18n="card2_title">High quality standards</h3>
                        <p data-i18n="card2_desc">We use only verified and certified components from top global manufacturers for maximum lifespan.</p>
                    </div>
                </div>
                <div class="grid-2" style="gap: 2rem;">
                    <div class="feature-card reveal delay-2">
                        <div class="icon-box"><i class="fas fa-tools"></i></div>
                        <h3 data-i18n="card3_title">Turnkey solutions (A to Z)</h3>
                        <p data-i18n="card3_desc">From design and bureaucracy to installation and revision. We provide a complete hassle-free service.</p>
                    </div>
                    <div class="feature-card reveal delay-3">
                        <div class="icon-box"><i class="fas fa-hand-holding-usd"></i></div>
                        <h3 data-i18n="card4_title">Subsidy assistance</h3>
                        <p data-i18n="card4_desc">We handle all the paperwork to get you the state subsidies without any effort on your part.</p>
                    </div>
                </div>
`;
enIndexHtml = enIndexHtml.replace(/<div class="grid-2">[\s\S]*?(?=<\/section>)/, newCardsEn + '            </div>\n        ');
enIndexHtml = enIndexHtml.replace(/<h2 data-i18n="firmy_title">Commercial Solutions<\/h2>/, '<h2 data-i18n="firmy_title">Solutions for households and businesses</h2>');
enIndexHtml = enIndexHtml.replace(/<p data-i18n="firmy_subtitle">Reduce your company's operating costs with your own solar power plant\.<\/p>/, '<p data-i18n="firmy_subtitle">Reduce your costs with your own solar power plant.</p>');
enIndexHtml = enIndexHtml.replace(/<h3 style="font-size: 2rem; margin-bottom: 1\.5rem;" data-i18n="firmy_h3">Energy independence for your business<\/h3>/, '<h3 style="font-size: 2rem; margin-bottom: 1.5rem;" data-i18n="firmy_h3">Energy independence for your home and business</h3>');
enIndexHtml = enIndexHtml.replace(/<p style="color: var\(--text-muted\); margin-bottom: 2rem; line-height: 1\.8;" data-i18n="firmy_p1">We design industrial and commercial installations with an emphasis on rapid return on investment and maximum performance\.<\/p>/, '<p style="color: var(--text-muted); margin-bottom: 2rem; line-height: 1.8;" data-i18n="firmy_p1">We design residential and commercial installations with an emphasis on rapid return on investment and maximum performance.</p>');
fs.writeFileSync('en/index.html', enIndexHtml, 'utf-8');

console.log('Updated index.html and en/index.html successfully.');
