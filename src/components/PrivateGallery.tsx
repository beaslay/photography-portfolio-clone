// 🔹 TYPE: React component
// 🔸 BUT : Galerie privée protégée par mot de passe
import { useState } from 'react';
import PasswordModal from './PasswordModal';

const images = [
  'https://ext.same-assets.com/3895633390/4058066173.jpeg',
  'https://ext.same-assets.com/3895633390/1493201828.jpeg',
  'https://ext.same-assets.com/3895633390/2151845150.jpeg'
];

export default function PrivateGallery() {
  const [auth, setAuth] = useState(false);
  return auth ? (
    <div className="min-h-screen p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src) => (
        <img key={src} src={src} alt="" className="w-full object-cover" />
      ))}
    </div>
  ) : (
    <PasswordModal onSuccess={() => setAuth(true)} />
  );
}
