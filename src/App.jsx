import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactSnapshot from './components/ImpactSnapshot';
import SectorOverview from './components/SectorOverview';
import ESGIntro from './components/ESGIntro';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans bg-beige-50 text-slate-800 min-h-screen selection:bg-accent-400 selection:text-primary-950">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ImpactSnapshot />
        <SectorOverview />
        <Services />
        <ESGIntro />
        <CaseStudies />
        <AboutMe />
        <Internship />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
