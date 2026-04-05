import React, { useState } from 'react';
import {
  Ship, Anchor, Mail, Phone, MapPin, Globe,
  Send, CheckCircle, Users, TrendingUp, Calendar,
  Star, Award, ArrowRight, MessageCircle,
  Building2, Clock, Shield, Sparkles, Compass
} from 'lucide-react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    interestedIn: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeField, setActiveField] = useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        interestedIn: '',
        message: ''
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const trainingPrograms = [
    "Select program interest",
    "🏨 Hospitality Management",
    "⚓ Maritime Safety & Operations",
    "🎭 Cruise Entertainment & Activities",
    "🍳 Culinary Arts & Galley Operations",
    "🤝 Guest Services & Relations",
    "⚙️ Deck & Engine Operations",
    "🏥 Medical Services at Sea",
    "🎨 Youth Activities Coordination",
    "💆 Spa & Wellness Services"
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '5,000+', label: 'Graduates Placed', color: 'from-[#002B5C] to-[#0A4D8C]' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '98%', label: 'Placement Rate', color: 'from-[#002B5C] to-[#0A4D8C]' },
    { icon: <Globe className="w-6 h-6" />, value: '50+', label: 'Cruise Partners', color: 'from-[#002B5C] to-[#0A4D8C]' },
    { icon: <Calendar className="w-6 h-6" />, value: '15+', label: 'Years Excellence', color: 'from-[#002B5C] to-[#0A4D8C]' },
  ];

  const faqItems = [
    {
      question: "What should I bring for my consultation?",
      answer: "Bring your resume, identification documents, and any relevant certifications. Our career advisors will guide you through the process."
    },
    {
      question: "How long does the consultation take?",
      answer: "Initial consultations typically take 45-60 minutes to understand your goals and provide personalized career advice."
    },
    {
      question: "Do I need to schedule an appointment?",
      answer: "Yes, we recommend scheduling an appointment to ensure dedicated time with our career advisors."
    },
    {
      question: "Can I bring a family member or friend?",
      answer: "Absolutely! We encourage you to bring a support person to help you make informed decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefaf0] to-[#fff9ef] font-sans">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FFD700]/30 via-[#FFA500]/50 to-[#FFD700]/30 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 10s ease-in-out infinite;
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
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden pt-10 pb-15 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-5 opacity-10 animate-float">
          <Ship className="w-24 h-24 text-[#FFD700]" />
        </div>
        <div className="absolute bottom-10 right-5 opacity-10 animate-float-reverse">
          <Anchor className="w-20 h-20 text-[#FFD700]" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-5 py-2 mb-6 animate-on-scroll shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD700]"></span>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">SINCE 2010 • GLOBAL EXCELLENCE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-on-scroll leading-tight">
              Start Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                  Cruise Career Journey
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M2 4C86 1 213 1 298 4" stroke="url(#hero-gradient)" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
                  <defs>
                    <linearGradient id="hero-gradient" x1="2" y1="4" x2="298" y2="4" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD700" />
                      <stop offset="0.5" stopColor="#FFA500" />
                      <stop offset="1" stopColor="#FFD700" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-4 animate-on-scroll">
              Contact BlueWave International
            </p>
            <p className="text-lg text-white/70 mb-6 animate-on-scroll">
              Your Gateway to Cruise Ship Careers Worldwide
            </p>

            <div className="glass-effect rounded-2xl p-6 inline-block max-w-2xl animate-on-scroll border border-white/20">
              <p className="text-white/90 text-lg flex items-center gap-2 justify-center">
                <Sparkles className="w-5 h-5 text-[#FFD700]" />
                Speak with our career advisors today and take the first step towards an exciting career at sea
                <Sparkles className="w-5 h-5 text-[#FFD700]" />
              </p>
            </div>
          </div>
        </div>


      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-on-scroll"
                data-animation="scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl shimmer-effect"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#FFD700]/20 text-center hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#002B5C] mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                  <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Enhanced */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-[#FFD700]/20 animate-on-scroll hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] mb-4">
                  <MessageCircle className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C]">
                  Get in Touch{' '}
                  <span className="text-gradient">With Us</span>
                </h2>
                <p className="text-gray-500 mt-2">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002B5C] mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting BlueWave International. Our career advisor will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition duration-300 hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-[#002B5C] font-medium mb-2 text-sm">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        required
                        className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${activeField === 'name'
                          ? 'border-[#FFD700] shadow-lg ring-2 ring-[#FFD700]/20'
                          : 'border-gray-200 hover:border-[#FFD700]/50'
                          } focus:outline-none`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-[#002B5C] font-medium mb-2 text-sm">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        required
                        className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${activeField === 'email'
                          ? 'border-[#FFD700] shadow-lg ring-2 ring-[#FFD700]/20'
                          : 'border-gray-200 hover:border-[#FFD700]/50'
                          } focus:outline-none`}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#002B5C] font-medium mb-2 text-sm">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-[#002B5C] font-medium mb-2 text-sm">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none transition-all duration-300"
                        placeholder="Enter your country"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#002B5C] font-medium mb-2 text-sm">Interested Training Program *</label>
                    <select
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none transition-all duration-300 bg-white"
                    >
                      {trainingPrograms.map((program, index) => (
                        <option key={index} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#002B5C] font-medium mb-2 text-sm">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-[#FFD700]/50 focus:border-[#FFD700] focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your cruise career aspirations and any questions you may have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3.5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white hover:shadow-xl transform hover:scale-105 hover:from-[#FFD700] hover:to-[#FFA500] hover:text-[#002B5C]'
                      }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message to Career Advisor
                      </>
                    )}
                  </button>
                  <p className="text-gray-400 text-xs text-center flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" />
                    We'll respond within 24 hours. Your information is secure and confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Cards - Enhanced */}
            <div className="space-y-5">
              <div className="text-center mb-6 animate-on-scroll">
                <h2 className="text-2xl font-bold text-[#002B5C]">Our Offices</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mt-2 rounded-full"></div>
              </div>

              {/* Email Card 1 */}
              <div className="group bg-white rounded-2xl shadow-lg p-5 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-on-scroll">
                <div className="flex justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <Mail className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-sm font-semibold text-[#002B5C] group-hover:text-[#FFD700] transition">hr@bluewavecruise.in</p>
                  </div>
                </div>
              </div>


              {/* Email Card 2 */}
              <div className="group bg-white rounded-2xl shadow-lg p-5 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-on-scroll">
                <div className="flex justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <Mail className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-sm font-semibold text-[#002B5C] group-hover:text-[#FFD700] transition">support@bluewavecruise.in</p>
                  </div>
                </div>
              </div>


              {/* Phone Card */}
              <div className="group bg-white rounded-2xl shadow-lg p-5 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-on-scroll">
                <div className="flex justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <Phone className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Contact No.</p>
                    <a href="tel:+918076281152" className="text-sm font-semibold text-[#002B5C] group-hover:text-[#FFD700] transition">
                      +91-80762 81152
                    </a>
                  </div>
                </div>
              </div>

              {/* Noida Office Card */}
              <div className="group bg-white rounded-2xl shadow-lg p-5 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-on-scroll">
                <div className="flex justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#002B5C] group-hover:text-[#FFD700] transition"> Office Address</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">Plot no 6, 6th floor Office no 607,
                      Knowledge Park IV, Jaitpur Baishpur, Greater Noida, Uttar Pradesh 201310</p>
                    <div className="flex justify-center gap-1 mt-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>Mon-Sat: 10:00 AM-06:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section - Enhanced */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#fefaf0] via-white to-[#fff9ef]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] mb-4">
              <Star className="w-8 h-8 text-[#FFD700]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-3">
              Common{' '}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-gray-600">Find quick answers to frequently asked questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md p-6 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-on-scroll"
                data-animation="slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-[#002B5C] mb-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] font-bold">?</span>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm pl-11 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-on-scroll">
            <a
              href="/faq"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white font-semibold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Contactus;