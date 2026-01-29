import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: '光韵的水疗体验简直 transformative。我每周都来，离开时总是感觉焕然一新。',
    author: '李雪婷',
    position: '市场总监',
    avatar: '/images/avatar-1.jpg',
  },
  {
    quote: '这里的细节关注和宁静氛围无与伦比。这是我对自己的小小犒赏。',
    author: '王雅琳',
    position: '企业家',
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote: '我尝试过很多水疗中心，但光韵对整体健康的执着让我成为忠实客户。',
    author: '陈美玲',
    position: '瑜伽教练',
    avatar: '/images/avatar-3.jpg',
  },
  {
    quote: '面部护理让我感觉年轻了十岁。工作人员专业且体贴。',
    author: '张婷婷',
    position: '室内设计师',
    avatar: '/images/avatar-4.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + testimonials.length) % testimonials.length);
    
    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1.05) translateZ(50px)',
        opacity: 1,
        zIndex: 10,
      };
    } else if (normalizedDiff === 1 || normalizedDiff === -testimonials.length + 1) {
      return {
        transform: 'translateX(120%) scale(0.95) translateZ(-30px) rotateY(-5deg)',
        opacity: 0.6,
        zIndex: 5,
      };
    } else if (normalizedDiff === testimonials.length - 1 || normalizedDiff === -1) {
      return {
        transform: 'translateX(-120%) scale(0.95) translateZ(-30px) rotateY(5deg)',
        opacity: 0.6,
        zIndex: 5,
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.8) translateZ(-100px)',
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#eee7de' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4 transition-all duration-500 ease-out-expo ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            客户评价
          </p>
          <h2
            className={`text-4xl lg:text-5xl font-['Forum'] text-black transition-all duration-600 ease-out-expo delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            客户怎么说
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative perspective-1000 transition-all duration-800 ease-out-expo delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-[400px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute w-full max-w-2xl transition-all duration-500 ease-out-expo preserve-3d"
                style={getCardStyle(index)}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-[#d4a373]" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#d4a373]"
                    />
                    <div>
                      <p className="font-medium text-black">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-[#d4a373] hover:text-white transition-all duration-300 ease-elastic hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ease-out-expo ${
                    index === activeIndex
                      ? 'bg-[#d4a373] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-[#d4a373] hover:text-white transition-all duration-300 ease-elastic hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
