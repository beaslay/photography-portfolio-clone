// 🔹 TYPE: React component
// 🔸 BUT : Formulaire fonctionnel avec React Hook Form et EmailJS
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useAutoReply } from "../hooks/useAutoReply";

const schema = z.object({
  name: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Votre message est trop court"),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const autoReply = useAutoReply();
  const [open, setOpen] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_xxx",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      autoReply(data.message);
      reset();
      setOpen(true);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <motion.section
      className="py-20 bg-white"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-[#1f1f1f] max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">Nom</label>
            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              className="w-full border p-2"
              {...register("name")}
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Votre email"
              className="w-full border p-2"
              {...register("email")}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Votre message"
              className="w-full border p-2"
              {...register("message")}
            />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
          </div>
          <button type="submit" className="btn-primary">Envoyer</button>
        </form>
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
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 bg-black/60" />
            <AlertDialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg">
              <AlertDialog.Title className="mb-4 font-bold">Merci</AlertDialog.Title>
              <AlertDialog.Description>
                Votre message a bien été envoyé.
              </AlertDialog.Description>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 btn-primary"
              >
                Fermer
              </button>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </motion.section>
  );
}
