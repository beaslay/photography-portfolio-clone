// 🔹 TYPE: React component
// 🔸 BUT : Modal d'authentification pour la galerie privée
import { useState } from 'react';

interface Props { onSuccess: () => void }

export default function PasswordModal({ onSuccess }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (password === 'julien') {
      onSuccess();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="bg-white p-6 w-80">
        <h2 className="text-lg font-bold mb-4">Galerie privée</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4"
          placeholder="Mot de passe"
        />
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <button onClick={submit} className="btn-primary w-full">Déverrouiller</button>
      </div>
    </div>
  );
}
