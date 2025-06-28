import Layout from '@/components/Layout';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
    alt: 'Portrait privé 1'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face',
    alt: 'Portrait privé 2'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face',
    alt: 'Portrait privé 3'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face',
    alt: 'Portrait privé 4'
  }
];

export default function PrivateGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated (stored in sessionStorage)
    const authenticated = sessionStorage.getItem('privateGalleryAuth');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === 'eden') {
      setIsAuthenticated(true);
      sessionStorage.setItem('privateGalleryAuth', 'true');
    } else {
      setError('Mot de passe incorrect');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('privateGalleryAuth');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <Layout
        title="Galerie Privée - Julien"
        description="Accès à la galerie privée de Julien. Contenu exclusif et confidentiel."
      >
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-serif font-bold text-black mb-2">
                  Galerie Privée
                </h1>
                <p className="text-gray-600">
                  Veuillez saisir le mot de passe pour accéder au contenu exclusif.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="Entrez le mot de passe"
                    required
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-600">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Vérification...' : 'Accéder'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Contenu strictement confidentiel et privé
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title="Galerie Privée - Julien"
      description="Galerie privée exclusive de Julien. Contenu confidentiel et personnel."
    >
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                Galerie Privée
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Contenu exclusif et confidentiel.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </section>

      {/* Private Gallery Grid */}
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
                
                {/* Private indicator */}
                <div className="absolute top-4 right-4 bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                  Privé
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Confidentialité
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ce contenu est strictement confidentiel et réservé à un usage personnel. 
              Toute reproduction, distribution ou partage est formellement interdit.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}