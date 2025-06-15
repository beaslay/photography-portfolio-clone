import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PortfolioGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
