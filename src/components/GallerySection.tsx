import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "https://source.unsplash.com/800x600?paris",
  "https://source.unsplash.com/800x600?city",
  "https://source.unsplash.com/800x600?night",
];

export default function GallerySection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <motion.section id="gallery" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">Galerie</h2>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((src) => (
              <img key={src} src={src} className="min-w-full object-cover" />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
