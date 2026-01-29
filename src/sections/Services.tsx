import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: { name: string; desc: string }[];
  image: string;
}

const services: Service[] = [
  {
    id: 'massage',
    title: '按摩疗法',
    description: '我们专业的按摩服务缓解紧张，促进深度放松。',
    features: [
      { name: '瑞典式按摩', desc: '轻柔放松' },
      { name: '深层组织', desc: '针对性缓解' },
      { name: '热石疗法', desc: '舒缓温暖' },
    ],
    image: '/images/service-massage.jpg',
  },
  {
    id: 'facial',
    title: '面部护理',
    description: '使用优质产品恢复您肌肤的年轻光泽。',
    features: [
      { name: '补水面部护理', desc: '深层滋润' },
      { name: '抗衰老护理', desc: '年轻肌肤' },
      { name: '祛痘护理', desc: '清透肤色' },
    ],
    image: '/images/service-facial.jpg',
  },
  {
    id: 'body',
    title: '身体护理',
    description: '全身护理，让您焕然一新，焕发活力。',
    features: [
      { name: '身体裹敷', desc: '排毒与滋养' },
      { name: '身体磨砂', desc: '去角质与柔滑' },
      { name: '瘦身护理', desc: '塑形与紧致' },
    ],
    image: '/images/service-body.jpg',
  },
  {
    id: 'aroma',
    title: '芳香疗法',
    description: '利用天然精油的力量平衡身心。',
    features: [
      { name: '精油按摩', desc: '芳香放松' },
      { name: '吸入疗法', desc: '呼吸健康' },
      { name: '定制混合', desc: '个性化护理' },
    ],
    image: '/images/service-aroma.jpg',
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
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

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setIsFlipping(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsFlipping(false);
    }, 400);
  };

  const activeService = services[activeTab];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4 transition-all duration-500 ease-out-expo ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            我们的服务
          </p>
          <h2
            className={`text-4xl lg:text-5xl font-['Forum'] text-black transition-all duration-600 ease-out-expo delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            探索我们的护理
          </h2>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-600 ease-out-expo delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => handleTabChange(index)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-out-expo overflow-hidden ${
                activeTab === index
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {/* Hover fill effect */}
              <span
                className={`absolute inset-0 bg-[#d4a373] transition-transform duration-300 ease-out-expo origin-center ${
                  activeTab === index ? 'scale-100' : 'scale-0'
                }`}
              />
              <span className="relative z-10">{service.title}</span>
              
              {/* Active indicator */}
              {activeTab === index && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#d4a373] animate-pulse-glow" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with 3D flip */}
          <div
            className={`relative perspective-1000 transition-all duration-800 ease-out-expo delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-400 ease-in-expo preserve-3d ${
                isFlipping ? 'rotate-y-90 opacity-0' : 'rotate-y-0 opacity-100'
              }`}
              style={{
                transform: isFlipping ? 'rotateY(-90deg)' : 'rotateY(0deg)',
              }}
            >
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#d4a373]/30 rounded-2xl -z-10" />
          </div>

          {/* Service Details */}
          <div
            className={`lg:pl-8 transition-all duration-600 ease-out-expo delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3
              className={`text-3xl lg:text-4xl font-['Forum'] text-black mb-4 transition-all duration-500 ease-out-expo ${
                isFlipping ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {activeService.title}
            </h3>
            
            <p
              className={`text-gray-600 mb-8 leading-relaxed transition-all duration-400 ease-smooth delay-100 ${
                isFlipping ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {activeService.description}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {activeService.features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`flex items-center gap-4 transition-all duration-400 ease-out-expo ${
                    isFlipping ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#d4a373] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium text-black">{feature.name}</span>
                    <span className="text-gray-500 ml-2">— {feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-[#d4a373] transition-all duration-400 ease-bounce ${
                isFlipping ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <span>预约此服务</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
