import { Award, Users, Clock, Heart, Check } from 'lucide-react';

const AboutPage = () => {

  const stats = [
    { icon: Award, number: '10+', label: '年专业经验' },
    { icon: Users, number: '5000+', label: '满意客户' },
    { icon: Clock, number: '24/7', label: '在线预约' },
    { icon: Heart, number: '98%', label: '好评率' },
  ];

  const values = [
    {
      title: '专业精神',
      desc: '我们的团队由经过严格培训的专业治疗师组成，每一位都拥有国际认证资质。',
    },
    {
      title: '天然理念',
      desc: '我们坚持使用100%天然有机产品，呵护您的肌肤，尊重自然环境。',
    },
    {
      title: '个性化服务',
      desc: '每位客户都是独特的，我们根据您的需求定制专属护理方案。',
    },
    {
      title: '宁静空间',
      desc: '精心设计的空间，让您远离喧嚣，沉浸在纯粹的放松之中。',
    },
  ];

  const team = [
    {
      name: '林雅婷',
      position: '首席治疗师',
      image: 'images/avatar-1.jpg',
      desc: '15年水疗经验，擅长深层组织按摩',
    },
    {
      name: '陈美玲',
      position: '面部护理专家',
      image: 'images/avatar-2.jpg',
      desc: '专注抗衰老护理，拥有多项国际认证',
    },
    {
      name: '王雪琴',
      position: '芳香疗法师',
      image: 'images/avatar-3.jpg',
      desc: '精油调配专家，擅长压力缓解疗程',
    },
    {
      name: '李芳芳',
      position: '身体护理师',
      image: 'images/avatar-4.jpg',
      desc: '专业瘦身塑形，帮助您重塑自信',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="images/about.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">关于我们</p>
            <h1 className="text-5xl lg:text-6xl font-['Forum'] mb-4">自然美的圣地</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
              在光韵，我们相信真正的美源自内心
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">我们的故事</p>
              <h2 className="text-4xl font-['Forum'] text-black mb-6">
                十年专注，只为您的美丽
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  光韵水疗中心成立于2014年，从一家小型工作室发展成为今天备受信赖的水疗品牌。
                  十年来，我们始终坚持"自然、健康、美丽"的理念，为每一位客户提供最优质的水疗体验。
                </p>
                <p>
                  我们的整体护理将古老智慧与现代技术相结合，恢复您身心的平衡。
                  无论是缓解压力、改善肌肤，还是单纯想要放松身心，光韵都是您的理想之选。
                </p>
                <p>
                  我们相信，真正的美不仅仅是外表的光鲜，更是内心的宁静与自信。
                  在光韵，您将体验到前所未有的放松与蜕变。
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  '国际认证治疗师',
                  '天然有机产品',
                  '私密舒适环境',
                  '个性化护理方案',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#d4a373]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="images/hero-bg.jpg"
                  alt="Our Spa"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#d4a373]/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#d4a373]/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f3ee' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#d4a373] rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-['Forum'] text-black mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">我们的价值观</p>
            <h2 className="text-4xl font-['Forum'] text-black">为什么选择光韵</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[#d4a373]/30 transition-all duration-400"
              >
                <h3 className="text-xl font-['Forum'] text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: '#eee7de' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">专业团队</p>
            <h2 className="text-4xl font-['Forum'] text-black">认识我们的专家</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-['Forum'] text-black mb-1">{member.name}</h3>
                  <p className="text-[#d4a373] text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">环境展示</p>
            <h2 className="text-4xl font-['Forum'] text-black">宁静舒适的空间</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="images/portfolio-massage.jpg"
                alt="Spa Room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="images/portfolio-facial.jpg"
                alt="Treatment Room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="images/portfolio-aroma.jpg"
                alt="Relaxation Area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
