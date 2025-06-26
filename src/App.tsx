import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import PrivateGallery from "./components/PrivateGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <GallerySection />
                <ContactSection />
              </>
            }
          />
          <Route path="/private-gallery" element={<PrivateGallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
