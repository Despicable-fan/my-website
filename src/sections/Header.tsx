import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于', path: '/about' },
    { name: '服务', path: '/services' },
    { name: '作品', path: '/portfolio' },
    { name: '定价', path: '/pricing' },
    { name: '联系', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      }`}
      style={{ height: isScrolled ? '60px' : '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            to="/"
            className={`font-['Forum'] text-2xl font-bold text-black transition-transform duration-300 hover:scale-105 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            光韵
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  isActive(link.path)
                    ? 'text-[#d4a373]'
                    : 'text-gray-800 hover:text-[#d4a373]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4a373] transition-all duration-300 ease-out-expo ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-[#d4a373] transition-all duration-300 ease-elastic hover:scale-105 hover:shadow-lg"
            >
              立即预约
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-out-expo ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-3 px-4 rounded-lg transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-[#d4a373] bg-[#d4a373]/10'
                  : 'text-gray-800 hover:text-[#d4a373] hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 mx-4 py-3 px-6 bg-black text-white text-center rounded-full hover:bg-[#d4a373] transition-colors duration-300"
          >
            立即预约
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
