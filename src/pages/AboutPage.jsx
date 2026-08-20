import React from 'react';


function AboutPage() {
  return (
    <div className="about-page-container" style={{ padding: '20px 24px', height: 'calc(100vh - 204px)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-main)' }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>

        <div className="about-page-header" style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '8px' }}>About The Artist</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Meet Ashok, your dedicated and certified tattoo artist.
          </p>
        </div>


        <div className="about-content" style={{ textAlign: 'center', background: 'var(--bg-secondary)', padding: '52px', borderRadius: '26px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'var(--text-main)' }}>Crafting Stories Through Ink</h2>

          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6', fontSize: '1rem' }}>
            Hi, I'm <strong>Ashok</strong>. As a licensed tattoo artist with over 5 years of professional experience, my mission is to translate your ideas into timeless art. I specialize in fine-line and blackwork tattoos. Safety and hygiene are my top priorities; I am certified in bloodborne pathogens, ensuring a 100% sterile and welcoming environment for every client.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <strong style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>5+</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Years Experience</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <strong style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>100%</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Certified & Sterile</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <strong style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>1:1</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Custom Designs</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;
