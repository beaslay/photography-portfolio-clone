import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import PasswordModal from "./PasswordModal";

const images = [
  "https://source.unsplash.com/800x600?luxury",
  "https://source.unsplash.com/800x600?hotel",
  "https://source.unsplash.com/800x600?journey",
];

export default function PrivateGallery() {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const [emblaRef] = useEmblaCarousel();

  return (
    <motion.section id="private" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">Galerie privée</h2>
        {!auth ? (
          <button onClick={() => setOpen(true)} className="btn-primary">Accéder</button>
        ) : (
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {images.map((src) => (
                <img key={src} src={src} className="min-w-full object-cover" />
              ))}
            </div>
          </div>
        )}
      </div>
      <PasswordModal isOpen={open} onClose={() => setOpen(false)} onSuccess={() => setAuth(true)} />
    </motion.section>
  );
}
