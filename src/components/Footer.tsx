export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@proton.me"
                className="block hover:text-[#c6a570] transition-colors duration-300"
              >
                contact@proton.me
              </a>
              <a
                href="https://t.me/julienescort"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#c6a570] transition-colors duration-300"
              >
                @julienescort
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Ville</h3>
            <div className="space-y-2 text-white/80">
              <p>Paris, France</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Prestations</h3>
            <div className="space-y-2 text-white/80">
              <p>Rencontre 2&nbsp;heures — 300&nbsp;€</p>
              <p>Soirée élégante — 400&nbsp;€</p>
              <p>Nuit complète — 2&nbsp;000&nbsp;€</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              <p>© 2024 Julien Escort</p>
            </div>

            {/* Credits */}
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>Site personnel, contenu fictif.</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-xs text-white/40">
            <button className="hover:text-white transition-colors duration-300">
              Imprint
            </button>
            <button className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors duration-300">
              Terms of Service
            </button>
          </div>

          {/* Satirical Cookie Notice */}
          <div className="mt-8 p-4 bg-[#c6a570]/10 border border-[#c6a570]/20 rounded">
            <p className="text-xs text-white/60 italic">
              🍪 Ce site n'utilise que des cookies essentiels.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
