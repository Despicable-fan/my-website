import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: '专业护理',
      desc: '10年+经验的专业团队',
    },
    {
      icon: Heart,
      title: '天然产品',
      desc: '使用有机天然护理产品',
    },
    {
      icon: Award,
      title: '品质保证',
      desc: '国际认证的水疗服务',
    },
  ];

  const quickLinks = [
    { title: '按摩疗法', path: '/services', image: '/images/service-massage.jpg' },
    { title: '面部护理', path: '/services', image: '/images/service-facial.jpg' },
    { title: '身体护理', path: '/services', image: '/images/service-body.jpg' },
    { title: '芳香疗法', path: '/services', image: '/images/service-aroma.jpg' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-white">
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out-expo ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src="images/hero-bg.jpg"
            alt="Spa Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p
                className={`text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4 transition-all duration-600 ease-out-expo delay-600 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                欢迎来到光韵
              </p>

              <h1 className="mb-6">
                {'焕发自然之美'.split('').map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block text-5xl sm:text-6xl lg:text-7xl font-['Forum'] text-black leading-tight transition-all duration-800 ease-elastic ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${800 + index * 50}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </h1>

              <p
                className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-700 ease-smooth delay-1200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                体验极致放松与恢复活力。您通往宁静的旅程从这里开始。
              </p>

              <div
                className={`flex flex-wrap gap-4 transition-all duration-400 ease-bounce delay-1400 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                }`}
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-[#d4a373] transition-all duration-400 hover:scale-105 hover:shadow-xl"
                >
                  <span className="font-medium">探索服务</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-400"
                >
                  <span className="font-medium">立即预约</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-[#f8f3ee] hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#d4a373] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-['Forum'] text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links to Services */}
      <section className="py-20" style={{ backgroundColor: '#f8f3ee' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">我们的服务</p>
            <h2 className="text-4xl font-['Forum'] text-black">探索护理项目</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-['Forum'] text-white mb-2">{item.title}</h3>
                  <span className="inline-flex items-center gap-2 text-[#d4a373] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    了解更多 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-[#d4a373] transition-all duration-300"
            >
              查看全部服务 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/about.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-['Forum'] text-white mb-6">
            开始您的水疗之旅
          </h2>
          <p className="text-lg text-white/80 mb-8">
            预约您的第一次体验，享受专属优惠
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#d4a373] text-black rounded-full font-medium hover:bg-white transition-all duration-300"
            >
              立即预约
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              查看价格
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
