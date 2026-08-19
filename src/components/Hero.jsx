import heroModel from '../assets/tattoo-artist.jpg'

function Hero() {
  const marqueeItems = Array(20).fill("Fine-line • Blackwork • Custom Designs")

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Masterful Ink for<br/>Your Unique<br/>Story</h1>
            <p>Custom designs and careful linework in a private, sterile studio.</p>
            <a href="#contact" className="btn-primary">Book a Session</a>
          </div>
          <div className="hero-image">
            <img src={heroModel} alt="Tattoo artist at work" />
          </div>
        </div>
      </section>
      
      <div className="marquee-container">
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
          {marqueeItems.map((text, i) => (
            <span key={`dup-${i}`}>{text}</span>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero
