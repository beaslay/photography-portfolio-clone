import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function PasswordModal({ isOpen, onClose, onSuccess }: Props) {
  const { register, handleSubmit } = useForm<{ password: string }>();

  const submit = ({ password }: { password: string }) => {
    if (password === import.meta.env.VITE_PRIVATE_PASSWORD) {
      onSuccess();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur"
    >
      <form onSubmit={handleSubmit(submit)} className="bg-white p-6 space-y-4">
        <input type="password" {...register("password")} className="border p-2 w-full" />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose}>Annuler</button>
          <button type="submit" className="btn-primary">Valider</button>
        </div>
      </form>
    </motion.div>
  );
}
