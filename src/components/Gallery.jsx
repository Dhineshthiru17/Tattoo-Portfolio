function Gallery() {
  // Using high quality unsplash images for placeholders
  const images = [
    { src: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=600&q=80', alt: 'Fine line floral tattoo' },
    { src: 'https://images.unsplash.com/photo-1560707303-4e980c795947?auto=format&fit=crop&w=600&q=80', alt: 'Minimalist forearm tattoo' },
    { src: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=600&q=80', alt: 'Abstract back tattoo' },
    { src: 'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?auto=format&fit=crop&w=600&q=80', alt: 'Geometric arm tattoo' },
    { src: 'https://images.unsplash.com/photo-1621868516805-4f36402ea106?auto=format&fit=crop&w=600&q=80', alt: 'Small script tattoo' },
    { src: 'https://images.unsplash.com/photo-1572097662589-32ee7f88410f?auto=format&fit=crop&w=600&q=80', alt: 'Large back piece tattoo' },
  ]

  return (
    <section className="section gallery-section" id="gallery">
      <div className="gallery-header reveal-up">
        <p className="eyebrow">Portfolio</p>
        <h2>Recent Work</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item reveal-scale"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <span>View details</span>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-footer reveal-up">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="button ghost">
          View more on Instagram
        </a>
      </div>
    </section>
  )
}

export default Gallery







