import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: '瑞典式放松按摩',
    category: '按摩疗法',
    description: '经典的放松按摩手法，帮助缓解肌肉紧张，促进全身血液循环。',
    image: '/images/portfolio-massage.jpg',
  },
  {
    id: 2,
    title: '深层补水面部护理',
    category: '面部护理',
    description: '使用玻尿酸精华，为肌肤注入充足水分，恢复水润光泽。',
    image: '/images/portfolio-facial.jpg',
  },
  {
    id: 3,
    title: '薰衣草精油芳香疗法',
    category: '芳香疗法',
    description: '薰衣草精油配合专业按摩手法，舒缓压力，改善睡眠质量。',
    image: '/images/portfolio-aroma.jpg',
  },
  {
    id: 4,
    title: '海藻排毒身体裹敷',
    category: '身体护理',
    description: '天然海藻精华深层排毒，紧致肌肤，改善身体线条。',
    image: '/images/portfolio-body.jpg',
  },
  {
    id: 5,
    title: '热石能量按摩',
    category: '按摩疗法',
    description: '温热的玄武岩石配合精油按摩，释放深层肌肉压力。',
    image: '/images/service-massage.jpg',
  },
  {
    id: 6,
    title: '抗衰老黄金面部护理',
    category: '面部护理',
    description: '黄金精华配合射频仪器，刺激胶原蛋白再生，淡化细纹。',
    image: '/images/service-facial.jpg',
  },
  {
    id: 7,
    title: '玫瑰精油SPA',
    category: '芳香疗法',
    description: '玫瑰精油的浪漫芬芳，唤醒肌肤活力，提升女性魅力。',
    image: '/images/service-aroma.jpg',
  },
  {
    id: 8,
    title: '死海泥身体护理',
    category: '身体护理',
    description: '富含矿物质的死海泥，深层清洁毛孔，改善肌肤问题。',
    image: '/images/service-body.jpg',
  },
];

const categories = ['全部', '按摩疗法', '面部护理', '身体护理', '芳香疗法'];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === '全部'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="images/portfolio-massage.jpg"
          alt="Portfolio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">作品集</p>
            <h1 className="text-5xl lg:text-6xl font-['Forum'] mb-4">我们的作品</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
              真实的服务场景，见证每一次美丽的蜕变
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[#d4a373] text-sm mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-['Forum'] mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{item.description}</p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 scale-0 group-hover:scale-100">
                  <ZoomIn className="w-5 h-5 text-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ backgroundColor: '#f8f3ee' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-['Forum'] text-[#d4a373] mb-2">5000+</p>
              <p className="text-gray-600">服务客户</p>
            </div>
            <div>
              <p className="text-5xl font-['Forum'] text-[#d4a373] mb-2">20+</p>
              <p className="text-gray-600">护理项目</p>
            </div>
            <div>
              <p className="text-5xl font-['Forum'] text-[#d4a373] mb-2">98%</p>
              <p className="text-gray-600">满意度</p>
            </div>
            <div>
              <p className="text-5xl font-['Forum'] text-[#d4a373] mb-2">10+</p>
              <p className="text-gray-600">年经验</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">客户反馈</p>
            <h2 className="text-4xl font-['Forum'] text-black">听听客户怎么说</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-[#f8f3ee] rounded-2xl p-6"
              >
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-black">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-[#d4a373] text-sm">{selectedImage.category}</span>
              <h3 className="text-2xl font-['Forum'] mt-1">{selectedImage.title}</h3>
              <p className="text-white/70 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
