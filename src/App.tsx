import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import PasswordModal from "./components/PasswordModal";
import PrivateGallery from "./components/PrivateGallery";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        {unlocked ? <PrivateGallery /> : <PasswordModal onSuccess={() => setUnlocked(true)} />}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
