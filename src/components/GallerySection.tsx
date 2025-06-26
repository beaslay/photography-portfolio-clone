// 🔹 TYPE: React component
// 🔸 BUT : Galerie publique avec Embla Carousel
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const images = [
  'https://ext.same-assets.com/3895633390/1080903994.jpeg',
  'https://ext.same-assets.com/3895633390/2475310121.jpeg',
  'https://ext.same-assets.com/3895633390/3499621860.jpeg',
  'https://ext.same-assets.com/3895633390/2716798418.jpeg',
  'https://ext.same-assets.com/3895633390/355240271.jpeg',
  'https://ext.same-assets.com/3895633390/3354340082.jpeg',
];

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Galerie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {images.slice(0, 6).map((src, idx) => (
            <img key={idx} src={src} alt="Galerie" className="w-full object-cover" />
          ))}
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, idx) => (
              <div className="min-w-full" key={idx}>
                <img src={src} alt="Slide" className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-3 h-3 rounded-full ${selectedIndex === idx ? 'bg-[#d4af37]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
