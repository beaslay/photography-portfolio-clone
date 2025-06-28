import Layout from '@/components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout
      title="À propos - Julien"
      description="Découvrez le profil de Julien, escort masculin de prestige offrant une compagnie raffinée et discrète."
    >
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Portrait de Julien"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-lg -z-10"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                  À propos de Julien
                </h1>
                <div className="w-20 h-1 bg-accent mb-6"></div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Homme de confiance au charme discret, je vous accompagne dans un art de vivre 
                  empreint de subtilité et d'élégance.
                </p>
                
                <p>
                  Entre écoute attentive et présence rassurante, je vous offre un moment sur mesure, 
                  où chaque détail compte. Ma philosophie repose sur l'authenticité des échanges et 
                  le respect mutuel.
                </p>
                
                <p>
                  Diplômé en littérature et passionné d'art, je saurai m'adapter à tous vos événements, 
                  qu'ils soient professionnels ou personnels. Ma présentation soignée et mon savoir-vivre 
                  vous garantissent une compagnie à la hauteur de vos attentes.
                </p>
                
                <p>
                  Basé à Paris, je suis disponible en France et à l'étranger pour celles et ceux 
                  qui recherchent une compagnie d'exception, dans la plus stricte confidentialité.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h3 className="font-semibold text-black mb-2">Langues</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Français (natif)</li>
                    <li>Anglais (courant)</li>
                    <li>Italien (conversationnel)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-black mb-2">Centres d'intérêt</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Art contemporain</li>
                    <li>Gastronomie</li>
                    <li>Voyages culturels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}