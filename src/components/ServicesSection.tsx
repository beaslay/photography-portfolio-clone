// 🔹 TYPE: React component
// 🔸 BUT : Section prestations animée
import { motion } from "framer-motion";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Rencontre 2 heures",
    description: "Une parenthèse douce pour faire connaissance.",
    price: "300 €",
  },
  {
    id: 2,
    title: "Soirée 2 heures",
    description: "Présence élégante pour vos sorties ou événements.",
    price: "400 €",
  },
  {
    id: 3,
    title: "Soirée complète",
    description: "Complicité jusqu’au petit matin (21h à 8h).",
    price: "2 000 €",
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      className="py-20 bg-[#f7f5ee]"
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 text-[#1f1f1f]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prestations & Tarifs
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Chaque rencontre est unique. Voici quelques suggestions de moments à
            partager.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border border-[#d4af37]/30 rounded"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-4 opacity-80">{service.description}</p>
              <p className="text-[#d4af37] font-bold text-lg">
                {service.price}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Demander une réservation
          </button>
        </div>
      </div>
    </motion.section>
  );
}
