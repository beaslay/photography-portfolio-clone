import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PrivateGallery from "./components/PrivateGallery";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <GallerySection />
              <ContactSection />
            </main>
          }
        />
        <Route path="/private-gallery" element={<PrivateGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
