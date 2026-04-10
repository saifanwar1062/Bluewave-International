// AboutUs.jsx - Complete Redesign with Cruise Ship Slideshow
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Ship,
  Anchor,
  Users,
  Globe,
  Target,
  Award,
  Shield,
  TrendingUp,
  HeartHandshake,
  Rocket,
  MessageCircle,
  Quote,
  Star,
  Briefcase,
  Crown,
  Zap,
  ChevronRight,
  Building2,
  BadgeCheck,
  HandshakeIcon,
  Lightbulb,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';

// Import hero images (using Unsplash cruise ship images)
const heroImages = [
  'https://i.pinimg.com/736x/36/dd/b0/36ddb00e7905a80c6ac055b2188e76e7.jpg',
  'https://i.pinimg.com/736x/68/43/05/684305ab70c047cbab5fd16e30e68364.jpg',
  'https://i.pinimg.com/736x/3f/5b/a1/3f5ba1793fe9d512a0a45bc47ae771fe.jpg',
  'https://i.pinimg.com/236x/8e/3e/61/8e3e61583e4339cddc358c3625b0ccc7.jpg',
];

const AboutUs = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [visibleTestimonial, setVisibleTestimonial] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(true);
  const slideshowIntervalRef = useRef(null);

  // Stats data with blue/gold theme
  const stats = [
    { value: '5000+', label: 'Successful Placements', icon: <Briefcase className="w-6 h-6" />, color: 'gold' },
    { value: '98%', label: 'Success Rate', icon: <TrendingUp className="w-6 h-6" />, color: 'blue' },
    { value: '50+', label: 'Cruise Partners', icon: <HandshakeIcon className="w-6 h-6" />, color: 'gold' },
    { value: '30+', label: 'Countries', icon: <Globe className="w-6 h-6" />, color: 'blue' },
  ];

  // Journey timeline
  const journey = [
    { year: '2010', title: 'Foundation', desc: 'Bluewave International established', icon: <Rocket className="w-5 h-5" /> },
    { year: '2013', title: 'First Partnership', desc: 'Signed with Royal Caribbean', icon: <HandshakeIcon className="w-5 h-5" /> },
    { year: '2016', title: 'Global Expansion', desc: 'Offices in 3 continents', icon: <Globe className="w-5 h-5" /> },
    { year: '2019', title: 'Digital Platform', desc: 'AI matching launched', icon: <Zap className="w-5 h-5" /> },
    { year: '2022', title: '5000+ Placements', desc: 'Major milestone achieved', icon: <Award className="w-5 h-5" /> },
    { year: '2024', title: 'Industry Leaders', desc: 'Top recruitment partner', icon: <Crown className="w-5 h-5" /> },
  ];

  // Core values
  const values = [
    { title: 'Integrity', desc: 'Honest and transparent in all our dealings', icon: <Shield className="w-8 h-8" /> },
    { title: 'Excellence', desc: 'Striving for the best in every placement', icon: <Target className="w-8 h-8" /> },
    { title: 'Innovation', desc: 'Leveraging technology for better matches', icon: <Lightbulb className="w-8 h-8" /> },
    { title: 'Empathy', desc: 'Understanding your unique journey', icon: <HeartHandshake className="w-8 h-8" /> },
  ];

  // Team members
  const team = [
    { name: 'Elena Rodriguez', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'Michael Chen', role: 'Head of Recruitment', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Priya Sharma', role: 'Client Relations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'David O\'Brien', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
  ];

  // Testimonials
  const testimonials = [
    { name: 'Yasha Katyal', role: 'Director of Operations', company: 'Royal Caribbean', text: 'Bluewave transformed my career. Their expertise and support throughout the process was exceptional. I couldn\'t recommend them more highly.', rating: 5, image: 'https://wagenblastlab.com/wp-content/uploads/2024/07/image001.png' },
    { name: 'Zeeshan Mirza', role: 'Executive Chef', company: 'MSC Cruises', text: 'The team understood exactly what I was looking for and found me the perfect role. Their industry connections are unmatched.', rating: 5, image: 'https://media.licdn.com/dms/image/v2/D4E03AQHF8yhU8Bv3ew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711922411054?e=2147483647&v=beta&t=D_uHraaukB2S50y9XHN7U2vhS69RAaSgn4_sh_vSGks' },
    { name: 'Sophie Williams', role: 'Spa Director', company: 'Norwegian Cruise Line', text: 'From interview prep to relocation, they were with me every step. A truly partner-focused approach.', rating: 5, image: 'https://pbs.twimg.com/profile_images/1597247945849688065/z_aAP00u.jpg' },
  ];

  // Partners
  const partners = [
    'Royal Caribbean', 'MSC Cruises', 'Norwegian Cruise', 'Carnival Cruise',
    'Disney Cruise', 'Celebrity Cruises', 'Princess Cruises', 'Holland America'
  ];

  // Slideshow functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const toggleSlideshow = () => {
    setIsSlideshowPlaying(!isSlideshowPlaying);
  };

  // Auto-rotate slideshow
  useEffect(() => {
    if (isSlideshowPlaying) {
      slideshowIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    } else {
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current);
      }
    }
    return () => {
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current);
      }
    };
  }, [isSlideshowPlaying]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefaf0] to-[#fff9ef]">
      {/* Custom Styles */}
      <style jsx>{`
        .fade-up, .fade-left, .fade-right, .scale-in {
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-up {
          transform: translateY(30px);
        }
        
        .fade-left.show {
          opacity: 1;
          transform: translateX(0);
        }
        
        .fade-left {
          transform: translateX(-30px);
        }
        
        .fade-right.show {
          opacity: 1;
          transform: translateX(0);
        }
        
        .fade-right {
          transform: translateX(30px);
        }
        
        .scale-in.show {
          opacity: 1;
          transform: scale(1);
        }
        
        .scale-in {
          transform: scale(0.95);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section with Image Slideshow */}
      <section className="relative h-[600px] md:h-[650px] lg:h-[700px] overflow-hidden -mt-20">
        {/* Slideshow Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image}
                alt={`Cruise Ship ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Gradient Overlay with royal blue and golden - matching reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/80 via-[#0A4D8C]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 via-transparent to-[#FFA500]/10" />
        </div>



        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 mb-12">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImageIndex(index);
                setIsSlideshowPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'w-8 bg-[#FFD700]'
                : 'bg-white/50 hover:bg-[#FFD700]/50'
                }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
              </span>
              <span className="text-sm text-white/90">Trusted since 2010</span>
            </div>

            {/* Main Heading - Centered */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 fade-up" style={{ transitionDelay: '0.1s' }}>
              Blue Wave
              <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Recruitment
              </span>
            </h1>

            {/* Description - Centered */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 fade-up" style={{ transitionDelay: '0.2s' }}>
              We're not just filling positions — we're building careers, forging partnerships,
              and transforming the cruise hospitality landscape.
            </p>

            {/* CTA Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up" style={{ transitionDelay: '0.3s' }}>
              <Link
                to="/jobs"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-[#002B5C] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-[#FFD700]/30 text-sm sm:text-base"
              >
                Explore Opportunities
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* Who We Are Section - Split Layout */}
      <section className="py-20 bg-gradient-to-b from-[#fefaf0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-left">
              <div className="inline-flex items-center justify-center space-x-2 mb-4">
                <Anchor className="w-8 h-8 text-[#FFD700]" />
              </div>
              <span className="text-sm font-semibold text-[#FFD700] uppercase tracking-wide">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-6">
                Bridging Talent and
                <span className="block text-[#0A4D8C]">Global Opportunities</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Bluewave International is a premier recruitment agency specializing in cruise hospitality.
                With over a decade of experience, we've connected thousands of professionals with their
                dream roles aboard the world's most prestigious cruise lines.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our approach combines deep industry knowledge with innovative technology, ensuring
                the perfect match between candidates and employers. We believe that great careers
                start with great connections.
              </p>

              <div className="flex justify-center flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-sm text-slate-700">Industry Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-sm text-slate-700">Global Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-sm text-slate-700">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative fade-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/fa/56/4b/fa564bf82a379150e7f25b2466d3383d.jpg "
                  alt="Cruise Ship"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/50 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px] border border-[#FFD700]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#002B5C]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#002B5C]">5000+</div>
                    <div className="text-xs text-slate-500">Happy Candidates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Card Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Anchor className="w-8 h-8 text-[#FFD700]" />
            </div>
            <span className="text-sm font-semibold text-[#FFD700] uppercase tracking-wide bg-[#FFD700]/10 px-4 py-2 rounded-full">Our Core Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-4 mb-4">
              What Drives Us
            </h2>
            <p className="text-slate-600">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 fade-up border border-[#FFD700]/20 hover:border-[#FFD700]/40"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#002B5C] to-[#0A4D8C] text-white mb-4 group-hover:scale-110 transition-transform mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#002B5C] mb-2 text-center">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-[#fefaf0] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-[#FFD700] uppercase tracking-wide bg-[#FFD700]/10 px-4 py-2 rounded-full">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-4 mb-4">
              A Decade of Excellence
            </h2>
            <p className="text-slate-600">
              Milestones that shaped our path to becoming industry leaders.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-[#FFD700]/30 hidden md:block"></div>

            <div className="flex flex-col md:flex-row justify-between gap-8 relative">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 text-center relative fade-up"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveYear(index)}
                >
                  {/* Node */}
                  <div className={`
                    w-16 h-16 mx-auto rounded-full flex items-center justify-center relative z-10
                    transition-all duration-300
                    ${activeYear === index ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] scale-110 shadow-lg' : 'bg-white border-2 border-[#FFD700]/50'}
                  `}>
                    <div className={activeYear === index ? 'text-[#002B5C]' : 'text-[#002B5C]'}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Year */}
                  <div className="mt-4">
                    <div className="text-lg font-bold text-[#002B5C]">{item.year}</div>
                    <div className="font-semibold text-[#0A4D8C] mt-1">{item.title}</div>
                    <div className="text-sm text-slate-500 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-[#FFD700] uppercase tracking-wide bg-[#FFD700]/10 px-4 py-2 rounded-full">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-4 mb-4">
              How We Work
            </h2>
            <p className="text-slate-600">
              A streamlined approach to finding your perfect role at sea.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your goals, skills, and preferences.', icon: <MessageCircle className="w-6 h-6" /> },
              { step: '02', title: 'Preparation', desc: 'CV optimization, interview coaching, and skill development.', icon: <Target className="w-6 h-6" /> },
              { step: '03', title: 'Matching', desc: 'AI-powered matching with top cruise line opportunities.', icon: <HandshakeIcon className="w-6 h-6" /> },
              { step: '04', title: 'Placement', desc: 'Offer negotiation and seamless onboarding support.', icon: <Award className="w-6 h-6" /> },
              { step: '05', title: 'Growth', desc: 'Ongoing career support and development opportunities.', icon: <TrendingUp className="w-6 h-6" /> },
            ].map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 fade-up border border-[#FFD700]/20 hover:border-[#FFD700]/40"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002B5C] to-[#0A4D8C] text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="text-[#FFD700] mb-2">{step.icon}</div>
                  <h3 className="text-lg font-bold text-[#002B5C] mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs">{step.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <ChevronRightIcon className="w-5 h-5 text-[#FFD700]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-[#FFD700] uppercase tracking-wide bg-[#FFD700]/20 px-4 py-2 rounded-full">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Success Stories
            </h2>
            <p className="text-white/70">
              Hear from professionals who transformed their careers with us.
            </p>
          </div>

          {/* Testimonial Display */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#FFD700]/30">
              <Quote className="w-12 h-12 text-[#FFD700]/50 mb-6" />
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                "{testimonials[visibleTestimonial].text}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[visibleTestimonial].image}
                    alt={testimonials[visibleTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FFD700]"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonials[visibleTestimonial].name}</div>
                    <div className="text-sm text-[#FFD700]">
                      {testimonials[visibleTestimonial].role} • {testimonials[visibleTestimonial].company}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[visibleTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVisibleTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${visibleTestimonial === index ? 'w-8 bg-[#FFD700]' : 'bg-white/30'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Partners Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#FFD700] uppercase tracking-wide bg-[#FFD700]/10 px-4 py-2 rounded-full">Our Partners</span>
            <h2 className="text-2xl font-bold text-[#002B5C] mt-4">
              Trusted by Leading Cruise Lines
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all scale-in border border-[#FFD700]/20 hover:border-[#FFD700]/40"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#002B5C] to-[#0A4D8C] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div className="text-xs font-medium text-slate-700">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with golden gradient matching reference */}
      <section className="py-20 bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Ship className="w-16 h-16 text-[#FFD700] mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Journey?
            </span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of hospitality professionals who found their dream roles at sea through Bluewave International.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-[#002B5C] px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-[#FFD700]/30"
            >
              Browse Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;