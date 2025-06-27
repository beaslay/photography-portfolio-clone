export default function PrivateGallery() {
  const images = Array.from({ length: 6 }, (_, i) => ({
    id: `img-${i}`,
    src: `https://picsum.photos/seed/${i}/400/600`,
  }));
  return (
    <section className="py-20" id="private">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Galerie Privée
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
