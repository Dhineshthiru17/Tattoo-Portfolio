function Services() {
  const styles = [
    { name: 'Fine line', desc: 'Delicate, single-needle precision work.' },
    { name: 'Black & grey', desc: 'Smooth shading and high contrast.' },
    { name: 'Lettering', desc: 'Custom scripts and typography.' },
    { name: 'Minimal', desc: 'Clean, stripped-down compositions.' },
    { name: 'Floral', desc: 'Botanical illustrations and nature motifs.' },
    { name: 'Custom flash', desc: 'Unique pre-drawn designs ready to go.' },
  ]

  return (
    <section className="section simple-section" id="styles">
      <div className="reveal-up">
        <h2>Styles</h2>
        <p className="section-description">
          We specialize in clean, modern tattooing with a focus on longevity and precise application.
        </p>
      </div>

      <div className="simple-list reveal-fade">
        {styles.map((style) => (
          <div key={style.name} className="simple-list-item">
            <h3>{style.name}</h3>
            <p>{style.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
