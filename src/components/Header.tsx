import { NavLink } from 'react-router-dom';

export default function Header() {
  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/services', label: 'Prestations' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fbfafa]/95 backdrop-blur-sm border-b border-[#2d241d]/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Contact */}
          <div className="text-[#1a1a1a] font-medium">
            <a
              href="mailto:contact@proton.me"
              className="hover:text-[#c6a570] transition-colors duration-300"
            >
              contact@proton.me
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-[#c6a570]' : 'text-[#1a1a1a] hover:text-[#c6a570]'
                  }`
                }
              >
                {item.label}
              </NavLink>
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
