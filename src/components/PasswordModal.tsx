// 🔹 TYPE: React component
// 🔸 BUT : Modal de saisie du mot de passe pour la galerie privée
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface Props {
  onValidate: (value: string) => void;
}

export default function PasswordModal({ onValidate }: Props) {
  const [password, setPassword] = useState('');

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Entrer le mot de passe</AlertDialogTitle>
        </AlertDialogHeader>
        <input
          type="password"
          className="w-full border p-2 mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AlertDialogAction
          className="mt-4 px-4 py-2 bg-[#d4af37] text-white"
          onClick={() => onValidate(password)}
        >
          Valider
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
