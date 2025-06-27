export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-[#1f1f1f]">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-[#1f1f1f]/10">
              <img
                src="https://ext.same-assets.com/3895633390/1493201828.jpeg"
                alt="Portrait de Julien"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-gold)] -z-10" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="max-w-lg space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Julien</h2>
            <p className="text-lg opacity-80">
              Homme de confiance au charme discret, Julien vous accompagne dans
              un art de vivre emprunt de subtilité.
            </p>
            <p>
              Entre écoute attentive et présence rassurante, il vous offre un
              moment sur mesure, où chaque détail compte.
            </p>
            <p>
              Basé à Paris, disponible en France et à l’étranger pour celles et
              ceux qui recherchent une compagnie d’exception.
            </p>
          </div>
          <div className="mt-10 space-y-2">
            <p className="text-sm uppercase tracking-wider text-[#1f1f1f]/60">
              Me contacter
            </p>
            <a
              href="mailto:julien@pm.me"
              className="text-[var(--color-gold)] hover:underline"
            >
              julien@pm.me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
