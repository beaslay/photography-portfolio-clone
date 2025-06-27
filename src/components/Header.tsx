import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { id: "hero", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "services", label: "Prestations" },
  { id: "gallery", label: "Galerie" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-serif">Julien</span>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="hover:text-[var(--color-gold)]"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
      {open && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white"
        >
          <ul className="flex flex-col px-4 pb-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="block w-full py-2 text-left hover:text-[var(--color-gold)]"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
