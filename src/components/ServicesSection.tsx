import { motion } from "framer-motion";

const services = [
  { title: "Rencontre", desc: "Deux heures pour faire connaissance." },
  { title: "Soirée", desc: "Présence élégante pour vos sorties." },
  { title: "Nuit complète", desc: "Complicité jusqu'au matin." },
];

export default function ServicesSection() {
  return (
    <motion.section id="services" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">Prestations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-4 border">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
