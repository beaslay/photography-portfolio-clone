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
                  alt="Portrait de Julien"
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
              <h2 className="text-4xl md:text-5xl font-black tracking-wider text-[#1a1a1a] mb-8">
                Julien
                <br />
                <span className="text-[#c6a570]">Votre accompagnant</span>
              </h2>

              <div className="space-y-6 text-[#1a1a1a]/80 leading-relaxed">
                <p className="text-lg">
                  Escort masculin basé à Paris, je propose une présence élégante et discrète pour vos sorties ou moments de détente.
                </p>

                <p>
                  Mon parcours m'a mené de la littérature à l'accompagnement haut de gamme. J'aime les rencontres où l'écoute précède le geste.
                </p>

                <p>
                  Je suis là, simplement, pour souligner votre pas et cultiver une atmosphère sereine.
                </p>
              </div>

              {/* Contact Links */}
              <div className="mt-10 space-y-4">
                <p className="text-sm uppercase tracking-wider text-[#1a1a1a]/60 mb-4">
                  Pour toute demande :
                </p>

                <div className="flex flex-col space-y-3">
                  <a
                    href="https://t.me/julienescort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#1a1a1a] hover:text-[#c6a570] transition-colors duration-300"
                  >
                    <span className="text-sm uppercase tracking-wider">Telegram</span>
                    <span className="ml-3">@julienescort</span>
                  </a>

                  <a
                    href="mailto:contact@proton.me"
                    className="inline-flex items-center text-[#1a1a1a] hover:text-[#c6a570] transition-colors duration-300"
                  >
                    <span className="text-sm uppercase tracking-wider">Email sécurisé</span>
                    <span className="ml-3">contact@proton.me</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="mt-8 pt-8 border-t border-[#1a1a1a]/20">
                <p className="text-sm text-[#1a1a1a]/60">
                  <span className="uppercase tracking-wider">Basé à</span>
                  <br />
                  <span className="text-base text-[#1a1a1a] font-medium">Paris</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
