const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Change theme to white / colorful
css = css.replace(
  /:root \{[\s\S]*?\}/,
  `:root {
  --ink: #ffffff;
  --charcoal: #f3f4f6;
  --panel: #ffffff;
  --paper: #0f172a;
  --muted: #475569;
  --line: rgba(0, 0, 0, 0.1);
  --accent: #ec4899;
  --accent-dark: #be185d;
  --deep: #f8fafc;
  --shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
  --font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --display-font: Selima, "Brush Script MT", "Segoe Script", cursive;

  font-family: var(--font);
  font-size: 16px;
  line-height: 1.5;
  color: var(--paper);
  background: var(--ink);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`
);

// Body background
css = css.replace(
  /body \{[\s\S]*?background:[\s\S]*?background-size:[\s\S]*?\}/,
  `body {
  margin: 0;
  min-width: 320px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%), var(--ink);
}`
);

// App shell
css = css.replace(
  /\.app-shell \{[\s\S]*?background:[\s\S]*?\}/,
  `.app-shell {
  min-height: 100svh;
  overflow-x: hidden;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%);
}`
);

// Site header
css = css.replace(
  /\.site-header \{[\s\S]*?\}/,
  `.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
}`
);

// Navbar links
css = css.replace(
  /\.nav-links a:hover,\n\.nav-links a:focus-visible \{[\s\S]*?\}/,
  `.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--paper);
  background: rgba(0, 0, 0, 0.05);
}`
);

// Menu button
css = css.replace(
  /\.menu-button \{[\s\S]*?\}/,
  `.menu-button {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.03);
  color: var(--paper);
  cursor: pointer;
}`
);

// Hero min-height and border
// ALSO: make sure width is 100vw and left is calc(-50vw + 50%) to break out of .section container if needed!
// Wait, an easier way is to just remove .section class from hero in App.jsx, but let's do it via CSS first, OR just modify App.jsx later.
css = css.replace(
  /\.hero \{[\s\S]*?\}/,
  `.hero {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100svh;
  padding: 150px max(16px, calc((100vw - 1180px) / 2)) 78px;
  display: flex;
  align-items: center;
  isolation: isolate;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
}`
);

// Hero before
css = css.replace(
  /\.hero::before \{[\s\S]*?\}/,
  `.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 88px 88px;
  opacity: 1;
}`
);

// Hero after
css = css.replace(
  /\.hero::after \{[\s\S]*?\}/,
  `.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.15), transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.15), transparent 50%);
}`
);

// Eyebrow
css = css.replace(
  /\.eyebrow \{[\s\S]*?\}/,
  `.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}`
);

// Hero text
css = css.replace(
  /\.hero-text \{[\s\S]*?\}/,
  `.hero-text {
  max-width: 590px;
  margin-bottom: 30px;
  color: var(--muted);
  font-size: 1.1rem;
}`
);

// Hero meta
css = css.replace(
  /\.hero-meta span \{[\s\S]*?\}/,
  `.hero-meta span {
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 8px 12px;
  color: var(--paper);
  background: rgba(0, 0, 0, 0.03);
  font-size: 0.88rem;
  font-weight: 700;
}`
);

// Button ghost
css = css.replace(
  /\.button\.ghost \{[\s\S]*?\}/,
  `.button.ghost {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: var(--paper);
}`
);
css = css.replace(
  /\.button\.ghost:hover,\n\.button\.ghost:focus-visible \{[\s\S]*?\}/,
  `.button.ghost:hover,
.button.ghost:focus-visible {
  border-color: rgba(0, 0, 0, 0.2);
}`
);

// Style list
css = css.replace(
  /\.style-list span \{[\s\S]*?\}/,
  `.style-list span {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 9px 14px;
  color: var(--paper);
  background: rgba(0, 0, 0, 0.03);
  font-weight: 700;
}`
);

// Stats
css = css.replace(
  /\.stats div \{[\s\S]*?\}/,
  `.stats div {
  min-height: 108px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.03);
}`
);

// Contact box
css = css.replace(
  /\.contact-box \{[\s\S]*?\}/,
  `.contact-box {
  display: grid;
  gap: 12px;
  padding: 22px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(139, 92, 246, 0.05)),
    #ffffff;
}`
);

css = css.replace(
  /\.contact-box a,\n\.contact-box span \{[\s\S]*?\}/,
  `.contact-box a,
.contact-box span {
  min-height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: var(--paper);
}`
);

css = css.replace(
  /\.contact-box a:hover,\n\.contact-box a:focus-visible \{[\s\S]*?\}/,
  `.contact-box a:hover,
.contact-box a:focus-visible {
  color: var(--accent);
}`
);

// Media queries
css = css.replace(
  /\.nav-links \{\n    position: absolute;[\s\S]*?background: rgba\(21, 17, 22, 0\.98\);[\s\S]*?\}/,
  `.nav-links {
    position: absolute;
    top: 72px;
    left: 16px;
    right: 16px;
    display: none;
    padding: 10px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: var(--shadow);
  }`
);

css = css.replace(
  /\.hero \{\n    min-height: 78svh;[\s\S]*?\}/,
  `.hero {
    min-height: 100svh;
    padding-top: 128px;
  }`
);

css = css.replace(
  /\.hero::after \{\n    background:[\s\S]*?rgba\(8, 8, 10, 0\.16\) 52\%\);\n  \}/,
  `.hero::after {
    background: radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.15), transparent 50%),
                radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.15), transparent 50%);
  }`
);

css = css.replace(
  /\.hero \{\n    min-height: 74svh;[\s\S]*?\}/,
  `.hero {
    min-height: 100svh;
    padding-inline: 12px;
    padding-bottom: 54px;
  }`
);

fs.writeFileSync('src/index.css', css);
