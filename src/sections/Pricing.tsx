import { useState, useEffect, useRef } from 'react';
import { Check, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: '基础版',
    price: 299,
    description: '入门水疗体验',
    features: [
      '60分钟瑞典式按摩',
      '基础面部护理',
      '使用水疗设施',
      'herbal茶点',
    ],
  },
  {
    name: '高级版',
    price: 599,
    description: '最受欢迎',
    features: [
      '90分钟热石按摩',
      '高级面部护理',
      '身体磨砂或裹敷',
      '使用水疗设施',
      '香槟和茶点',
    ],
    isFeatured: true,
  },
  {
    name: '奢华版',
    price: 999,
    description: '至尊享受',
    features: [
      '120分钟全套护理',
      '抗衰老面部护理',
      '全身裹敷 + 磨砂',
      '芳香疗法疗程',
      '私人水疗套房',
      '美食午餐',
    ],
  },
];

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPrices, setAnimatedPrices] = useState<number[]>([0, 0, 0]);
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

  // Animate prices
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-expo

      setAnimatedPrices(pricingPlans.map((plan) => Math.floor(plan.price * eased)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(animate, 600);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#fbfaf7' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4 transition-all duration-500 ease-out-expo ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            定价
          </p>
          <h2
            className={`text-4xl lg:text-5xl font-['Forum'] text-black transition-all duration-600 ease-out-expo delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            投资您的健康
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative transition-all duration-800 ease-out-expo preserve-3d ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${plan.isFeatured ? 'md:-translate-y-5' : ''}`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              <div
                className={`relative bg-white rounded-2xl p-8 transition-all duration-400 ease-out-expo hover:shadow-2xl ${
                  plan.isFeatured
                    ? 'border-2 border-[#d4a373] shadow-xl animate-pulse-glow'
                    : 'border border-gray-100 shadow-lg'
                }`}
              >
                {/* Featured Badge */}
                {plan.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 bg-[#d4a373] text-white text-sm font-medium rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span>推荐</span>
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-xl font-['Forum'] text-black text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="text-center mb-8">
                  <span className="text-sm text-gray-500">¥</span>
                  <span className="text-5xl font-['Forum'] text-black mx-1">
                    {animatedPrices[index]}
                  </span>
                  <span className="text-sm text-gray-500">/次</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 transition-all duration-400 ease-out-expo ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                      }`}
                      style={{
                        transitionDelay: `${600 + index * 150 + featureIndex * 80}ms`,
                      }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-[#d4a373]/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#d4a373]" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block w-full py-3 text-center rounded-full font-medium transition-all duration-300 ease-bounce ${
                    plan.isFeatured
                      ? 'bg-black text-white hover:bg-[#d4a373]'
                      : 'bg-gray-100 text-black hover:bg-black hover:text-white'
                  }`}
                >
                  选择
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
