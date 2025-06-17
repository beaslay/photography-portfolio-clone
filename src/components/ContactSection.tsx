import React from "react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6 text-[#1f1f1f] max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Contact
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              Nom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              className="w-full border p-2"
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
            />
          </div>
          <button type="submit" className="px-6 py-2 bg-[#d4af37] text-white">
            Envoyer
          </button>
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
    </section>
  );
}
