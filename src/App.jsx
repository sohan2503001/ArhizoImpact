import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectorOverview from './components/SectorOverview';
import WhatIDo from './components/WhatIDo';
import ImpactSnapshot from './components/ImpactSnapshot';
import AboutMe from './components/AboutMe';
import HowWeWork from './components/HowWeWork';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-beige-50 text-slate-800 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SectorOverview />
        <WhatIDo />
        <ImpactSnapshot />
        <AboutMe />
        <HowWeWork />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
