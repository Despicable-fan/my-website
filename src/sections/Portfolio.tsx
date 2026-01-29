import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  size: 'tall' | 'wide';
}

const portfolioItems: PortfolioItem[] = [
  {
    title: '放松按摩',
    category: '按摩',
    image: '/images/portfolio-massage.jpg',
    size: 'tall',
  },
  {
    title: '补水面部护理',
    category: '面部护理',
    image: '/images/portfolio-facial.jpg',
    size: 'wide',
  },
  {
    title: '芳香疗法',
    category: '芳香疗法',
    image: '/images/portfolio-aroma.jpg',
    size: 'tall',
  },
  {
    title: '身体裹敷',
    category: '身体护理',
    image: '/images/portfolio-body.jpg',
    size: 'wide',
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <p
              className={`text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4 transition-all duration-500 ease-out-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              作品集
            </p>
            <h2
              className={`text-4xl lg:text-5xl font-['Forum'] text-black transition-all duration-600 ease-out-expo delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              我们的作品
            </h2>
          </div>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group inline-flex items-center gap-2 mt-6 lg:mt-0 text-black font-medium hover:text-[#d4a373] transition-all duration-400 ease-bounce delay-800 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <span>查看全部作品</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            {/* Item 1 - Tall */}
            <div
              className={`relative group overflow-hidden rounded-2xl perspective-800 transition-all duration-800 ease-out-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                height: '500px',
                transitionDelay: '200ms',
              }}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-500 ease-out-expo ${
                  hoveredIndex === 0 ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  transform: hoveredIndex === 0 ? 'rotateY(-5deg) rotateX(3deg)' : 'rotateY(0)',
                }}
              >
                <img
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-400 ease-out-expo ${
                  hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-400 ease-out-expo ${
                  hoveredIndex === 0
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <p className="text-sm text-[#d4a373] mb-2">{portfolioItems[0].category}</p>
                <h3 className="text-2xl font-['Forum'] text-white">{portfolioItems[0].title}</h3>
              </div>
            </div>

            {/* Item 4 - Wide */}
            <div
              className={`relative group overflow-hidden rounded-2xl perspective-800 transition-all duration-800 ease-out-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                height: '350px',
                transitionDelay: '650ms',
              }}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-500 ease-out-expo ${
                  hoveredIndex === 3 ? 'scale-105' : 'scale-100'
                }`}
              >
                <img
                  src={portfolioItems[3].image}
                  alt={portfolioItems[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-400 ease-out-expo ${
                  hoveredIndex === 3 ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-400 ease-out-expo ${
                  hoveredIndex === 3
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <p className="text-sm text-[#d4a373] mb-2">{portfolioItems[3].category}</p>
                <h3 className="text-2xl font-['Forum'] text-white">{portfolioItems[3].title}</h3>
              </div>
            </div>
          </div>

          {/* Right Column - Offset */}
          <div className="flex flex-col gap-5 md:mt-12">
            {/* Item 2 - Wide */}
            <div
              className={`relative group overflow-hidden rounded-2xl perspective-800 transition-all duration-800 ease-out-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                height: '350px',
                transitionDelay: '350ms',
              }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-500 ease-out-expo ${
                  hoveredIndex === 1 ? 'scale-105' : 'scale-100'
                }`}
              >
                <img
                  src={portfolioItems[1].image}
                  alt={portfolioItems[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-400 ease-out-expo ${
                  hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-400 ease-out-expo ${
                  hoveredIndex === 1
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <p className="text-sm text-[#d4a373] mb-2">{portfolioItems[1].category}</p>
                <h3 className="text-2xl font-['Forum'] text-white">{portfolioItems[1].title}</h3>
              </div>
            </div>

            {/* Item 3 - Tall */}
            <div
              className={`relative group overflow-hidden rounded-2xl perspective-800 transition-all duration-800 ease-out-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                height: '500px',
                transitionDelay: '500ms',
              }}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-500 ease-out-expo ${
                  hoveredIndex === 2 ? 'scale-105' : 'scale-100'
                }`}
              >
                <img
                  src={portfolioItems[2].image}
                  alt={portfolioItems[2].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-400 ease-out-expo ${
                  hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-400 ease-out-expo ${
                  hoveredIndex === 2
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <p className="text-sm text-[#d4a373] mb-2">{portfolioItems[2].category}</p>
                <h3 className="text-2xl font-['Forum'] text-white">{portfolioItems[2].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
