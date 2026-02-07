import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('感谢您的留言！我们会尽快与您联系。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: '地址',
      content: '中国上海市静安区南京西路1266号',
    },
    {
      icon: Phone,
      title: '电话',
      content: '+86 21 1234 5678',
    },
    {
      icon: Mail,
      title: '邮箱',
      content: 'hello@guangyun-spa.cn',
    },
  ];

  const businessHours = [
    { day: '周一至周五', hours: '上午9:00 - 晚上8:00' },
    { day: '周六', hours: '上午10:00 - 晚上6:00' },
    { day: '周日', hours: '上午11:00 - 下午5:00' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#eee7de' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ease-out-expo ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{
              transform: isVisible ? 'rotateY(5deg)' : 'rotateY(-20deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-['Forum'] text-black mb-8">
                联系信息
              </h3>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 transition-all duration-500 ease-out-expo ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#d4a373]/10 rounded-lg flex items-center justify-center group hover:bg-[#d4a373] transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#d4a373] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                      <p className="text-black">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div
                className={`border-t border-gray-100 pt-6 transition-all duration-500 ease-out-expo delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#d4a373]" />
                  <h4 className="font-medium text-black">营业时间</h4>
                </div>
                <div className="space-y-2">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-gray-500">{item.day}</span>
                      <span className="text-black">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div
            className={`lg:col-span-3 transition-all duration-600 ease-out-expo delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-['Forum'] text-black mb-2">
                联系我们
              </h3>
              <p className="text-gray-500 mb-8">
                填写以下表单，我们会尽快与您联系
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 transition-all duration-300 ease-out-expo pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? '-top-2 text-xs text-[#d4a373] bg-white px-1'
                          : 'top-3.5 text-gray-400'
                      }`}
                    >
                      姓名
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 ease-out-expo ${
                        focusedField === 'name'
                          ? 'border-[#d4a373] ring-2 ring-[#d4a373]/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 transition-all duration-300 ease-out-expo pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? '-top-2 text-xs text-[#d4a373] bg-white px-1'
                          : 'top-3.5 text-gray-400'
                      }`}
                    >
                      邮箱
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 ease-out-expo ${
                        focusedField === 'email'
                          ? 'border-[#d4a373] ring-2 ring-[#d4a373]/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-300 ease-out-expo pointer-events-none ${
                      focusedField === 'phone' || formData.phone
                        ? '-top-2 text-xs text-[#d4a373] bg-white px-1'
                        : 'top-3.5 text-gray-400'
                    }`}
                  >
                    电话
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 ease-out-expo ${
                      focusedField === 'phone'
                        ? 'border-[#d4a373] ring-2 ring-[#d4a373]/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-300 ease-out-expo pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2 text-xs text-[#d4a373] bg-white px-1'
                        : 'top-3.5 text-gray-400'
                    }`}
                  >
                    留言
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300 ease-out-expo resize-none ${
                      focusedField === 'message'
                        ? 'border-[#d4a373] ring-2 ring-[#d4a373]/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-black text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ease-bounce hover:bg-[#d4a373] hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>发送中...</span>
                    </>
                  ) : (
                    <>
                      <span>发送消息</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
