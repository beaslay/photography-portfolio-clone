import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageCount: number;
  imageUrl: string;
  description?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Urban Magazine",
    category: "Editorial",
    imageCount: 12,
    imageUrl: "https://ext.same-assets.com/3895633390/2475310121.jpeg"
  },
  {
    id: 2,
    title: "Fashion Weekly",
    category: "Fashion",
    imageCount: 5,
    imageUrl: "https://ext.same-assets.com/3895633390/3499621860.jpeg"
  },
  {
    id: 3,
    title: "Portrait Series",
    category: "Portrait",
    imageCount: 7,
    imageUrl: "https://ext.same-assets.com/3895633390/2716798418.jpeg"
  },
  {
    id: 4,
    title: "Creative Director",
    category: "Commercial",
    imageCount: 6,
    imageUrl: "https://ext.same-assets.com/3895633390/355240271.jpeg"
  },
  {
    id: 5,
    title: "Brand Management",
    category: "Branding",
    imageCount: 6,
    imageUrl: "https://ext.same-assets.com/3895633390/3354340082.jpeg"
  },
  {
    id: 6,
    title: "Street Style",
    category: "Street",
    imageCount: 6,
    imageUrl: "https://ext.same-assets.com/3895633390/2508054455.jpeg"
  },
  {
    id: 7,
    title: "Lifestyle Brand",
    category: "Lifestyle",
    imageCount: 10,
    imageUrl: "https://ext.same-assets.com/3895633390/2151845150.jpeg"
  },
  {
    id: 8,
    title: "Creative Project",
    category: "Art Direction",
    imageCount: 4,
    imageUrl: "https://ext.same-assets.com/3895633390/1080903994.jpeg"
  },
  {
    id: 9,
    title: "Editorial Series",
    category: "Editorial",
    imageCount: 5,
    imageUrl: "https://ext.same-assets.com/3895633390/4102555859.jpeg"
  }
];

export default function PortfolioGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#fbfafa]" id="work">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-[#2d241d] mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-[#2d241d]/70 max-w-2xl mx-auto">
            A curated selection of photography projects spanning editorial, fashion, portrait, and commercial work.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden bg-[#2d241d]/5">
                <div className="aspect-[4/5] relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      hoveredItem === item.id ? 'scale-110' : 'scale-100'
                    }`}
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-[#2d241d]/40 transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Content overlay */}
                  <div className={`absolute inset-0 flex items-end p-6 transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm uppercase tracking-wider mb-2">{item.category}</p>
                      <span className="text-xs text-white/60">({item.imageCount} images)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title below image */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#2d241d] mb-1">{item.title}</h3>
                <p className="text-sm text-[#2d241d]/60 uppercase tracking-wider">
                  {item.category} ({item.imageCount})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
