// Services.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Ship,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star,
  Clock,
  Users,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Award,
  TrendingUp,
  HeartHandshake,
  Sparkles,
  Rocket,
  Anchor,
  Coffee,
  Wine,
  Bed,
  Music,
  Settings,
  ShoppingBag,
  Crown,
  Gem,
  Zap,
  Compass,
  Layers,
  Play,
  Pause,
  Quote,
  Target
} from 'lucide-react';
import { useApply } from './ApplyContext';
import Food from "./assets/food.jpeg";
import Bar from "./assets/barservice1.jpeg";
import Housekeeping from "./assets/housekeeping.jpeg";
import CruiseStaff from "./assets/member.jpeg";
import Deck from "./assets/Deck.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useApply();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Cruise Lines', href: '/cruise-lines' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] group-hover:shadow-lg transition-all duration-300">
              <Ship className="h-8 w-8 text-[#FFD700]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] bg-clip-text text-transparent">
                Bluewave International
              </h1>
              <p className="text-sm text-[#FFD700] -mt-1 font-medium">
                Cruise Career Specialists
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-[#002B5C] font-medium transition-colors duration-200 relative group ${item.name === 'Services' ? 'text-[#002B5C] font-semibold' : ''
                  }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-full transition-all duration-300 ${item.name === 'Services' ? 'w-full' : ''
                  }`}></span>
              </Link>
            ))}
            <button
              onClick={() => openModal()}
              className="px-6 py-2.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#002B5C] hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-gray-700 hover:text-[#002B5C] hover:bg-gray-50 rounded-md font-medium ${item.name === 'Services' ? 'text-[#002B5C] bg-[#FFD700]/10' : ''
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-full font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Services = () => {
  const { openModal } = useApply();
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Food & Beverage',
      category: 'Hospitality',
      description: 'From chefs to waitstaff, we place culinary professionals in premium cruise ship restaurants and dining venues.',
      image: Food,
      icon: <Coffee className="w-8 h-8" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]',
      positions: ['Executive Chef', 'Sous Chef', 'Waiter/Waitress', 'Bartender', 'Barista', 'Restaurant Manager'],
      features: [
        'Competitive salaries + tips',
        'International cuisine training',
        'Career advancement programs',
        'Culinary competitions',
        'World-class kitchen facilities'
      ],
      openings: 45,
      salary: '$2,500 - $8,000/month'
    },
    {
      id: 2,
      title: 'Bar Services',
      category: 'Entertainment',
      description: 'Expert bartenders and bar managers for luxury cruise ship lounges, clubs, and poolside bars.',
      image: Bar,
      icon: <Wine className="w-8 h-8" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]',
      positions: ['Head Bartender', 'Mixologist', 'Bar Manager', 'Bar Server', 'Wine Steward', 'Sommelier'],
      features: [
        'Signature cocktail training',
        'Premium brand certifications',
        'High commission potential',
        'International beverage programs',
        'Wine tasting events'
      ],
      openings: 32,
      salary: '$2,000 - $6,500/month'
    },
    {
      id: 3,
      title: 'Housekeeping',
      category: 'Accommodation',
      description: 'Professional cabin stewards and housekeeping supervisors for maintaining 5-star cruise ship accommodations.',
      image: Housekeeping,
      icon: <Bed className="w-8 h-8" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]',
      positions: ['Cabin Steward', 'Housekeeping Supervisor', 'Laundry Manager', 'Public Area Cleaner', 'Linen Keeper'],
      features: [
        'Luxury hotel training',
        'Management opportunities',
        'Performance bonuses',
        'Certified cleaning standards',
        'Guest service excellence'
      ],
      openings: 58,
      salary: '$1,800 - $4,500/month'
    },
    {
      id: 4,
      title: 'Cruise Staff',
      category: 'Entertainment',
      description: 'Dynamic entertainment and activity staff including hosts, dancers, and activity coordinators.',
      image: CruiseStaff,
      icon: <Music className="w-8 h-8" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]',
      positions: ['Cruise Director', 'Entertainment Host', 'Dancer/Performer', 'Youth Counselor', 'Activity Coordinator', 'DJ'],
      features: [
        'Performance contracts',
        'Talent development',
        'International audience',
        'Creative freedom',
        'Travel opportunities'
      ],
      openings: 28,
      salary: '$2,200 - $7,000/month'
    },
    {
      id: 5,
      title: 'Deck & Engine',
      category: 'Marine Operations',
      description: 'Technical and operational roles including deck officers, engineers, and maintenance crew.',
      image: Deck,
      icon: <Settings className="w-8 h-8" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]',
      positions: ['Deck Officer', 'Marine Engineer', 'Electrician', 'Plumber', 'Safety Officer', 'Chief Engineer'],
      features: [
        'Certification assistance',
        'Technical training',
        'Safety compliance',
        'Career progression',
        'International standards'
      ],
      openings: 22,
      salary: '$3,000 - $12,000/month'
    },
  ];

  const stats = [
    { icon: <Users className="h-7 w-7" />, value: '5,000+', label: 'Successful Placements', gradient: 'from-[#002B5C] to-[#0A4D8C]' },
    { icon: <Star className="h-7 w-7" />, value: '98%', label: 'Success Rate', gradient: 'from-[#002B5C] to-[#0A4D8C]' },
    { icon: <Globe className="h-7 w-7" />, value: '50+', label: 'Cruise Partners', gradient: 'from-[#002B5C] to-[#0A4D8C]' },
    { icon: <Clock className="h-7 w-7" />, value: '24/7', label: 'Support', gradient: 'from-[#002B5C] to-[#0A4D8C]' },
  ];

  const recruitmentProcess = [
    {
      step: '01',
      title: 'Profile Assessment',
      description: 'Comprehensive evaluation of your skills and experience',
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]'
    },
    {
      step: '02',
      title: 'Interview Preparation',
      description: 'Personalized coaching and mock interviews',
      icon: <HeartHandshake className="w-6 h-6" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]'
    },
    {
      step: '03',
      title: 'Employer Matching',
      description: 'Strategic match with ideal cruise line partners',
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]'
    },
    {
      step: '04',
      title: 'Document Processing',
      description: 'Assistance with visas, certifications, and paperwork',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]'
    },
    {
      step: '05',
      title: 'Pre-Boarding Training',
      description: 'Industry-specific training and orientation',
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]'
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: 'Continuous career guidance and support',
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-[#002B5C] to-[#0A4D8C]'
    },
  ];

  const departments = [
    { name: 'Culinary', icon: '🍽️', count: 320, color: 'from-[#002B5C] to-[#0A4D8C]' },
    { name: 'Beverage', icon: '🍸', count: 180, color: 'from-[#002B5C] to-[#0A4D8C]' },
    { name: 'Housekeeping', icon: '🏨', count: 450, color: 'from-[#002B5C] to-[#0A4D8C]' },
    { name: 'Entertainment', icon: '🎭', count: 210, color: 'from-[#002B5C] to-[#0A4D8C]' },
    { name: 'Marine', icon: '⚓', count: 150, color: 'from-[#002B5C] to-[#0A4D8C]' },
    { name: 'Retail', icon: '🛍️', count: 120, color: 'from-[#002B5C] to-[#0A4D8C]' },
    { name: 'Spa & Wellness', icon: '💆', count: 95, color: 'from-[#002B5C] to-[#0A4D8C]' },
    { name: 'Photography', icon: '📸', count: 75, color: 'from-[#002B5C] to-[#0A4D8C]' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefaf0] to-[#fff9ef] font-sans">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FFD700]/30 via-[#FFA500]/50 to-[#FFD700]/30 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; filter: blur(20px); }
          50% { opacity: 1; filter: blur(30px); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-on-scroll {
          opacity: 0;
        }
        
        .animate-on-scroll.animate-in {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-on-scroll[data-animation="slide-left"].animate-in {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-on-scroll[data-animation="slide-right"].animate-in {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-on-scroll[data-animation="scale"].animate-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animate-on-scroll[data-animation="rotate"].animate-in {
          animation: rotateIn 0.8s ease-out forwards;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        }
        
        .grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, #bfdbfe 1px, transparent 0);
          background-size: 40px 40px;
        }
        
        .dot-pattern {
          background-image: radial-gradient(#93c5fd 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>

      {/* Hero Section with BlueWave International prominently displayed */}
      <section className="relative pt-10 pb-20 px-4 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFD700]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#002B5C]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* Company Name Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] rounded-full px-6 py-2 mb-6 animate-on-scroll shadow-lg">
              <Ship className="w-5 h-5 text-[#FFD700]" />
              <span className="text-sm font-semibold text-white">BlueWave International</span>
            </div>

            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-4 py-2 mb-6 animate-on-scroll ml-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
              </span>
              <span className="text-sm font-medium text-[#002B5C]">Our Specialized Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002B5C] mb-6 animate-on-scroll">
              Cruise Career{' '}
              <span className="bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#FFD700] bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Discover your perfect role at sea with our comprehensive recruitment services
              across all major cruise ship departments.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-on-scroll"
                data-animation="scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#FFD700]/20 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.gradient} text-white flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-500`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#002B5C] mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#fefaf0] via-white to-[#fff9ef]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4 animate-on-scroll">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#FFD700] bg-clip-text text-transparent">
                Service Categories
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
              Find your perfect match across our specialized recruitment services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative animate-on-scroll"
                data-animation="slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                />
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#FFD700]/20 overflow-hidden group-hover:-translate-y-2">
                  {/* Service Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#002B5C] text-sm font-semibold rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] text-sm font-bold rounded-full">
                        {service.openings}+ Openings
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-[#FFD700]">{service.icon}</span>
                        <span className="text-white text-sm font-medium">{service.salary}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#002B5C] mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                    {/* Positions */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#002B5C] mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#FFD700]" />
                        Available Positions
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.positions.slice(0, 4).map((position, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200"
                          >
                            {position}
                          </span>
                        ))}
                        {service.positions.length > 4 && (
                          <span className="px-2 py-1 bg-[#FFD700]/10 text-[#002B5C] text-xs rounded-full font-medium">
                            +{service.positions.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#002B5C] mb-2 flex items-center gap-2">
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to='/jobs'
                      className="w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:from-[#FFD700] group-hover:to-[#FFA500] group-hover:text-[#002B5C]"
                    >
                      Explore Jobs
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-4 py-2 mb-6 animate-on-scroll">
              <Anchor className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium text-white">Your Journey to Sea</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-on-scroll">
              Our{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Recruitment Process
              </span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto animate-on-scroll">
              From application to boarding, we guide you through every step of your cruise career journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FFD700]"></div>

            <div className="space-y-12 lg:space-y-0">
              {recruitmentProcess.map((process, index) => (
                <div
                  key={process.step}
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center animate-on-scroll`}
                  data-animation="slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                    <div className="group cursor-pointer">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
                        <span className="text-[#002B5C] font-bold text-lg">{process.step}</span>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        <div className="bg-white rounded-full px-3 py-1 text-xs font-semibold text-[#002B5C] shadow-lg">
                          Step {process.step}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-5/12 mt-16 lg:mt-0 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center text-[#002B5C]">
                          {process.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{process.title}</h3>
                      </div>
                      <p className="text-white/80">{process.description}</p>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4 animate-on-scroll">
              Cruise Ship{' '}
              <span className="bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#FFD700] bg-clip-text text-transparent">
                Departments
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
              Explore opportunities across all major departments of a modern cruise ship.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group relative animate-on-scroll"
                data-animation="scale"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                />
                <div className="relative bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-[#FFD700]/20 group-hover:-translate-y-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{dept.icon}</div>
                  <h3 className="font-bold text-[#002B5C] mb-1">{dept.name}</h3>
                  <div className="text-sm text-gray-500">{dept.count} positions</div>
                  <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%23FFD700' d='M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
            backgroundSize: '1200px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll" data-animation="scale">
            <div className="flex justify-center mb-6">
              <Ship className="w-16 h-16 text-[#FFD700] animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Cruise Career?
              </span>
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who found their dream job at sea with Bluewave International.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal()}
                className="px-8 py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;