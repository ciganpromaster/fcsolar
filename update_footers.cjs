const fs = require('fs');
const path = require('path');

// 1. Update main.js
let mainJs = fs.readFileSync('main.js', 'utf-8');
if (!mainJs.includes('contact_message:')) {
    mainJs = mainJs.replace(/contact_phone: "Telefónne číslo",/g, 'contact_phone: "Telefónne číslo",\n        contact_message: "Vaša správa alebo popis dopytu",\n        contact_gdpr: "Súhlasím so spracovaním osobných údajov za účelom vybavenia dopytu.",');
    mainJs = mainJs.replace(/contact_phone: "Phone Number",/g, 'contact_phone: "Phone Number",\n        contact_message: "Your message or inquiry description",\n        contact_gdpr: "I consent to the processing of personal data for the purpose of handling my inquiry.",');
    fs.writeFileSync('main.js', mainJs, 'utf-8');
    console.log('Updated main.js');
}

// 2. Update en/index.html contact form
let enIndex = fs.readFileSync('en/index.html', 'utf-8');
if (!enIndex.includes('contact-gdpr')) {
    enIndex = enIndex.replace(
        /<input type="text" name="name" data-i18n="contact_name" placeholder="Full Name" required>\s*<input type="email" name="email" data-i18n="contact_email" placeholder="Email Address" required>\s*<input type="tel" name="phone" data-i18n="contact_phone" placeholder="Phone Number">\s*<input type="text" name="website" style="display:none;" tabindex="-1" autocomplete="off">/g,
        `<label for="contact-name" class="visually-hidden" style="display:none;">Full Name</label>
                        <input type="text" id="contact-name" name="name" data-i18n="contact_name" placeholder="Full Name" required aria-required="true">
                        
                        <label for="contact-email" class="visually-hidden" style="display:none;">Email Address</label>
                        <input type="email" id="contact-email" name="email" data-i18n="contact_email" placeholder="Email Address" required aria-required="true">
                        
                        <label for="contact-phone" class="visually-hidden" style="display:none;">Phone Number</label>
                        <input type="tel" id="contact-phone" name="phone" data-i18n="contact_phone" placeholder="Phone Number">

                        <label for="contact-message" class="visually-hidden" style="display:none;">Message</label>
                        <textarea id="contact-message" name="message" data-i18n="contact_message" placeholder="Your message or inquiry description" rows="4" style="padding: 1.2rem 1.5rem; border-radius: 20px; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); color: #fff; font-family: inherit; outline: none; transition: border-color 0.3s, background 0.3s; font-size: 1rem; resize: vertical;" required aria-required="true"></textarea>
                        
                        <div style="display: flex; align-items: flex-start; gap: 0.8rem; text-align: left; margin-bottom: 1rem;">
                            <input type="checkbox" id="contact-gdpr" name="gdpr" required aria-required="true" style="margin-top: 0.3rem;">
                            <label for="contact-gdpr" style="color: var(--text-muted); font-size: 0.85rem;" data-i18n="contact_gdpr">I consent to the processing of personal data for the purpose of handling my inquiry.</label>
                        </div>
                        
                        <input type="text" name="website" style="display:none;" tabindex="-1" autocomplete="off" aria-hidden="true">`
    );
    fs.writeFileSync('en/index.html', enIndex, 'utf-8');
    console.log('Updated en/index.html');
}

// 3. Update all footers to add contact info if missing
function getFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
        const stat = fs.statSync(path.join(dir, file));
        if (stat.isDirectory()) {
            getFiles(path.join(dir, file), fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(path.join(dir, file));
        }
    }
    return fileList;
}

const files = getFiles('.');
for (const file of files) {
    if (file === 'index.html' || file === path.join('dist', 'index.html')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // Make sure we only match the exact target format for city pages
    if (!content.includes('footer-contact') && content.includes('<footer')) {
        let changed = false;
        
        // For en/index.html which has footer-links
        if (file === path.join('en', 'index.html') && content.includes('<div class="footer-links">')) {
            content = content.replace(
                /<div class="footer-links">/,
                `<div class="footer-contact" style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <a href="mailto:info@fotovoltikaslovensko.com" style="color: var(--text-main); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; padding: 0.5rem 0;"><i class="fas fa-envelope"></i> info@fotovoltikaslovensko.com</a>
                    <a href="tel:+421911584034" style="color: var(--text-main); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; padding: 0.5rem 0;"><i class="fas fa-phone"></i> +421 911 584 034</a>
                </div>
                <div class="footer-links">`
            );
            changed = true;
        } 
        // For city pages without footer-links
        else if (content.includes('class="logo"')) {
            content = content.replace(
                /<a href="(.*?)" class="logo"><span class="logo-fc">FC<\/span><span class="logo-brand"><span class="highlight">Solar<\/span><\/span><\/a>/,
                `<a href="$1" class="logo" style="justify-content: center; margin-bottom: 1rem;"><span class="logo-fc">FC</span><span class="logo-brand"><span class="highlight">Solar</span></span></a>
                <div class="footer-contact" style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; align-items: center;">
                    <a href="mailto:info@fotovoltikaslovensko.com" style="color: var(--text-main); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.1rem;"><i class="fas fa-envelope"></i> info@fotovoltikaslovensko.com</a>
                    <a href="tel:+421911584034" style="color: var(--text-main); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.1rem;"><i class="fas fa-phone"></i> +421 911 584 034</a>
                </div>`
            );
            changed = true;
        }
        
        if (changed) {
            fs.writeFileSync(file, content, 'utf-8');
            console.log('Updated footer for ' + file);
        }
    }
}
