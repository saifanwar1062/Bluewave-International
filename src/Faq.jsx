import React, { useState } from 'react';
import { 
  Ship, Anchor, Search, ChevronDown, ChevronUp, 
  Phone, Mail, MapPin, MessageCircle, Shield, 
  Users, TrendingUp, Calendar, Star, Award,
  BookOpen, Compass, Coffee, Crown, Globe
} from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ categories and questions
  const faqCategories = [
    {
      id: 1,
      title: "Training Programs",
      icon: <BookOpen className="w-7 h-7" />,
      gradient: "from-[#002B5C] to-[#0A4D8C]",
      questions: [
        {
          question: "What types of cruise job training programs do you offer?",
          answer: "We offer comprehensive training programs for various cruise ship roles including Hospitality Management, Maritime Safety, Entertainment & Activities, Culinary Arts, Cruise Operations, and Guest Services. Each program is designed to provide hands-on experience and industry-specific knowledge."
        },
        {
          question: "How long are your training programs?",
          answer: "Our programs range from 4 to 12 weeks depending on the specialization. Basic hospitality training is 4 weeks, while advanced culinary and maritime safety programs can extend up to 12 weeks. We also offer flexible part-time options for certain courses."
        },
        {
          question: "Are your training certifications internationally recognized?",
          answer: "Yes! BlueWave International is accredited by the International Maritime Organization (IMO) and our certifications are recognized by all major cruise lines including Royal Caribbean, Carnival, Norwegian, MSC, Princess Cruises, and Disney Cruise Line."
        },
        {
          question: "Do I need previous experience to enroll in your programs?",
          answer: "No previous cruise experience is required for most of our entry-level programs. However, some advanced courses may require basic hospitality or service industry experience. We assess each applicant individually to ensure they're placed in the right program."
        }
      ]
    },
    {
      id: 2,
      title: "Admissions & Requirements",
      icon: <Award className="w-7 h-7" />,
      gradient: "from-[#002B5C] to-[#0A4D8C]",
      questions: [
        {
          question: "What are the admission requirements?",
          answer: "Basic requirements include: minimum age of 18 years, high school diploma or equivalent, valid passport, medical fitness certificate, basic English proficiency (B1 level or higher), and clean background check. Specific programs may have additional requirements."
        },
        {
          question: "What language requirements are needed?",
          answer: "English is the working language on most international cruise ships. We require IELTS 5.5 or equivalent English proficiency. We also offer optional language enhancement courses for those who need to improve their language skills before placement."
        },
        {
          question: "Are there medical requirements for cruise ship employment?",
          answer: "Yes, all cruise staff must pass a comprehensive medical examination including drug screening, vaccinations (hepatitis A & B, typhoid), and proof of physical fitness. We help guide students through these requirements during training."
        },
        {
          question: "How do I apply for a training program?",
          answer: "You can apply online through our website, visit our campus for a consultation, or contact our admissions team. The process includes: application form submission, interview (virtual or in-person), document verification, and program selection with our career counselor."
        }
      ]
    },
    {
      id: 3,
      title: "Job Placement",
      icon: <Compass className="w-7 h-7" />,
      gradient: "from-[#002B5C] to-[#0A4D8C]",
      questions: [
        {
          question: "Do you guarantee job placement after training?",
          answer: "While we don't guarantee employment, we have a 98% placement rate for our graduates. Our career services team works closely with over 50 cruise line partners to match qualified candidates with suitable positions."
        },
        {
          question: "How long does it take to get placed on a cruise ship after training?",
          answer: "Most graduates receive job offers within 2-3 months of completing their training. The timeline depends on factors like cruise line hiring cycles, visa processing times, and medical clearance completion."
        },
        {
          question: "What types of positions can I expect after graduation?",
          answer: "Graduates typically start in entry-level positions such as waitstaff, cabin steward, deckhand, entertainment host, or galley assistant. With experience, many advance to supervisory roles like head waiter, chief steward, entertainment director, or department manager."
        },
        {
          question: "Do you provide interview preparation assistance?",
          answer: "Yes! Our comprehensive career support includes mock interviews, resume building, professional photo sessions, and cruise line-specific interview preparation. We also conduct recruitment days where cruise line recruiters interview candidates on campus."
        }
      ]
    },
    {
      id: 4,
      title: "Fees & Financial Aid",
      icon: <Crown className="w-7 h-7" />,
      gradient: "from-[#002B5C] to-[#0A4D8C]",
      questions: [
        {
          question: "What is the cost of your training programs?",
          answer: "Program fees range from $2,500 for basic hospitality training to $6,500 for advanced culinary programs. This includes tuition, training materials, uniforms, certification fees, and career placement services. Accommodation and meals are additional."
        },
        {
          question: "Do you offer payment plans or financial assistance?",
          answer: "Yes, we offer flexible payment plans and have partnerships with financial institutions for education loans. We also offer early bird discounts, group enrollment discounts, and merit-based scholarships for outstanding candidates."
        },
        {
          question: "What is included in the program fee?",
          answer: "The fee includes: comprehensive training, industry-recognized certifications, training materials and manuals, uniform (for applicable programs), career counseling, job placement assistance, interview preparation, and lifetime alumni support."
        },
        {
          question: "Is accommodation provided during training?",
          answer: "We offer on-campus accommodation at an additional cost. Our residential facilities include furnished rooms, WiFi, recreational areas, and meal plans. We can also assist students in finding off-campus housing if preferred."
        }
      ]
    }
  ];

  // General FAQs
  const generalFAQs = [
    {
      question: "How is life working on a cruise ship?",
      answer: "Cruise ship life is dynamic and multicultural. You'll work in a fast-paced environment, meet people from around the world, travel to exotic destinations, and enjoy onboard amenities during your time off. Contracts typically last 6-9 months followed by 2-3 months of vacation."
    },
    {
      question: "What salary can I expect as a cruise ship employee?",
      answer: "Entry-level positions start at $1,200-$2,000 per month with room and board provided. With tips and bonuses, many earn significantly more. Supervisory roles can earn $2,500-$5,000 monthly. Positions vary by cruise line, itinerary, and experience level."
    },
    {
      question: "What documents do I need to work on a cruise ship?",
      answer: "Essential documents include: valid passport (with at least 6 months validity), STCW certification (we provide this in our training), seafarer's medical certificate, C1/D visa (for US-based ships), and any role-specific certifications."
    },
    {
      question: "Can I choose which cruise line I work for?",
      answer: "While we consider your preferences, final placement depends on cruise line requirements and availability. Our career counselors match candidates with cruise lines based on skills, personality, language abilities, and career goals to ensure the best fit."
    },
    {
      question: "Is there an age limit for cruise ship employment?",
      answer: "Most cruise lines prefer candidates between 21-35 years for entry-level positions, but there's no strict upper limit for experienced professionals. Some specialized roles may have different age requirements."
    },
    {
      question: "What is the typical contract duration?",
      answer: "Contracts range from 4-9 months depending on the cruise line and position. After completing a contract, you typically get 2-3 months of unpaid vacation before starting your next contract if you choose to continue."
    }
  ];

  // Stats data
  const stats = [
    { icon: <Shield className="w-6 h-6" />, value: '98%', label: 'Placement Rate' },
    { icon: <Users className="w-6 h-6" />, value: '5,000+', label: 'Graduates' },
    { icon: <Globe className="w-6 h-6" />, value: '50+', label: 'Partners' },
    { icon: <Calendar className="w-6 h-6" />, value: '15+', label: 'Years Excellence' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefaf0] to-[#fff9ef] font-sans">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FFD700]/30 via-[#FFA500]/50 to-[#FFD700]/30 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <style jsx>{`
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
        
        .animate-on-scroll {
          opacity: 0;
        }
        
        .animate-on-scroll.animate-in {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-on-scroll[data-animation="scale"].animate-in {
          animation: scaleIn 0.8s ease-out forwards;
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
        
        .scroll-mt-8 {
          scroll-margin-top: 2rem;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="absolute top-20 left-10 opacity-20">
          <Ship className="w-16 h-16 text-[#FFD700] animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Anchor className="w-12 h-12 text-[#FFD700] animate-pulse" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-4 py-2 mb-6 animate-on-scroll">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD700]"></span>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">SINCE 2010 • GLOBAL EXCELLENCE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-on-scroll">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-2 animate-on-scroll">
              Find answers to common questions about cruise career training and placement
            </p>
            <p className="text-base text-white/70 animate-on-scroll">
              with BlueWave International
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="relative animate-on-scroll">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FFD700]" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl shadow-lg border border-[#FFD700]/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent text-black placeholder-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-on-scroll"
                data-animation="scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                  style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                />
                <div className="relative bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-500 border border-[#FFD700]/20 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#002B5C] mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#002B5C] mb-10 animate-on-scroll">
            Browse by{' '}
            <span className="text-gradient">Category</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {faqCategories.map((category, index) => (
              <div 
                key={category.id} 
                className="group relative animate-on-scroll cursor-pointer"
                data-animation="scale"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => document.getElementById(`category-${category.id}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                  style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                />
                <div className="relative bg-white rounded-xl shadow-lg p-6 border border-[#FFD700]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mx-auto mb-4 transform group-hover:scale-110 transition-all duration-500`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#002B5C] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {category.questions.length} questions
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Category-wise FAQs */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.id} id={`category-${category.id}`} className="mb-16 scroll-mt-8">
              <div className="text-center mb-8 animate-on-scroll">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#002B5C]">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                {category.questions.map((faq, index) => {
                  const faqIndex = categoryIndex * 10 + index;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-md border border-[#FFD700]/20 overflow-hidden animate-on-scroll">
                      <button
                        className="w-full text-left p-5 focus:outline-none"
                        onClick={() => toggleFAQ(faqIndex)}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-base md:text-lg font-semibold text-[#002B5C] pr-8">
                            {faq.question}
                          </h4>
                          {activeIndex === faqIndex ? (
                            <ChevronUp className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                          )}
                        </div>
                        <div 
                          className={`mt-3 overflow-hidden transition-all duration-300 ${activeIndex === faqIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-gray-600 bg-gradient-to-br from-[#002B5C]/5 to-[#0A4D8C]/5 rounded-lg p-4 text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* General FAQs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#002B5C] mb-8 text-center animate-on-scroll">
              General Questions About{' '}
              <span className="text-gradient">Cruise Ship Careers</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {generalFAQs.map((faq, index) => {
                const faqIndex = 100 + index;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-md border border-[#FFD700]/20 overflow-hidden animate-on-scroll">
                    <button
                      className="w-full text-left p-5 focus:outline-none"
                      onClick={() => toggleFAQ(faqIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-base md:text-lg font-semibold text-[#002B5C] pr-8">
                          {faq.question}
                        </h4>
                        {activeIndex === faqIndex ? (
                          <ChevronUp className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                        )}
                      </div>
                      <div 
                        className={`mt-3 overflow-hidden transition-all duration-300 ${activeIndex === faqIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-gray-600 bg-gradient-to-br from-[#002B5C]/5 to-[#0A4D8C]/5 rounded-lg p-4 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#fefaf0] via-white to-[#fff9ef]">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 animate-on-scroll">
              <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
                Still Have{' '}
                <span className="text-gradient">Questions?</span>
              </h2>
              <p className="text-gray-600">
                Our support team is here to help you with any additional questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-[#FFD700]/20 animate-on-scroll">
                <h3 className="text-xl font-bold text-[#002B5C] mb-6 text-center">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-center gap-4 bg-gradient-to-r from-[#002B5C]/5 to-[#0A4D8C]/5 rounded-lg p-4 hover:shadow-md transition duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002B5C]">Call Us</h4>
                      <p className="text-gray-700">+91-8796144831</p>
                      <p className="text-gray-500 text-sm">Mon-Sat: 10:00 AM-06:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-4 bg-gradient-to-r from-[#002B5C]/5 to-[#0A4D8C]/5 rounded-lg p-4 hover:shadow-md transition duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002B5C]">Email Us</h4>
                      <p className="text-gray-700">hr@bluewavecruise.in</p>
                      <p className="text-gray-500 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-4 bg-gradient-to-r from-[#002B5C]/5 to-[#0A4D8C]/5 rounded-lg p-4 hover:shadow-md transition duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002B5C]">Office Address</h4>
                      <p className="text-gray-700">Plot no 6, 6th floor Office no 607, Knowledge Park IV, Jaitpur Baishpur, Greater Noida, Uttar Pradesh 201310</p>
                     
                    </div>
                  </div>
                  
                 
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#002B5C] to-[#0A4D8C] rounded-xl shadow-lg p-6 text-white animate-on-scroll">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Ask a Question
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Question</label>
                    <textarea 
                      rows="4"
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                      placeholder="Type your question here..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] font-bold py-3 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Submit Question
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;