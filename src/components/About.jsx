import heroModel from '../assets/tattoo-artist.jpg'

function About({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div className="modal-content about-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src={heroModel} alt="Artist at work" className="about-image" />
          </div>
          <div className="about-content">
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>About The Artist</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
              Hi, I'm Ashok. I specialize in fine-line and blackwork tattoos, creating pieces that flow naturally with the body's contours.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
              With over 5 years of experience in the industry, my goal is to provide a safe, welcoming, and sterile environment where your ideas can come to life.
            </p>

            <div style={{ display: 'flex', gap: '24px', marginTop: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1.2 }}>5+</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Years exp</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1.2 }}>100%</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sterile</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1.2 }}>1:1</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Custom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
