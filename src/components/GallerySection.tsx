import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";

export default function GallerySection() {
  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <PortfolioGrid />
    </motion.section>
  );
}
