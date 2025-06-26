// 🔹 TYPE: React component
// 🔸 BUT : Hero avec effet parallax sur le texte
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const scrollY = useScrollAnimation();
  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://ext.same-assets.com/3895633390/2002050836.mp4"
            type="video/mp4"
          />
          <img
            src="https://ext.same-assets.com/3895633390/4058066173.jpeg"
            alt="Julien"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
        <div
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          className="parallax"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Julien</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Escort masculin de prestige
            <br className="hidden md:block" />
            Compagnie confidentielle
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-[#1f1f1f] transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
