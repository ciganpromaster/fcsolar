const fs = require('fs');
const path = require('path');

const sectionSk = `
            <div class="business-savings reveal" style="margin-top: 2rem; background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(2, 6, 23, 0.8));">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h3 style="font-size: 2rem; margin-bottom: 1rem; color: #fff;">Dostupné dotácie a podmienky</h3>
                    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">Získajte finančnú podporu na vašu novú fotovoltaickú elektráreň. Pripravili sme pre vás prehľad aktuálnych možností.</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 20px; border: 1px solid var(--glass-border);">
                        <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 1rem;"><i class="fas fa-home"></i> Zelená domácnostiam</h4>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; color: var(--text-muted);">
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Dotácia až do výšky <strong>4 050 €</strong></li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Určené pre rodinné domy</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Nutnosť listu vlastníctva</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Zariadenie musí byť registrované v SIEA</li>
                        </ul>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 20px; border: 1px solid var(--glass-border);">
                        <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 1rem;"><i class="fas fa-building"></i> Zelená podnikom</h4>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; color: var(--text-muted);">
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Dotácia až do výšky <strong>50 000 €</strong></li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Pre malé a stredné podniky</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Preplatenie energetického auditu</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Rýchlejšia návratnosť investície</li>
                        </ul>
                    </div>
                </div>
                <div style="text-align: center;">
                    <a href="../index.html#kontakt" class="btn btn-glow">Mám záujem o dotačnú konzultáciu</a>
                </div>
            </div>`;

const sectionEn = `
            <div class="business-savings reveal" style="margin-top: 2rem; background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(2, 6, 23, 0.8));">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h3 style="font-size: 2rem; margin-bottom: 1rem; color: #fff;">Available Subsidies & Eligibility</h3>
                    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">Get financial support for your new photovoltaic power plant. We have prepared an overview of current options.</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 20px; border: 1px solid var(--glass-border);">
                        <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 1rem;"><i class="fas fa-home"></i> Green for Households</h4>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; color: var(--text-muted);">
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Subsidy up to <strong>€4,050</strong></li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Intended for family houses</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Certificate of ownership required</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Device must be registered with SIEA</li>
                        </ul>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 20px; border: 1px solid var(--glass-border);">
                        <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 1rem;"><i class="fas fa-building"></i> Green for Businesses</h4>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; color: var(--text-muted);">
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Subsidy up to <strong>€50,000</strong></li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> For small and medium enterprises</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Reimbursement of energy audit</li>
                            <li><i class="fas fa-check" style="color: var(--primary); margin-right: 0.5rem;"></i> Faster return on investment</li>
                        </ul>
                    </div>
                </div>
                <div style="text-align: center;">
                    <a href="../index.html#contact" class="btn btn-glow">Request Subsidy Consultation</a>
                </div>
            </div>`;

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.includes('fotovoltaika-') && fullPath.endsWith('index.html')) {
            let content = fs.readFileSync(fullPath, 'utf-8');
            if (content.includes('Dostupné dotácie a podmienky') || content.includes('Available Subsidies')) continue;
            
            const isEn = fullPath.includes(path.sep + 'en' + path.sep) || fullPath.startsWith('en' + path.sep);
            const section = isEn ? sectionEn : sectionSk;
            
            // Insert before the gallery section
            content = content.replace(/<div class="section-title reveal" style="margin-top: 8rem;">/, section + '\n            <div class="section-title reveal" style="margin-top: 8rem;">');
            
            fs.writeFileSync(fullPath, content, 'utf-8');
            console.log('Added subsidy section to ' + fullPath);
        }
    }
}

processDir('.');
