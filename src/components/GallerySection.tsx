// 🔹 TYPE: React component
// 🔸 BUT : Galerie publique avec Embla Carousel
import useEmblaCarousel from 'embla-carousel-react';

const images = [
  'https://ext.same-assets.com/3895633390/2475310121.jpeg',
  'https://ext.same-assets.com/3895633390/3499621860.jpeg',
  'https://ext.same-assets.com/3895633390/2716798418.jpeg',
  'https://ext.same-assets.com/3895633390/355240271.jpeg',
  'https://ext.same-assets.com/3895633390/3354340082.jpeg',
  'https://ext.same-assets.com/3895633390/2508054455.jpeg'
];

export default function GallerySection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Galerie</h2>
        <div className="hidden md:grid grid-cols-3 gap-4">
          {images.map((src) => (
            <img key={src} src={src} alt="" className="w-full object-cover" />
          ))}
        </div>
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src) => (
              <img key={src} src={src} alt="" className="w-full flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
