// 🔹 TYPE: React component
// 🔸 BUT : Menu mobile hamburger avec overlay animé
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "services", label: "Prestations" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f7f5ee]/90 backdrop-blur-sm border-b border-[#1f1f1f]/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("home")} className="text-2xl font-serif">
          J
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                activeSection === item.id
                  ? "text-[#d4af37]"
                  : "text-[#1f1f1f] hover:text-[#d4af37]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block btn-outline"
        >
          Contactez-moi
        </button>
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu />
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex flex-col items-center justify-center space-y-8 text-white md:hidden">
          <button
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMenuOpen(false);
              }}
              className="text-2xl font-serif"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
