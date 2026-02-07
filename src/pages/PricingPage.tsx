import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, HelpCircle } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  isFeatured?: boolean;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: '基础版',
    price: 299,
    description: '入门水疗体验，适合初次尝试',
    features: [
      '60分钟瑞典式按摩',
      '基础面部护理',
      '使用水疗设施',
      'herbal茶点',
      '免费WiFi',
    ],
    notIncluded: ['私人套房', '香槟服务'],
    badge: '入门首选',
  },
  {
    name: '高级版',
    price: 599,
    description: '最受欢迎，全面升级体验',
    features: [
      '90分钟热石按摩',
      '高级面部护理',
      '身体磨砂或裹敷',
      '使用水疗设施',
      '香槟和茶点',
      '优先预约权',
    ],
    isFeatured: true,
    badge: '推荐',
  },
  {
    name: '奢华版',
    price: 999,
    description: '至尊享受，极致呵护',
    features: [
      '120分钟全套护理',
      '抗衰老面部护理',
      '全身裹敷 + 磨砂',
      '芳香疗法疗程',
      '私人水疗套房',
      '美食午餐',
      '专属顾问服务',
      '免费接送服务',
    ],
    badge: '至尊体验',
  },
];

const faqs = [
  {
    question: '如何预约服务？',
    answer: '您可以通过网站在线预约、电话预约或直接到店预约。我们建议提前1-2天预约，以确保您理想的时间段。',
  },
  {
    question: '可以取消或改期吗？',
    answer: '可以的。请至少提前24小时通知我们，您可以免费取消或改期。24小时内取消可能会收取部分费用。',
  },
  {
    question: '有什么支付方式？',
    answer: '我们接受现金、银行卡、支付宝、微信支付等多种支付方式。会员卡充值还可享受额外优惠。',
  },
  {
    question: '需要提前准备什么？',
    answer: '建议您在护理前1小时避免进食，穿着舒适的衣物。我们会提供所有必要的护理用品和浴袍。',
  },
  {
    question: '有会员优惠吗？',
    answer: '有的！我们的会员卡分为银卡、金卡、钻石卡三个等级，分别享受9折、85折、8折优惠，还有生日特惠等专属福利。',
  },
];

const PricingPage = () => {
  const [animatedPrices, setAnimatedPrices] = useState<number[]>([0, 0, 0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const duration = 1000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedPrices(pricingPlans.map((plan) => Math.floor(plan.price * eased)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="./images/service-facial.jpg"
          alt="Pricing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">定价</p>
            <h1 className="text-5xl lg:text-6xl font-['Forum'] mb-4">投资您的健康</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
              选择适合您的护理方案，开启美丽之旅
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">套餐选择</p>
            <h2 className="text-4xl font-['Forum'] text-black">选择您的护理方案</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative ${plan.isFeatured ? 'md:-translate-y-4' : ''}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`px-4 py-1 rounded-full text-sm font-medium ${
                        plan.isFeatured
                          ? 'bg-[#d4a373] text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div
                  className={`h-full bg-white rounded-2xl p-8 transition-all duration-400 hover:shadow-2xl ${
                    plan.isFeatured
                      ? 'border-2 border-[#d4a373] shadow-xl'
                      : 'border border-gray-100 shadow-lg'
                  }`}
                >
                  {/* Plan Name */}
                  <h3 className="text-2xl font-['Forum'] text-black text-center mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm text-center mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <span className="text-sm text-gray-500">¥</span>
                    <span className="text-5xl font-['Forum'] text-black mx-1">
                      {animatedPrices[index]}
                    </span>
                    <span className="text-sm text-gray-500">/次</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#d4a373]/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-[#d4a373]" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded?.map((item) => (
                      <li key={item} className="flex items-start gap-3 opacity-50">
                        <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs text-gray-400">-</span>
                        </div>
                        <span className="text-sm text-gray-400 line-through">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`block w-full py-3 text-center rounded-full font-medium transition-all duration-300 ${
                      plan.isFeatured
                        ? 'bg-black text-white hover:bg-[#d4a373]'
                        : 'bg-gray-100 text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    选择此方案
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20" style={{ backgroundColor: '#f8f3ee' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">会员特权</p>
            <h2 className="text-4xl font-['Forum'] text-black">加入光韵会员</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '银卡会员', discount: '9折', condition: '累计消费满¥2000' },
              { title: '金卡会员', discount: '85折', condition: '累计消费满¥5000' },
              { title: '钻石会员', discount: '8折', condition: '累计消费满¥10000' },
              { title: '生日特惠', discount: '额外95折', condition: '生日当月' },
            ].map((tier) => (
              <div
                key={tier.title}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#d4a373]/10 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-[#d4a373]" />
                </div>
                <h3 className="text-lg font-['Forum'] text-black mb-2">{tier.title}</h3>
                <p className="text-3xl font-['Forum'] text-[#d4a373] mb-2">{tier.discount}</p>
                <p className="text-sm text-gray-500">{tier.condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">礼品卡</p>
              <h2 className="text-4xl font-['Forum'] text-black mb-6">
                送给挚爱的完美礼物
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                光韵礼品卡是送给家人、朋友或同事的理想选择。让他们在繁忙的生活中享受一段宁静放松的时光。
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '多种面值可选（¥300 - ¥5000）',
                  '有效期12个月',
                  '可兑换任意服务',
                  '精美包装，免费配送',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#d4a373]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-[#d4a373] transition-all duration-300"
              >
                购买礼品卡 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./images/portfolio-aroma.jpg"
                  alt="Gift Card"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#d4a373]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: '#eee7de' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">常见问题</p>
            <h2 className="text-4xl font-['Forum'] text-black">您可能想知道</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-black flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#d4a373]" />
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
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
            准备好开始您的水疗之旅了吗？
          </h2>
          <p className="text-white/70 mb-8">
            立即预约，首次体验享受9折优惠
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a373] text-black rounded-full font-medium hover:bg-white transition-all duration-300"
          >
            立即预约 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

