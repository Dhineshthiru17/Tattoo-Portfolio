const fs = require('fs');

const premiumCSS = `:root {
  --ink: #ffffff;
  --charcoal: #f8fafc;
  --panel: #ffffff;
  --paper: #0f172a;
  --muted: #475569;
  --line: rgba(15, 23, 42, 0.08);
  --accent: #ec4899;
  --accent-dark: #be185d;
  --deep: #f1f5f9;
  --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 24px 60px rgba(0, 0, 0, 0.12);
  --font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --display-font: Selima, "Brush Script MT", "Segoe Script", cursive;

  font-family: var(--font);
  font-size: 16px;
  line-height: 1.6;
  color: var(--paper);
  background: var(--ink);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-width: 320px;
  background: var(--charcoal);
}

body, button, input, textarea { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; height: auto; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }

/* REVEAL ANIMATIONS */
.reveal-up { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal-up.revealed { opacity: 1; transform: translateY(0); }

.reveal-fade { opacity: 0; transition: opacity 1s ease; }
.reveal-fade.revealed { opacity: 1; }

.reveal-scale { opacity: 0; transform: scale(0.95); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-scale.revealed { opacity: 1; transform: scale(1); }

/* APP SHELL */
#root { min-height: 100svh; }
.app-shell {
  min-height: 100svh;
  overflow-x: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

/* NAVBAR */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.3s ease;
}

.navbar {
  width: min(1200px, calc(100% - 48px));
  min-height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: var(--display-font);
  font-size: 1.8rem;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-links a {
  padding: 8px 16px;
  border-radius: 99px;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-links a:hover, .nav-links a:focus-visible {
  color: var(--paper);
  background: rgba(15, 23, 42, 0.05);
}

.menu-button { display: none; } /* Mobile toggle handled below */

/* SECTION SHARED */
.section {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  padding: 120px 0;
  scroll-margin-top: 80px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

h1, h2, h3, p { margin-top: 0; }
h1, h2, h3 { color: var(--paper); line-height: 1.1; }
h1 { font-family: var(--display-font); font-size: clamp(4rem, 10vw, 6.5rem); margin-bottom: 24px; color: var(--paper); font-weight: normal; }
h2 { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 24px; letter-spacing: -1px; }
h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; }
p { color: var(--muted); }

/* BUTTONS */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 99px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: none;
}

.button.primary {
  background: var(--paper);
  color: #fff;
  box-shadow: var(--shadow);
}
.button.primary:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.button.ghost {
  background: transparent;
  color: var(--paper);
  border: 1px solid var(--line);
}
.button.ghost:hover {
  background: rgba(15, 23, 42, 0.03);
  border-color: rgba(15, 23, 42, 0.2);
}

/* HERO */
.hero {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100svh;
  padding: 120px max(24px, calc((100vw - 1200px) / 2)) 80px;
  display: flex;
  align-items: center;
  isolation: isolate;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.8;
  animation: inkDrift 40s linear infinite alternate;
}

@keyframes inkDrift {
  0% { transform: scale(1.02); }
  100% { transform: scale(1.1); }
}

.hero-copy { max-width: 650px; }
.hero-text { font-size: 1.15rem; margin-bottom: 40px; line-height: 1.7; color: var(--muted); max-width: 540px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 48px; }

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.hero-meta span {
  padding: 8px 16px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid var(--line);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--paper);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.mouse {
  width: 24px;
  height: 36px;
  border: 2px solid var(--muted);
  border-radius: 12px;
  position: relative;
}
.mouse::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: var(--accent);
  border-radius: 50%;
  animation: mouseScroll 2s infinite;
}

@keyframes mouseScroll {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 12px); opacity: 0; }
}

/* SERVICES */
.split-section {
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.section-description { max-width: 600px; font-size: 1.1rem; }

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.service-card {
  padding: 32px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid var(--line);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
  background: #ffffff;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 24px;
}

/* GALLERY */
.gallery-section { padding: 120px 0; }
.gallery-header { margin-bottom: 48px; text-align: center; }
.gallery-header h2 { margin-bottom: 16px; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  gap: 24px;
}

.gallery-item {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: var(--line);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease;
}

/* Make some items taller for a masonry feel without JS */
.gallery-item:nth-child(3n+1) { grid-row: span 2; }
.gallery-item:nth-child(4n) { grid-column: span 2; }

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-item:hover { box-shadow: var(--shadow-lg); z-index: 2; }
.gallery-item:hover img { transform: scale(1.08); }

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-overlay span {
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border: 2px solid #fff;
  border-radius: 99px;
  transform: translateY(20px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.gallery-item:hover .gallery-overlay span { transform: translateY(0); }

.gallery-footer {
  margin-top: 64px;
  text-align: center;
}

/* ABOUT */
.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-image {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
}
.about-image img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
}
.image-decorator {
  position: absolute;
  inset: 0;
  border-radius: 32px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
  pointer-events: none;
}

.about-copy p { font-size: 1.1rem; line-height: 1.8; margin-bottom: 32px; }

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  border-top: 1px solid var(--line);
  padding-top: 32px;
}
.stats div strong { display: block; font-size: 2.5rem; font-weight: 800; color: var(--paper); line-height: 1; margin-bottom: 8px; }
.stats div span { font-size: 0.9rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }

/* CONTACT */
.contact-section {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 64px;
  align-items: center;
  padding-bottom: 160px;
}

.contact-text p { font-size: 1.15rem; line-height: 1.7; max-width: 500px; }

.contact-box {
  background: #ffffff;
  padding: 40px;
  border-radius: 32px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid var(--line);
}

.contact-link, .hours {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: var(--deep);
  transition: all 0.2s ease;
}

.contact-link:hover {
  background: var(--accent);
  color: #fff;
  transform: translateX(8px);
}
.contact-link:hover .text { color: #fff; }

.icon { font-size: 1.5rem; }
.text { font-weight: 600; color: var(--paper); }

/* FOOTER */
.site-footer {
  background: var(--paper);
  color: #fff;
  padding: 80px 24px 32px;
}

.footer-content {
  width: min(1200px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 64px;
  margin-bottom: 64px;
}

.footer-brand .brand-name {
  font-family: var(--display-font);
  font-size: 2rem;
  color: var(--accent);
  display: block;
  margin-bottom: 16px;
}
.footer-brand p { color: #94a3b8; max-width: 300px; }

.footer-links h4, .footer-social h4 {
  color: #fff;
  margin-bottom: 24px;
  font-size: 1.1rem;
}

.footer-links a, .footer-social a {
  display: block;
  color: #94a3b8;
  margin-bottom: 12px;
  transition: color 0.2s ease;
}
.footer-links a:hover, .footer-social a:hover { color: #fff; }

.footer-bottom {
  width: min(1200px, 100%);
  margin: 0 auto;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .about-section { grid-template-columns: 1fr; gap: 48px; }
  .about-image { max-width: 600px; margin: 0 auto; }
  .contact-section { grid-template-columns: 1fr; }
  .contact-box { max-width: 500px; }
}

@media (max-width: 768px) {
  .menu-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .menu-button span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--paper);
    margin: 0 auto;
    transition: 0.3s;
  }
  
  .nav-links {
    position: absolute;
    top: 72px;
    left: 24px;
    right: 24px;
    background: #ffffff;
    flex-direction: column;
    padding: 24px;
    border-radius: 24px;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--line);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
  
  .nav-links.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  
  .nav-links a { text-align: center; padding: 12px; }

  .gallery-item:nth-child(3n+1) { grid-row: auto; }
  .gallery-item:nth-child(4n) { grid-column: auto; }
  
  .footer-content { grid-template-columns: 1fr; gap: 40px; }
}

@media (max-width: 560px) {
  .section { padding: 80px 0; }
  .hero { padding-top: 120px; }
  .stats { grid-template-columns: 1fr; text-align: center; }
  .hero-actions { flex-direction: column; }
  .button { width: 100%; }
}
\`;

fs.writeFileSync('src/index.css', premiumCSS);
