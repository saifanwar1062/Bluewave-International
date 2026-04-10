import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Briefcase, Users, ChevronDown, Compass, Ship, Award, Anchor, Waves } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/Bluewave_international.png';
import { useApply } from './ApplyContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useApply();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <icon className="w-4 h-4" />, path: '/' },
    { name: 'About Us', icon: <icon className="w-4 h-4" />, path: '/about' },
    { name: 'Services', icon: <icon className="w-4 h-4" />, path: '/services' },
    { name: 'Jobs', icon: <icon className="w-4 h-4" />, path: '/jobs' },
    { name: 'Training', icon: <icon className="w-4 h-4" />, path: '/training' },
    { name: 'FAQ', icon: <icon className="w-4 h-4" />, path: '/faq' },
    { name: 'Contact Us', icon: <icon className="w-4 h-4" />, path: '/contact' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Main Navbar with royal blue to sky blue gradient with golden accent */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'shadow-lg shadow-blue-900/20 bg-gradient-to-l from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]/30'
          : 'shadow-md shadow-blue-900/10 bg-gradient-to-l from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]/30'
        }`}>
        {/* Golden gradient overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-[#FFA500]/10 to-[#FFD700]/5"></div>

        {/* Subtle wave pattern overlay for depth */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%23ffffff' d='M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: '1200px 20px'
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center justify-center group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Blue Wave International"
                  className="max-w-[110px] xs:max-w-[110px] sm:max-w-[110px] md:max-w-[110px] lg:max-w-[120px] xl:max-w-[130px] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105"
                />
                {/* Golden glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD700]/0 via-[#FFA500]/20 to-[#FFD700]/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 xl:px-4 py-2 font-medium transition-all duration-300 rounded-xl relative group ${isActivePath(item.path)
                      ? 'text-[#FFD700] bg-white/10 shadow-lg shadow-black/10'
                      : 'text-white/90 hover:text-[#FFD700] hover:bg-white/5'
                    }`}
                >
                  <span className={`transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${isActivePath(item.path) ? 'text-[#FFD700]' : 'text-white/90 group-hover:text-[#FFD700]'
                    }`}>
                    {item.icon}
                  </span>
                  <span className="relative text-sm xl:text-base">
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-300 ${isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </span>
                </Link>
              ))}

              {/* Apply Now Button with golden design */}
              <button
                onClick={() => openModal()}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-xl font-semibold shadow-lg shadow-[#FFD700]/30 hover:shadow-xl hover:shadow-[#FFD700]/40 transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#FFA500] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Apply Now</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 relative group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {isOpen ?
                <X className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" /> :
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              }
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-2 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-[#FFD700]/20 animate-slideDown">
              {/* Mobile menu background with royal blue gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-[#002B5C]/95 via-[#0A4D8C]/95 to-[#7CB9E8]/95"></div>

              {/* Golden wave decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]"></div>

              <div className="relative z-10 py-2 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all duration-300 ${isActivePath(item.path)
                        ? 'text-[#FFD700] bg-white/10 border-l-4 border-[#FFD700]'
                        : 'text-white/80 hover:text-[#FFD700] hover:bg-white/5 hover:pl-6 sm:hover:pl-8'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={`transition-transform ${isActivePath(item.path) ? 'scale-110 text-[#FFD700]' : 'text-white/80'
                      }`}>
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base">{item.name}</span>
                    {isActivePath(item.path) && (
                      <span className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full animate-pulse"></span>
                    )}
                  </Link>
                ))}

                <div className="p-4 sm:p-6">
                  <button
                    onClick={() => { openModal(); setIsOpen(false); }}
                    className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group text-center block"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FFA500] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 text-sm sm:text-base flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Quick contact info for mobile with golden accents */}
                  <div className="flex flex-col items-center justify-center mt-4 pt-4 border-t border-white/20">

                    {/* Email */}
                    <a
                      href="mailto:hr@bluewavecruise.in"
                      className="flex items-center space-x-2 text-white/90 hover:text-[#FFD700] transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">hr@bluewavecruise.in</span>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+918796144831"
                      className="flex items-center space-x-2 mt-2 text-white/90 hover:text-[#FFD700] transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">+91-8796144831</span>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        /* Custom scrollbar for mobile menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FFD700, #FFA500);
          border-radius: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #FFA500, #FFD700);
        }
      `}</style>
    </>
  );
};

export default Navbar;