import { useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

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
        <a
          href="mailto:julien@pm.me"
          className="text-[#1f1f1f] hover:text-[#d4af37] transition-colors"
        >
          julien@pm.me
        </a>
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
      </div>
    </header>
  );
}
