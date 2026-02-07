import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax effect for image
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / window.innerHeight;
      const translateY = scrollProgress * 50;
      const rotateY = -5 + scrollProgress * 10;
      imageRef.current.style.transform = `translateY(${translateY}px) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#f8f3ee' }}
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-[#d4a373]/20 rounded-full hidden lg:block" />
      <div
        className="absolute bottom-20 left-10 w-20 h-20 bg-[#d4a373]/10 rounded-lg rotate-12 hidden lg:block"
        style={{
          transform: isVisible ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 1s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative perspective-1000">
            <div
              ref={imageRef}
              className={`relative transition-all duration-1000 ease-out-expo ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-5deg)',
                willChange: 'transform',
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="images/about.jpg"
                  alt="Spa Experience"
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-600 hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div
                className={`absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 transition-all duration-800 ease-out-expo delay-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-4xl font-['Forum'] text-[#d4a373] mb-1">10+</p>
                <p className="text-sm text-gray-600">年专业经验</p>
              </div>
            </div>

            {/* Shadow element */}
            <div
              className={`absolute -bottom-8 -left-8 w-full h-full bg-[#d4a373]/20 rounded-2xl -z-10 transition-all duration-800 ease-smooth delay-400 ${
                isVisible ? 'opacity-100 blur-xl' : 'opacity-0 blur-0'
              }`}
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            {/* Subtitle */}
            <p
              className={`text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4 transition-all duration-500 ease-out-expo delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              关于我们
            </p>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-['Forum'] text-black mb-6 leading-tight">
              {'自然美的圣地'.split('').map((char, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-600 ease-out-expo ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${600 + index * 80}ms` }}
                >
                  {char}
                </span>
              ))}
            </h2>

            {/* Description */}
            <div
              className={`space-y-4 mb-8 transition-all duration-700 ease-smooth delay-800 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                在光韵，我们相信真正的美源自内心。我们的整体护理将古老智慧与现代技术相结合，恢复您身心的平衡。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们的专业团队致力于为您提供最优质的水疗体验，让每一次到访都成为一段难忘的放松之旅。
              </p>
            </div>

            {/* Features */}
            <div
              className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-600 ease-out-expo delay-900 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                '专业认证治疗师',
                '天然有机产品',
                '私密舒适环境',
                '个性化护理方案',
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2"
                  style={{ transitionDelay: `${900 + index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-[#d4a373] rounded-full" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group inline-flex items-center gap-2 text-black font-medium hover:text-[#d4a373] transition-all duration-400 ease-bounce delay-1000 ${
                isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
              }`}
            >
              <span>了解更多</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
