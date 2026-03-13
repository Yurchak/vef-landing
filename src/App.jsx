import React from 'react';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import VenuesSection from './sections/VenuesSection';
import EcosystemSection from './sections/EcosystemSection';
import BentoGridSection from './sections/BentoGridSection';
import ContactFormSection from './sections/ContactFormSection';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <VenuesSection />
        <EcosystemSection />
        <BentoGridSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
