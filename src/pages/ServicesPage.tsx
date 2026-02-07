import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight, Sparkles, Droplets, Wind, Heart } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  duration: string;
  price: string;
  image: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: 'massage',
    title: '按摩疗法',
    subtitle: '缓解紧张，促进放松',
    description: '我们专业的按摩服务缓解紧张，促进深度放松。',
    longDescription: '我们的按摩疗法结合东方传统技法与西方现代理念，通过专业手法刺激穴位、疏通经络，帮助您释放身体压力，恢复活力。每一项按摩服务都由经验丰富的治疗师执行，确保您获得最佳体验。',
    features: ['瑞典式按摩', '深层组织按摩', '热石疗法', '泰式按摩', '运动按摩'],
    benefits: ['缓解肌肉紧张', '改善血液循环', '促进深度睡眠', '减轻压力焦虑'],
    duration: '60-120分钟',
    price: '¥299起',
    image: './images/service-massage.jpg',
    icon: Heart,
  },
  {
    id: 'facial',
    title: '面部护理',
    subtitle: '恢复肌肤年轻光泽',
    description: '使用优质产品恢复您肌肤的年轻光泽。',
    longDescription: '我们的面部护理采用顶级护肤品牌，结合先进的美容仪器，针对各种肌肤问题提供定制化解决方案。从深层清洁到抗衰老护理，让您的肌肤重焕光彩。',
    features: ['深层清洁', '补水保湿', '抗衰老护理', '祛痘护理', '美白亮肤'],
    benefits: ['改善肤质', '减少细纹', '提亮肤色', '紧致肌肤'],
    duration: '60-90分钟',
    price: '¥399起',
    image: './images/service-facial.jpg',
    icon: Sparkles,
  },
  {
    id: 'body',
    title: '身体护理',
    subtitle: '全身焕新，焕发活力',
    description: '全身护理，让您焕然一新，焕发活力。',
    longDescription: '我们的身体护理项目涵盖身体磨砂、裹敷、塑形等多种服务，使用天然有机产品，帮助您去除角质、排毒养颜、塑造完美身形。',
    features: ['身体磨砂', '泥浴裹敷', '海藻裹敷', '瘦身塑形', '产后修复'],
    benefits: ['去除角质', '排毒养颜', '紧致肌肤', '改善体态'],
    duration: '60-120分钟',
    price: '¥499起',
    image: './images/service-body.jpg',
    icon: Droplets,
  },
  {
    id: 'aroma',
    title: '芳香疗法',
    subtitle: '平衡身心的天然力量',
    description: '利用天然精油的力量平衡身心。',
    longDescription: '芳香疗法是利用纯天然植物精油，通过吸入、按摩等方式，达到身心平衡的自然疗法。我们的芳疗师会根据您的需求，调配专属精油配方。',
    features: ['精油按摩', '香薰吸入', '精油浴', '定制精油', '冥想放松'],
    benefits: ['舒缓压力', '改善睡眠', '提升免疫', '平衡情绪'],
    duration: '60-90分钟',
    price: '¥359起',
    image: './images/service-aroma.jpg',
    icon: Wind,
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="./images/hero-bg.jpg"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">我们的服务</p>
            <h1 className="text-5xl lg:text-6xl font-['Forum'] mb-4">专业水疗护理</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
              探索我们精心设计的护理项目，找到最适合您的方案
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">服务概览</p>
            <h2 className="text-4xl font-['Forum'] text-black">四大核心服务</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative p-6 rounded-2xl text-left transition-all duration-400 ${
                  selectedService.id === service.id
                    ? 'bg-black text-white'
                    : 'bg-[#f8f3ee] text-black hover:bg-[#eee7de]'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    selectedService.id === service.id ? 'bg-[#d4a373]' : 'bg-white'
                  }`}
                >
                  <service.icon
                    className={`w-6 h-6 ${
                      selectedService.id === service.id ? 'text-white' : 'text-[#d4a373]'
                    }`}
                  />
                </div>
                <h3 className="text-xl font-['Forum'] mb-2">{service.title}</h3>
                <p
                  className={`text-sm ${
                    selectedService.id === service.id ? 'text-white/70' : 'text-gray-600'
                  }`}
                >
                  {service.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-20" style={{ backgroundColor: '#f8f3ee' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-[500px] object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#d4a373] rounded-full flex items-center justify-center">
                  <selectedService.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm uppercase tracking-[0.2em] text-[#d4a373]">
                  {selectedService.subtitle}
                </span>
              </div>

              <h2 className="text-4xl font-['Forum'] text-black mb-4">
                {selectedService.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedService.longDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-black mb-3">服务项目</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-medium text-black mb-3">主要功效</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedService.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#d4a373]" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="flex items-center gap-6 mb-8 p-4 bg-white rounded-xl">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#d4a373]" />
                  <span className="text-sm text-gray-600">{selectedService.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-['Forum'] text-[#d4a373]">
                    {selectedService.price}
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-[#d4a373] transition-all duration-300"
              >
                预约此服务 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">全部服务</p>
            <h2 className="text-4xl font-['Forum'] text-black">浏览所有护理项目</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[#d4a373]/30 transition-all duration-400"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-['Forum'] text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#d4a373] font-['Forum']">{service.price}</span>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-sm text-black hover:text-[#d4a373] flex items-center gap-1 transition-colors"
                    >
                      了解详情 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-['Forum'] text-white mb-4">
            不确定选择哪个服务？
          </h2>
          <p className="text-white/70 mb-8">
            我们的专业顾问将为您推荐最适合的护理方案
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#d4a373] text-black rounded-full font-medium hover:bg-white transition-all duration-300"
            >
              免费咨询
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

export default ServicesPage;

