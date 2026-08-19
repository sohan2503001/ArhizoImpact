import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectorOverview from './components/SectorOverview';
import ESGIntro from './components/ESGIntro';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-beige-50 text-slate-800 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SectorOverview />
        <Services />
        <ESGIntro />
        <CaseStudies />
        <AboutMe />
        <Internship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
