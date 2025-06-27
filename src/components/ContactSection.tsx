import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data as unknown as Record<string, unknown>,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    ).then(() => reset());
  };

  return (
    <motion.section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 space-y-4">
        <h2 className="text-3xl font-serif text-center">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("name")} placeholder="Nom" className="w-full border p-2" />
          <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2" />
          <textarea {...register("message")} placeholder="Message" className="w-full border p-2" rows={4} />
          <button type="submit" className="btn-primary w-full">Envoyer</button>
        </form>
      </div>
    </motion.section>
  );
}
