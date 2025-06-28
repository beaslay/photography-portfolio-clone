import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
    alt: 'Portrait élégant'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face',
    alt: 'Style décontracté'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face',
    alt: 'Tenue formelle'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face',
    alt: 'Portrait professionnel'
  }
];

export default function PublicGallery() {
  return (
    <Layout
      title="Galerie - Julien"
      description="Découvrez la galerie photo de Julien, escort masculin de prestige. Photos professionnelles et élégantes."
    >
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
            Galerie
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Une sélection de photos professionnelles illustrant mon style et ma présentation.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100">
            <span className="text-gray-600">Galerie privée disponible</span>
            <Link 
              href="/private-gallery" 
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Accéder →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-black mb-4">
              Intéressé par mes services ?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              N'hésitez pas à me contacter pour discuter de vos besoins et organiser 
              une rencontre dans la plus stricte confidentialité.
            </p>
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}