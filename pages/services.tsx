import Layout from '@/components/Layout';
import Link from 'next/link';

interface ServiceTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const services: ServiceTier[] = [
  {
    name: 'Dinner Date',
    price: '400€',
    duration: '3 heures',
    description: 'Une soirée élégante pour vos dîners d\'affaires ou sorties culturelles.',
    features: [
      'Accompagnement pour dîner',
      'Conversation raffinée',
      'Présentation impeccable',
      'Discrétion absolue'
    ]
  },
  {
    name: 'Weekend Package',
    price: '1,200€',
    duration: 'Week-end',
    description: 'Un week-end complet pour vos escapades ou événements spéciaux.',
    features: [
      'Accompagnement 48h',
      'Voyage inclus (France)',
      'Activités culturelles',
      'Hébergement séparé',
      'Flexibilité horaire'
    ],
    popular: true
  },
  {
    name: 'Travel Companion',
    price: 'Sur devis',
    duration: 'Personnalisé',
    description: 'Accompagnement pour vos voyages d\'affaires ou de loisir à l\'étranger.',
    features: [
      'Voyage international',
      'Accompagnement sur mesure',
      'Gestion des formalités',
      'Adaptation culturelle',
      'Service premium'
    ]
  }
];

export default function Services() {
  return (
    <Layout
      title="Services & Tarifs - Julien"
      description="Découvrez les services d'accompagnement haut de gamme proposés par Julien. Tarifs transparents et prestations sur mesure."
    >
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
            Services & Tarifs
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Chaque rencontre est unique et personnalisée selon vos besoins. 
            Voici mes principales prestations d'accompagnement.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg border-2 p-8 transition-transform hover:scale-105 ${
                  service.popular 
                    ? 'border-accent shadow-accent/20' 
                    : 'border-gray-100 hover:border-accent/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-black mb-2">
                    {service.name}
                  </h3>
                  <div className="text-3xl font-bold text-accent mb-1">
                    {service.price}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {service.duration}
                  </div>
                </div>

                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    service.popular
                      ? 'bg-accent text-white hover:bg-accent/90'
                      : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  Réserver
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-black mb-8">
              Informations importantes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-4">Réservation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Réservation minimum 24h à l'avance</li>
                  <li>• Acompte de 30% requis</li>
                  <li>• Confirmation par email</li>
                  <li>• Annulation possible 48h avant</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-4">Conditions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Services d'accompagnement uniquement</li>
                  <li>• Respect mutuel exigé</li>
                  <li>• Confidentialité garantie</li>
                  <li>• Frais de déplacement en sus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}