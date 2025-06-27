import { useState } from "react";

export default function PasswordModal({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_PRIVATE_PASSWORD) {
      onSuccess();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <form onSubmit={submit} className="bg-white p-4 space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2"
        />
        <button type="submit" className="btn-primary w-full">
          Entrer
        </button>
      </form>
    </div>
  );
}
