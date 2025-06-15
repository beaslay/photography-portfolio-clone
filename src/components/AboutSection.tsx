export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-[#2d241d]/5">
                <img
                  src="https://ext.same-assets.com/3895633390/1493201828.jpeg"
                  alt="Photographer portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#dd1e17] -z-10" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-[#2d241d] mb-8">
                Lorem Ipsum
                <br />
                <span className="text-[#dd1e17]">Photographer</span>
              </h2>

              <div className="space-y-6 text-[#2d241d]/80 leading-relaxed">
                <p className="text-lg">
                  Lorem Ipsum is a photographer and creative visual artist based in Berlin and Vienna (Austria).
                </p>

                <p>
                  Starting 2014, after a career as interior designer, they conquered Europe with their unique style as photographer. Their work spans editorial, fashion, portrait, and commercial photography with a focus on bold, contemporary aesthetics.
                </p>

                <p>
                  With a distinctive eye for composition and lighting, Lorem creates striking visual narratives that capture the essence of modern culture and style.
                </p>
              </div>

              {/* Contact Links */}
              <div className="mt-10 space-y-4">
                <p className="text-sm uppercase tracking-wider text-[#2d241d]/60 mb-4">
                  Work inquiries are welcome:
                </p>

                <div className="flex flex-col space-y-3">
                  <a
                    href="mailto:hello@photographer.com"
                    className="inline-flex items-center text-[#2d241d] hover:text-[#dd1e17] transition-colors duration-300"
                  >
                    <span className="text-sm uppercase tracking-wider">Email</span>
                    <span className="ml-3">hello@photographer.com</span>
                  </a>

                  <a
                    href="https://instagram.com/photographer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#2d241d] hover:text-[#dd1e17] transition-colors duration-300"
                  >
                    <span className="text-sm uppercase tracking-wider">Instagram</span>
                    <span className="ml-3">@photographer</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="mt-8 pt-8 border-t border-[#2d241d]/20">
                <p className="text-sm text-[#2d241d]/60">
                  <span className="uppercase tracking-wider">Based in</span>
                  <br />
                  <span className="text-base text-[#2d241d] font-medium">Berlin & Vienna</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
