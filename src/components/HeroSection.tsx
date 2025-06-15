export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ext.same-assets.com/3895633390/2002050836.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://ext.same-assets.com/3895633390/4058066173.jpeg"
            alt="Photographer hero"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4 text-shadow">
            Lorem Ipsum
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light">
              Photographer
            </span>
          </h1>

          <div className="mt-8">
            <p className="text-lg md:text-xl font-light tracking-wide mb-6">
              Creative Visual Artist & Photography
            </p>

            <a
              href="mailto:hello@photographer.com"
              className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-[#2d241d] transition-all duration-300 uppercase tracking-wider text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
