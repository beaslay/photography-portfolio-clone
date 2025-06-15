export default function Footer() {
  return (
    <footer className="bg-[#2d241d] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@photographer.com"
                className="block hover:text-[#dd1e17] transition-colors duration-300"
              >
                hello@photographer.com
              </a>
              <a
                href="https://instagram.com/photographer"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#dd1e17] transition-colors duration-300"
              >
                @photographer
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Location</h3>
            <div className="space-y-2 text-white/80">
              <p>Berlin, Germany</p>
              <p>Vienna, Austria</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Services</h3>
            <div className="space-y-2 text-white/80">
              <p>Editorial Photography</p>
              <p>Fashion Photography</p>
              <p>Portrait Photography</p>
              <p>Commercial Work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              <p>© 2024 Lorem Ipsum Photographer</p>
            </div>

            {/* Credits */}
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>
                Concept, Design & Development by{' '}
                <span className="text-white">
                  Creative Studio
                </span>
              </p>
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
          <div className="mt-8 p-4 bg-[#dd1e17]/10 border border-[#dd1e17]/20 rounded">
            <p className="text-xs text-white/60 italic">
              🍪 This website uses cookies to enhance your browsing experience and definitely not to sell your data to interdimensional entities. By continuing to use this site, you agree to our totally normal and not at all suspicious data practices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
