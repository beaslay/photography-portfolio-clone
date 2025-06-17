export default function Contact() {
  return (
    <section className="py-20 bg-[#fdfaf6]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full border p-2"
          />
          <input
            type="email"
            placeholder="Votre e-mail"
            className="w-full border p-2"
          />
          <textarea
            placeholder="Message"
            className="w-full border p-2 h-32"
          />
          <button type="submit" className="btn-primary w-full">
            Envoyer
          </button>
        </form>
        <div className="mt-10 text-center space-y-2">
          <a
            href="https://t.me/julienescort"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Telegram
          </a>
          <p>
            <a href="mailto:contact@proton.me" className="underline">
              contact@proton.me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
