import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      subContent: '恒隆广场 3楼 301室',
    },
    {
      icon: Phone,
      title: '电话',
      content: '+86 21 1234 5678',
      subContent: '24小时预约热线',
    },
    {
      icon: Mail,
      title: '邮箱',
      content: 'hello@guangyun-spa.cn',
      subContent: '工作日24小时内回复',
    },
  ];

  const businessHours = [
    { day: '周一至周五', hours: '上午9:00 - 晚上8:00' },
    { day: '周六', hours: '上午10:00 - 晚上6:00' },
    { day: '周日', hours: '上午11:00 - 下午5:00' },
  ];

  const services = [
    '瑞典式按摩',
    '深层组织按摩',
    '热石疗法',
    '补水面部护理',
    '抗衰老护理',
    '身体磨砂',
    '身体裹敷',
    '芳香疗法',
    '其他服务',
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#f8f3ee]">
        <div className="text-center p-12 bg-white rounded-2xl shadow-xl max-w-md mx-4">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-['Forum'] text-black mb-4">预约成功！</h2>
          <p className="text-gray-600 mb-6">
            感谢您的预约，我们的客服人员将在24小时内与您联系确认详情。
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                date: '',
                message: '',
              });
            }}
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-[#d4a373] transition-colors"
          >
            继续预约
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="./images/about.jpg"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373] mb-4">联系我们</p>
            <h1 className="text-5xl lg:text-6xl font-['Forum'] mb-4">预约您的护理</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
              我们期待为您提供最优质的水疗体验
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-10">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#d4a373] rounded-full flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-medium text-black mb-2">{item.title}</h3>
                <p className="text-gray-800 mb-1">{item.content}</p>
                <p className="text-sm text-gray-500">{item.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" style={{ backgroundColor: '#f8f3ee' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Business Hours & Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#d4a373]" />
                  <h3 className="text-xl font-['Forum'] text-black">营业时间</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="text-black font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-['Forum'] text-black mb-4">我们的位置</h3>
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#d4a373] mx-auto mb-2" />
                    <p className="text-gray-600">上海市静安区南京西路1266号</p>
                    <p className="text-sm text-gray-500 mt-1">地铁2/12/13号线南京西路站</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-['Forum'] text-black mb-4">关注我们</h3>
                <div className="flex gap-3">
                  {['微信', '微博', '小红书', '抖音'].map((social) => (
                    <button
                      key={social}
                      onClick={() => alert(`${social}功能即将上线！`)}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition-colors"
                    >
                      <span className="text-sm">{social[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-['Forum'] text-black mb-2">在线预约</h3>
                <p className="text-gray-500 mb-8">填写以下信息，我们将尽快与您联系</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' || formData.name
                            ? '-top-2 text-xs text-[#d4a373] bg-white px-1'
                            : 'top-3.5 text-gray-400'
                        }`}
                      >
                        姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 transition-all"
                        required
                      />
                    </div>

                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'phone' || formData.phone
                            ? '-top-2 text-xs text-[#d4a373] bg-white px-1'
                            : 'top-3.5 text-gray-400'
                        }`}
                      >
                        电话 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 transition-all"
                    />
                  </div>

                  {/* Service & Date */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm text-gray-500 mb-2">选择服务 *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 transition-all bg-white"
                        required
                      >
                        <option value="">请选择服务</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <label className="block text-sm text-gray-500 mb-2">预约日期</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? '-top-2 text-xs text-[#d4a373] bg-white px-1'
                          : 'top-3.5 text-gray-400'
                      }`}
                    >
                      留言 / 特殊需求
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#d4a373] focus:ring-2 focus:ring-[#d4a373]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#d4a373] transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <span>提交预约</span>
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

      {/* Notice */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            * 预约成功后，我们的客服人员将在24小时内与您联系确认。如需紧急预约，请直接致电 +86 21 1234 5678
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

