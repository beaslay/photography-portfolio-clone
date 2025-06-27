import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-serif">À propos</h2>
        <p>
          Homme de confiance basé à Paris, Julien vous accompagne lors de vos moments
          d'exception.
        </p>
      </div>
    </motion.section>
  );
}
