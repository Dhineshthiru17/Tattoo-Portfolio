import Navbar from './components/Navbar'
import modernInkHero from './assets/modern-ink-hero.svg'

const styles = ['Fine line', 'Black & grey', 'Lettering', 'Minimal', 'Floral', 'Custom flash']

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <section className="hero section" id="home">
          <img
            className="hero-backdrop"
            src={modernInkHero}
            alt="Modern abstract tattoo studio background"
          />
          <div className="hero-copy">
            <p className="eyebrow">Custom tattoos in a clean private studio</p>
            <h1>Ashok Tattoo Studio</h1>
            <p className="hero-text">
              Simple, meaningful pieces with careful linework, calm appointments,
              and designs made around your story.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Book a Session
              </a>
              <a className="button ghost" href="#styles">
                View Styles
              </a>
            </div>
            <div className="hero-meta" aria-label="Studio highlights">
              <span>Fine-line focused</span>
              <span>Private sessions</span>
              <span>Custom concepts</span>
            </div>
          </div>
        </section>

        <section className="section split-section" id="styles">
          <div>
            <p className="eyebrow">Styles</p>
            <h2>Designed with restraint, drawn with intention.</h2>
          </div>

          <div className="style-list">
            {styles.map((style) => (
              <span key={style}>{style}</span>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1646161200108-d7a841c808e0?auto=format&fit=crop&w=900&q=80"
              alt="Portrait with visible tattoos"
            />
          </div>

          <div className="about-copy">
            <p className="eyebrow">About The Studio</p>
            <h2>Calm space. Honest guidance. Strong results.</h2>
            <p>
              Bring a finished concept or a rough idea. Every booking includes a
              short consultation, placement advice, and a design prepared for your
              skin, size, and comfort.
            </p>
            <div className="stats">
              <div>
                <strong>5+</strong>
                <span>Years experience</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Sterile setup</span>
              </div>
              <div>
                <strong>1:1</strong>
                <span>Custom designs</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="eyebrow">Booking</p>
            <h2>Ready for your next tattoo?</h2>
            <p>
              Send your idea, size, placement, and reference images. You will get a
              clear quote and available appointment slots.
            </p>
          </div>

          <div className="contact-box">
            <a href="tel:+919360734516">+91 93607 34516</a>
            <a href="mailto:thirudhinesh1@gmail.com">thirudhinesh1@gmail.com</a>
            <span>Open Tue-Sun, 11:00 AM - 8:00 PM</span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
