import React, { useState } from 'react';
import {
    Shield,
    Lock,
    Eye,
    FileText,
    CheckCircle,
    AlertCircle,
    Download,
    Printer,
    ChevronRight,
    Globe,
    Mail,
    Phone,
    Clock,
    BookOpen,
    Users,
    Database,
    Cookie,
    Settings,
    ArrowLeft,
    Sparkles,
    Ship,
    Anchor,
    HeartHandshake,
    TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const lastUpdated = "March 30, 2024";

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

    const tocItems = [
        { id: "introduction", title: "Introduction", icon: <BookOpen className="w-4 h-4" /> },
        { id: "information-collect", title: "Information We Collect", icon: <Database className="w-4 h-4" /> },
        { id: "how-use", title: "How We Use Your Information", icon: <Settings className="w-4 h-4" /> },
        { id: "sharing", title: "Information Sharing", icon: <Users className="w-4 h-4" /> },
        { id: "cookies", title: "Cookies & Tracking", icon: <Cookie className="w-4 h-4" /> },
        { id: "security", title: "Data Security", icon: <Lock className="w-4 h-4" /> },
        { id: "rights", title: "Your Rights", icon: <CheckCircle className="w-4 h-4" /> },
        { id: "contact", title: "Contact Us", icon: <Mail className="w-4 h-4" /> },
    ];

    const keyPoints = [
        { icon: <Shield className="w-5 h-5" />, text: "We never sell your personal data" },
        { icon: <Lock className="w-5 h-5" />, text: "Bank-level encryption for all data" },
        { icon: <Eye className="w-5 h-5" />, text: "You control your privacy settings" },
        { icon: <Clock className="w-5 h-5" />, text: "24/7 data protection monitoring" },
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
                
                @keyframes shimmer {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
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

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8] overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="absolute top-10 left-5 opacity-20 animate-float">
                    <Ship className="w-24 h-24 text-[#FFD700]" />
                </div>
                <div className="absolute bottom-10 right-5 opacity-20 animate-float animation-delay-1000">
                    <Anchor className="w-20 h-20 text-[#FFD700]" />
                </div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

                <div className="relative container mx-auto px-4 py-20 md:py-28">
                    <div className="max-w-4xl mx-auto text-center">


                        <div className="inline-flex p-4 bg-white/10 backdrop-blur-xl rounded-2xl mb-6 border border-white/20 mx-auto animate-on-scroll">
                            <Shield className="w-14 h-14 text-[#FFD700]" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-on-scroll">
                            Privacy{' '}
                            <span className="text-gradient">Policy</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto animate-on-scroll">
                            Your privacy is important to us. Learn how we protect and manage your data with BlueWave International.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 animate-on-scroll">
                            <div className="px-4 py-2 glass-effect rounded-full border border-white/20">
                                <span className="text-white/90 text-sm">
                                    Last Updated: {lastUpdated}
                                </span>
                            </div>
                            <div className="px-4 py-2 glass-effect rounded-full border border-white/20">
                                <span className="text-white/90 text-sm flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    GDPR Compliant
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="#fefaf0" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Table of Contents - Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-xl p-6 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300">
                            <h2 className="text-lg font-bold text-[#002B5C] mb-4 flex items-center gap-2 justify-center lg:justify-start">
                                <FileText className="w-5 h-5 text-[#FFD700]" />
                                Table of Contents
                            </h2>

                            <nav className="space-y-2">
                                {tocItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700]/10 hover:to-[#FFA500]/10 transition-all group justify-center lg:justify-start"
                                    >
                                        <span className="text-[#FFD700] group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </span>
                                        <span className="text-sm font-medium">{item.title}</span>
                                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
                                    </a>
                                ))}
                            </nav>

                            {/* Key Points Summary */}
                            <div className="mt-6 pt-6 border-t border-[#FFD700]/20">
                                <h3 className="text-sm font-semibold text-[#002B5C] mb-3 text-center lg:text-left">Key Points</h3>
                                <div className="space-y-3">
                                    {keyPoints.map((point, index) => (
                                        <div key={index} className="flex items-start gap-2 justify-center lg:justify-start">
                                            <span className="text-[#FFD700] flex-shrink-0 mt-0.5">
                                                {point.icon}
                                            </span>
                                            <span className="text-xs text-gray-600 text-center lg:text-left">{point.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Quick Action */}
                            <div className="mt-6 pt-6 border-t border-[#FFD700]/20">
                                <Link
                                    to="/contact"
                                    className="block w-full px-4 py-3 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white rounded-xl text-center font-medium hover:shadow-xl hover:shadow-[#FFD700]/20 transition-all hover:scale-105"
                                >
                                    Contact Privacy Team
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Privacy Policy Content */}
                    <div className="lg:w-3/4 space-y-8">
                        {/* Introduction Section */}
                        <section id="introduction" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <BookOpen className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Introduction
                            </h2>

                            <div className="prose prose-lg max-w-none text-gray-600 space-y-4 text-center lg:text-left">
                                <p className="leading-relaxed">
                                    Welcome to BlueWave International's Privacy Policy. We are committed to protecting your personal information and your right to privacy. This policy describes how we collect, use, and safeguard your information when you visit our website or use our services.
                                </p>

                                <div className="bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 p-6 rounded-xl border border-[#FFD700]/20">
                                    <h3 className="font-semibold text-[#002B5C] mb-2 flex items-center gap-2 justify-center lg:justify-start">
                                        <HeartHandshake className="w-4 h-4 text-[#FFD700]" />
                                        Our Commitment
                                    </h3>
                                    <p className="text-gray-600 text-center lg:text-left">
                                        We adhere to international data protection regulations including GDPR, CCPA, and other applicable privacy laws. Your trust is our priority at BlueWave International.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Information We Collect Section */}
                        <section id="information-collect" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Database className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Information We Collect
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#002B5C] text-lg text-center lg:text-left">Personal Information</h3>
                                    <ul className="space-y-3">
                                        {['Full name and contact details', 'Email address and phone number', 'Resume and work history', 'Educational qualifications', 'Professional certifications'].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 justify-center lg:justify-start group">
                                                <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#002B5C] text-lg text-center lg:text-left">Technical Information</h3>
                                    <ul className="space-y-3">
                                        {['IP address and device information', 'Browser type and settings', 'Cookies and tracking data', 'Website usage patterns', 'Location information'].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 justify-center lg:justify-start group">
                                                <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Information */}
                        <section id="how-use" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Settings className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                How We Use Your Information
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Process your job applications',
                                    'Match you with suitable employers',
                                    'Improve our services',
                                    'Send important updates',
                                    'Verify your qualifications',
                                    'Legal compliance'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-xl justify-center lg:justify-start group hover:scale-105 transition-transform">
                                        <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                                        <span className="text-gray-700 text-center lg:text-left">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Information Sharing */}
                        <section id="sharing" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Users className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Information Sharing
                            </h2>

                            <p className="text-gray-600 mb-6 text-center lg:text-left">
                                We share your information only in these specific circumstances:
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: 'With Employers', desc: 'When you apply for positions through our platform' },
                                    { title: 'Service Providers', desc: 'Trusted partners who assist in our operations' },
                                    { title: 'Legal Requirements', desc: 'When required by law or to protect rights' },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4 p-4 border border-[#FFD700]/20 rounded-xl hover:shadow-md transition-shadow justify-center lg:justify-start group hover:bg-gradient-to-r hover:from-[#FFD700]/5 hover:to-[#FFA500]/5">
                                        <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#FFD700] font-bold">{index + 1}</span>
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <h3 className="font-semibold text-[#002B5C]">{item.title}</h3>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Cookies & Tracking */}
                        <section id="cookies" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Cookie className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Cookies & Tracking
                            </h2>

                            <p className="text-gray-600 mb-6 text-center lg:text-left">
                                We use cookies and similar technologies to enhance your browsing experience:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10">
                                            <th className="p-3 text-left text-[#002B5C]">Cookie Type</th>
                                            <th className="p-3 text-left text-[#002B5C]">Purpose</th>
                                            <th className="p-3 text-left text-[#002B5C]">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#FFD700]/20">
                                        {[
                                            { type: 'Essential', purpose: 'Website functionality', duration: 'Session' },
                                            { type: 'Analytics', purpose: 'Usage analysis', duration: '1 year' },
                                            { type: 'Marketing', purpose: 'Personalized ads', duration: '30 days' },
                                            { type: 'Preferences', purpose: 'Remember settings', duration: '6 months' },
                                        ].map((row, index) => (
                                            <tr key={index} className="hover:bg-gradient-to-r hover:from-[#FFD700]/5 hover:to-[#FFA500]/5 transition-colors">
                                                <td className="p-3 font-medium text-[#002B5C]">{row.type}</td>
                                                <td className="p-3 text-gray-600">{row.purpose}</td>
                                                <td className="p-3 text-gray-500">{row.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 p-4 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-xl">
                                <p className="text-sm text-gray-600 text-center lg:text-left">
                                    You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
                                </p>
                            </div>
                        </section>

                        {/* Data Security */}
                        <section id="security" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Lock className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Data Security
                            </h2>

                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                {[
                                    { icon: <Shield className="w-6 h-6" />, title: 'Encryption', desc: '256-bit SSL encryption' },
                                    { icon: <Lock className="w-6 h-6" />, title: 'Firewalls', desc: 'Advanced protection' },
                                    { icon: <Eye className="w-6 h-6" />, title: 'Monitoring', desc: '24/7 security surveillance' },
                                ].map((item, index) => (
                                    <div key={index} className="p-4 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-xl text-center group hover:scale-105 transition-transform">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-[#FFD700] group-hover:to-[#FFA500] group-hover:text-[#002B5C] transition-all">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-semibold text-[#002B5C]">{item.title}</h3>
                                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                                <p className="text-sm text-gray-700 flex items-center gap-2 justify-center lg:justify-start">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    Your data is protected with industry-standard security measures and regular audits.
                                </p>
                            </div>
                        </section>

                        {/* Your Rights */}
                        <section id="rights" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <CheckCircle className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Your Rights
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Right to access your data',
                                    'Right to rectification',
                                    'Right to erasure',
                                    'Right to restrict processing',
                                    'Right to data portability',
                                    'Right to object',
                                ].map((right, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 border border-[#FFD700]/20 rounded-lg justify-center lg:justify-start group hover:bg-gradient-to-r hover:from-[#FFD700]/5 hover:to-[#FFA500]/5 transition-all">
                                        <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 text-center lg:text-left">{right}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-xl">
                                <p className="text-gray-600 text-center lg:text-left">
                                    To exercise any of these rights, please contact our privacy team at{' '}
                                    <a href="mailto:hr@bluewavecruise.in" className="text-[#FFD700] font-medium hover:underline">
                                        hr@bluewavecruise.in
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Contact Us */}
                        <section id="contact" className="bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] rounded-2xl shadow-xl p-6 md:p-8 text-white scroll-mt-24 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-white/10 backdrop-blur-xl rounded-xl">
                                    <Mail className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Contact Us
                            </h2>

                            <p className="text-white/90 mb-6 text-center lg:text-left">
                                Have questions about our privacy practices? Reach out to our dedicated privacy team at BlueWave International:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 justify-center lg:justify-start group">
                                        <div className="p-2 bg-white/10 backdrop-blur-xl rounded-lg group-hover:bg-[#FFD700]/20 transition-all">
                                            <Mail className="w-5 h-5 text-[#FFD700]" />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <p className="text-sm text-white/70">Email</p>
                                            <a href="mailto:hr@bluewavecruise.in" className="font-medium hover:text-[#FFD700] transition">
                                                hr@bluewavecruise.in
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 justify-center lg:justify-start group">
                                        <div className="p-2 bg-white/10 backdrop-blur-xl rounded-lg group-hover:bg-[#FFD700]/20 transition-all">
                                            <Phone className="w-5 h-5 text-[#FFD700]" />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <p className="text-sm text-white/70">Phone</p>
                                            <a href="tel:+918796144831" className="font-medium hover:text-[#FFD700] transition">
                                                +91-8796144831
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 justify-center lg:justify-start group">
                                        <div className="p-2 bg-white/10 backdrop-blur-xl rounded-lg group-hover:bg-[#FFD700]/20 transition-all">
                                            <Globe className="w-5 h-5 text-[#FFD700]" />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <p className="text-sm text-white/70">Office Address</p>
                                            <p className="font-medium">
                                                Plot no 6, 6th floor Office no 607, Knowledge Park IV, Jaitpur Baishpur, Greater Noida, Uttar Pradesh 201310
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 justify-center lg:justify-start group">
                                        <div className="p-2 bg-white/10 backdrop-blur-xl rounded-lg group-hover:bg-[#FFD700]/20 transition-all">
                                            <Clock className="w-5 h-5 text-[#FFD700]" />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <p className="text-sm text-white/70">Response Time</p>
                                            <p className="font-medium">
                                                Within 24-48 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/20 text-center">
                                <p className="text-white/70 text-sm flex items-center justify-center gap-2">
                                    <HeartHandshake className="w-4 h-4" />
                                    BlueWave International - Your Trusted Partner in Cruise Careers
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;