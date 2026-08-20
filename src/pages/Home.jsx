import Hero from '../components/Hero';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Hero />
      <FloatingWhatsApp />
    </main>
  );
}

export default Home;
