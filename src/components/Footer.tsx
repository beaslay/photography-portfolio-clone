export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-16">
      <div className="container mx-auto px-6 space-y-8 text-center">
        <div className="space-y-2">
          <p>Contact direct :</p>
          <a
            href="mailto:julien@pm.me"
            className="text-[var(--color-gold)] hover:underline"
          >
            julien@pm.me
          </a>
          <br />
          <a
            href="https://t.me/julien_escort"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gold)] hover:underline"
          >
            Telegram
          </a>
        </div>
        <p className="text-white/60 text-sm">© 2025 Julien Escort</p>
      </div>
    </footer>
  );
}
