import React from "react";

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
    <section className="py-20 bg-[#f7f5ee]" id="services">
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
              className="p-6 border border-[var(--color-gold)]/30 rounded"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-4 opacity-80">{service.description}</p>
              <p className="text-[var(--color-gold)] font-bold text-lg">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
