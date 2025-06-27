import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section id="hero" className="h-screen flex items-center justify-center text-center bg-black text-white">
      <div>
        <h1 className="text-5xl font-serif mb-4">Julien</h1>
        <p className="mb-6">Compagnon discret et élégant</p>
        <a href="#contact" className="btn-primary">Me contacter</a>
      </div>
    </motion.section>
  );
}
