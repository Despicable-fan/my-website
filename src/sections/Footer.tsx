import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('感谢订阅！您将收到我们的最新资讯。');
      setEmail('');
    }
  };

  const quickLinks = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '服务', path: '/services' },
    { name: '作品', path: '/portfolio' },
    { name: '定价', path: '/pricing' },
    { name: '联系', path: '/contact' },
  ];

  const services = [
    { name: '按摩疗法', path: '/services' },
    { name: '面部护理', path: '/services' },
    { name: '身体护理', path: '/services' },
    { name: '芳香疗法', path: '/services' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white pt-20 pb-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div
            className={`transition-all duration-500 ease-out-expo delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link to="/" className="text-3xl font-['Forum'] mb-6 inline-block">
              光韵
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              在光韵，我们通过整体水疗护理提升您的自然之美。体验宁静，发现光彩照人的您。
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-500 ease-out-expo delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h4 className="text-lg font-medium mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-300 ease-out-expo ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#d4a373] hover:translate-x-1 inline-block transition-all duration-300 ease-out-expo"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className={`transition-all duration-500 ease-out-expo delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h4 className="text-lg font-medium mb-6">服务</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={service.name}
                  className={`transition-all duration-300 ease-out-expo ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#d4a373] hover:translate-x-1 inline-block transition-all duration-300 ease-out-expo"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className={`transition-all duration-500 ease-out-expo delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h4 className="text-lg font-medium mb-6">订阅新闻通讯</h4>
            <p className="text-gray-400 mb-4">
              获取独家优惠和健康技巧。
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="您的邮箱"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[#d4a373] transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-[#d4a373] text-black rounded-lg hover:bg-white transition-colors duration-300 ease-elastic hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t border-white/10 transition-all duration-800 ease-out-expo delay-700 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className={`text-gray-500 text-sm transition-all duration-400 ease-smooth delay-900 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            © 2024 光韵水疗中心。保留所有权利。
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {['微信', '微博', '小红书', '抖音'].map((social, index) => (
              <button
                key={social}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`${social}功能即将上线！`);
                }}
                className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#d4a373] hover:text-black transition-all duration-300 ease-elastic hover:scale-110 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <span className="text-xs">{social[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
