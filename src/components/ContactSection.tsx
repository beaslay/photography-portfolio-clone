import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const form = useRef<HTMLFormElement | null>(null);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (!form.current) return;
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data as unknown as Record<string, unknown>,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        reset();
      });
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6 text-[#1f1f1f] max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Contact
        </h2>
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              Nom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              className="w-full border p-2"
              {...register("name", { required: true })}
            />
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
              {...register("email", { required: true })}
            />
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
              {...register("message", { required: true })}
            />
          </div>
          <button type="submit" className="btn-primary">
            Envoyer
          </button>
        </form>
        <div className="mt-8 space-y-2 text-center">
          <p>
            <a
              href="https://t.me/julien_escort"
              className="text-[var(--color-gold)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </p>
          <p>
            <a
              href="mailto:julien@pm.me"
              className="text-[var(--color-gold)] hover:underline"
            >
              julien@pm.me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
