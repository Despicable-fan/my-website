import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      const parallaxValue = scrollY * 0.3;
      imageRef.current.style.transform = `translateY(${parallaxValue}px) scale(${1 + scrollY * 0.0002})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out-expo ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{ willChange: 'transform' }}
      >
        <img
          src="images/hero-bg.jpg"
          alt="Spa Treatment"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
      </div>

      {/* Diagonal Edge Decoration */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-all duration-800 ease-dramatic delay-400 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
          background: 'linear-gradient(135deg, rgba(212,163,115,0.1) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            {/* Subtitle */}
            <p
              className={`text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4 transition-all duration-600 ease-out-expo delay-600 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              欢迎来到光韵
            </p>

            {/* Title */}
            <h1 className="mb-6">
              {'焕发自然之美'.split('').map((char, index) => (
                <span
                  key={index}
                  className={`inline-block text-5xl sm:text-6xl lg:text-7xl font-['Forum'] text-black leading-tight transition-all duration-800 ease-elastic ${
                    isLoaded
                      ? 'opacity-100 translate-y-0 rotate-0'
                      : 'opacity-0 translate-y-12 rotate-12'
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 50}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-700 ease-smooth delay-1200 ${
                isLoaded
                  ? 'opacity-100 translate-y-0 blur-0'
                  : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              体验极致放松与恢复活力。您通往宁静的旅程从这里开始。
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToServices}
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-[#d4a373] transition-all duration-400 ease-bounce delay-1400 hover:scale-105 hover:shadow-xl ${
                isLoaded
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-80'
              }`}
            >
              <span className="font-medium">探索我们的服务</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-[#d4a373]/30 rounded-full animate-float hidden lg:block" />
      <div
        className="absolute top-40 right-40 w-4 h-4 bg-[#d4a373]/40 rounded-full animate-float hidden lg:block"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};

export default Hero;
