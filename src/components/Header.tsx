import { useState } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work', count: 9 },
    { id: 'about', label: 'About' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fbfafa]/95 backdrop-blur-sm border-b border-[#2d241d]/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Contact */}
          <div className="text-[#2d241d] font-medium">
            <a
              href="mailto:hello@photographer.com"
              className="hover:text-[#dd1e17] transition-colors duration-300"
            >
              hello@photographer.com
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-[#dd1e17]'
                    : 'text-[#2d241d] hover:text-[#dd1e17]'
                }`}
              >
                {item.label}
                {item.count && <span className="ml-1">({item.count})</span>}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#2d241d] hover:text-[#dd1e17] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
