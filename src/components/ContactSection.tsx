// 🔹 TYPE: React component
// 🔸 BUT : Formulaire avec React Hook Form et EmailJS
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAssistant } from "@/hooks/useAssistant";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const { generateReply } = useAssistant();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data as unknown as Record<string, unknown>,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      generateReply(data.message);
      setOpen(true);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.section
      className="py-20 bg-white"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 text-[#1f1f1f] max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Contact
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block mb-1" htmlFor="name">
              Nom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              className="w-full border p-2"
              {...register("name", { required: "Champ requis" })}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Votre email"
              className="w-full border p-2"
              {...register("email", { required: "Champ requis" })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Votre message"
              className="w-full border p-2"
              {...register("message", { required: "Champ requis" })}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button type="submit" className="px-6 py-2 bg-[#d4af37] text-white">
            Envoyer
          </button>
        </form>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Merci, votre message a bien été envoyé</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogAction
              className="mt-4 px-4 py-2 bg-[#d4af37] text-white mx-auto"
              onClick={() => setOpen(false)}
            >
              Fermer
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
        <div className="mt-8 space-y-2 text-center">
          <p>
            <a
              href="https://t.me/julien_escort"
              className="text-[#d4af37] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </p>
          <p>
            <a
              href="mailto:julien@pm.me"
              className="text-[#d4af37] hover:underline"
            >
              julien@pm.me
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
