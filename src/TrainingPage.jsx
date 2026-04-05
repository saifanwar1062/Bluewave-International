import React, { useState } from 'react';
import { useApply } from './ApplyContext';
import { 
  Ship, Anchor, Sparkles, Star, Users, 
  TrendingUp, Calendar, Award, CheckCircle,
  ArrowRight, Clock, BookOpen, Globe,
  Shield, HeartHandshake, Target, Rocket
} from 'lucide-react';

const TrainingPage = () => {
    const [activeCourse, setActiveCourse] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const { openModal } = useApply();

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

    // Training course data
    const trainingCourses = [
        {
            id: 1,
            title: "Hospitality Management",
            duration: "4 Weeks",
            level: "Beginner to Advanced",
            description: "Master the art of luxury hospitality service for cruise line guests. Learn dining etiquette, customer service excellence, and premium treatment protocols.",
            modules: ["Dining Service Excellence", "Guest Relations", "Cabin Stewarding", "International Etiquette"],
            icon: <Star className="w-7 h-7" />,
            outcomes: ["Guest Service Manager", "Dining Room Manager", "Guest Relations Officer"]
        },
        {
            id: 2,
            title: "Maritime Safety",
            duration: "3 Weeks",
            level: "Intermediate",
            description: "Essential safety training for all cruise staff. Learn emergency response, lifeboat operations, fire safety, and maritime regulations.",
            modules: ["Fire Safety & Prevention", "Lifeboat Operations", "First Aid & Medical Response", "Crisis Management"],
            icon: <Shield className="w-7 h-7" />,
            outcomes: ["Safety Officer", "Emergency Response Leader", "Maritime Safety Specialist"]
        },
        {
            id: 3,
            title: "Entertainment & Activities",
            duration: "5 Weeks",
            level: "Beginner to Advanced",
            description: "Become a star entertainer on the high seas. Develop skills in hosting, performing, organizing activities, and engaging diverse audiences.",
            modules: ["Hosting & MC Skills", "Performance Arts", "Activity Planning", "Multicultural Engagement"],
            icon: <Sparkles className="w-7 h-7" />,
            outcomes: ["Cruise Director", "Entertainment Host", "Activity Coordinator"]
        },
        {
            id: 4,
            title: "Culinary Arts",
            duration: "6 Weeks",
            level: "Advanced",
            description: "Professional culinary training for cruise ship kitchens. Learn large-scale food preparation, international cuisine, and galley safety standards.",
            modules: ["International Cuisine", "Galley Safety", "Large-Scale Preparation", "Food Presentation"],
            icon: <BookOpen className="w-7 h-7" />,
            outcomes: ["Executive Chef", "Sous Chef", "Galley Manager"]
        }
    ];

    // Testimonials data
    const testimonials = [
        {
            name: "Maria Rodriguez",
            role: "Head Waitress, Royal Caribbean",
            comment: "The hospitality training at BlueWave International completely transformed my career. I went from a junior server to managing my own dining team in just 18 months!",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "James Chen",
            role: "Entertainment Director, Norwegian",
            comment: "The comprehensive entertainment program gave me the confidence and skills to host shows for thousands of guests.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Sophie Williams",
            role: "Safety Officer, Carnival",
            comment: "The maritime safety course exceeded my expectations. The hands-on training prepared me perfectly for my role onboard.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        }
    ];

    // FAQ data
    const faqs = [
        {
            question: "Are your certifications recognized by major cruise lines?",
            answer: "Yes, BlueWave International is accredited by the International Maritime Organization and our certifications are recognized by all major cruise lines."
        },
        {
            question: "How long does the training program last?",
            answer: "Our programs range from 3 to 8 weeks depending on the specialization. Most core programs are completed within 4-6 weeks."
        },
        {
            question: "Do you offer job placement assistance?",
            answer: "Absolutely! We have partnerships with over 50 cruise lines and a 98% job placement rate within 3 months."
        },
        {
            question: "What are the prerequisites for enrollment?",
            answer: "Most programs require a high school diploma, basic English proficiency, and medical fitness certification."
        }
    ];

    const stats = [
        { icon: <Users className="w-6 h-6" />, value: '5,000+', label: 'Graduates' },
        { icon: <TrendingUp className="w-6 h-6" />, value: '98%', label: 'Placement' },
        { icon: <Globe className="w-6 h-6" />, value: '50+', label: 'Partners' },
        { icon: <Calendar className="w-6 h-6" />, value: '15+', label: 'Years' },
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
                
                .animate-float {
                    animation: float 8s ease-in-out infinite;
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
                
                .animate-on-scroll[data-animation="slide-left"].animate-in {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                
                .animate-on-scroll[data-animation="slide-right"].animate-in {
                    animation: slideInRight 0.8s ease-out forwards;
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
            `}</style>

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-12 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]">
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="absolute top-20 left-10 opacity-20 animate-float">
                    <Ship className="w-16 h-16 text-[#FFD700]" />
                </div>
                <div className="absolute bottom-20 right-10 opacity-20 animate-float animation-delay-1000">
                    <Anchor className="w-12 h-12 text-[#FFD700]" />
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 animate-on-scroll shadow-lg border border-white/20">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD700]"></span>
                            </span>
                            <span className="text-xs font-semibold text-white tracking-wide">SINCE 2010 • GLOBAL EXCELLENCE</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-on-scroll leading-tight">
                            Launch Your{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                                    Cruise Career
                                </span>
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-white/90 mb-3 animate-on-scroll">
                            Professional Training & Certification from BlueWave International
                        </p>

                        <p className="text-base text-white/70 mb-6 animate-on-scroll max-w-2xl mx-auto">
                            Master the skills needed to work on world-class cruise lines. 
                            Industry-recognized certifications with 98% job placement rate.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
                            <button
                                onClick={() => openModal()}
                                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-[#002B5C] font-semibold py-2.5 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Apply Now</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mt-6 pt-5 border-t border-white/20 animate-on-scroll">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-[#FFD700]" />
                                <span className="text-white/80 text-sm">Industry Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#FFD700]" />
                                <span className="text-white/80 text-sm">5000+ Graduates</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-[#FFD700]" />
                                <span className="text-white/80 text-sm">50+ Partners</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-[#FFD700]" />
                                <span className="text-white/80 text-sm">98% Placement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Stats Section */}
            <section className="py-10 px-4">
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

            {/* Training Programs Section */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-3 animate-on-scroll">
                            Our{' '}
                            <span className="text-gradient">Training Programs</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
                            Comprehensive, industry-focused training designed to prepare you for a successful career at sea.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {trainingCourses.map((course, index) => (
                            <div
                                key={course.id}
                                className={`group relative animate-on-scroll cursor-pointer transition-all duration-300 ${activeCourse === index ? 'scale-[1.02]' : ''}`}
                                data-animation="slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => setActiveCourse(index)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                                    style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                                />
                                <div className={`relative bg-white rounded-xl shadow hover:shadow-lg transition-all duration-500 border overflow-hidden group-hover:-translate-y-1 ${activeCourse === index ? 'border-[#FFD700] shadow-md' : 'border-[#FFD700]/20'}`}>
                                    <div className="h-1.5 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C]"></div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white flex items-center justify-center">
                                                {course.icon}
                                            </div>
                                            <span className="bg-[#FFD700]/20 text-[#002B5C] text-xs font-semibold px-2.5 py-1 rounded-full">
                                                {course.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#002B5C] mb-2">{course.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                                        <div className="mb-3">
                                            <span className="text-xs font-medium text-gray-500">Level: </span>
                                            <span className="text-xs font-semibold text-[#FFD700]">{course.level}</span>
                                        </div>
                                        <button 
                                            className={`w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200 ${activeCourse === index 
                                                ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C]' 
                                                : 'bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white group-hover:from-[#FFD700] group-hover:to-[#FFA500] group-hover:text-[#002B5C]'}`}
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Course Details */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-[#FFD700]/20 animate-on-scroll">
                        <div className="text-center mb-5">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white font-bold text-xl mb-3 shadow">
                                {activeCourse + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-[#002B5C] mb-1">{trainingCourses[activeCourse].title}</h3>
                            <p className="text-gray-500 text-sm">{trainingCourses[activeCourse].duration} • {trainingCourses[activeCourse].level}</p>
                        </div>
                        <p className="text-gray-700 mb-6 text-center">{trainingCourses[activeCourse].description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-lg text-[#002B5C] mb-3 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-[#FFD700]" />
                                    What You'll Learn:
                                </h4>
                                <ul className="space-y-2">
                                    {trainingCourses[activeCourse].modules.map((module, i) => (
                                        <li key={i} className="flex items-start group">
                                            <CheckCircle className="w-4 h-4 text-[#FFD700] mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{module}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-[#002B5C]/5 to-[#0A4D8C]/5 rounded-lg p-5 border border-[#FFD700]/20">
                                <h4 className="font-bold text-lg text-[#002B5C] mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-[#FFD700]" />
                                    Career Outcomes:
                                </h4>
                                <ul className="space-y-2">
                                    {trainingCourses[activeCourse].outcomes.map((outcome, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                                            <span className="text-gray-700">{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5 pt-4 border-t border-[#FFD700]/20">
                                    <button
                                        onClick={() => openModal()}
                                        className="mt-2 w-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white font-semibold py-2.5 rounded-lg text-sm hover:shadow transition duration-300 hover:from-[#FFD700] hover:to-[#FFA500] hover:text-[#002B5C]"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 px-4 bg-gradient-to-br from-[#fefaf0] via-white to-[#fff9ef]">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-3 animate-on-scroll">
                            Why Choose{' '}
                            <span className="text-gradient">BlueWave International?</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
                            We provide the most comprehensive cruise industry training with a proven track record.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <TrendingUp className="w-7 h-7" />, value: '98%', label: 'Job Placement Rate', desc: '98% job placement rate within 3 months of course completion.' },
                            { icon: <Globe className="w-7 h-7" />, value: '50+', label: 'Industry Partners', desc: 'Partnerships with over 50 major cruise lines worldwide.' },
                            { icon: <Award className="w-7 h-7" />, value: '15+', label: 'Years of Excellence', desc: '15+ years of experience in cruise industry training.' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative animate-on-scroll"
                                data-animation="slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                                    style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                                />
                                <div className="relative bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-500 border border-[#FFD700]/20 text-center group-hover:-translate-y-1">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center text-white mx-auto mb-4 transform group-hover:scale-110 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div className="text-4xl font-bold text-[#FFD700] mb-2">{item.value}</div>
                                    <h3 className="text-lg font-bold text-[#002B5C] mb-2">{item.label}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-3 animate-on-scroll">
                            Success{' '}
                            <span className="text-gradient">Stories</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
                            Hear from our graduates building successful careers on cruise ships.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="group relative animate-on-scroll"
                                data-animation="slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                                    style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                                />
                                <div className="relative bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-500 border border-[#FFD700]/20 group-hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FFD700]/30 mr-4"
                                        />
                                        <div>
                                            <h4 className="font-bold text-[#002B5C]">{testimonial.name}</h4>
                                            <p className="text-[#FFD700] font-medium text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 inline text-[#FFD700] fill-[#FFD700]" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic text-sm">"{testimonial.comment.substring(0, 120)}..."</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 px-4 bg-gradient-to-br from-[#fefaf0] via-white to-[#fff9ef]">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-3 animate-on-scroll">
                            Frequently Asked{' '}
                            <span className="text-gradient">Questions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
                            Find answers to common questions about our training programs.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group relative animate-on-scroll"
                                data-animation="slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"
                                    style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                                />
                                <div className="relative bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFD700]/20">
                                    <h3 className="font-bold text-[#002B5C] mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center text-sm">?</span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600 text-sm pl-8">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <div className="animate-on-scroll" data-animation="scale">
                        <div className="flex justify-center mb-5">
                            <Ship className="w-16 h-16 text-[#FFD700] animate-pulse" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start Your{' '}
                            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                                Cruise Career Journey
                            </span>
                        </h2>
                        <p className="text-white/90 mb-6 max-w-md mx-auto">
                            Join thousands of successful graduates working on cruise ships around the world.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => openModal()}
                                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] font-semibold py-3 px-8 rounded-full shadow transition duration-300 transform hover:scale-105"
                            >
                                Apply Now
                            </button>
                        </div>
                        <p className="mt-4 text-white/70 text-sm">Limited seats available for our next training cohort</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrainingPage;