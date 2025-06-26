// 🔹 TYPE: React component
// 🔸 BUT : Galerie privée protégée par mot de passe
import { useState } from 'react';
import PasswordModal from './PasswordModal';

const images = [
  'https://ext.same-assets.com/3895633390/2151845150.jpeg',
  'https://ext.same-assets.com/3895633390/4102555859.jpeg',
  'https://ext.same-assets.com/3895633390/2508054455.jpeg',
];

export default function PrivateGallery() {
  const [auth, setAuth] = useState(false);
  const password = 'escort';

  return (
    <section className="py-20 bg-white" id="private-gallery">
      {!auth && <PasswordModal onValidate={(val) => setAuth(val === password)} />}
      {auth && (
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt="Privé" className="w-full object-cover" />
          ))}
        </div>
      )}
    </section>
  );
}
