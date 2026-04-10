import React, { useState } from 'react';
import {
    Shield,
    FileText,
    CheckCircle,
    AlertCircle,
    ChevronRight,
    Globe,
    Mail,
    Phone,
    Clock,
    Scale,
    Gavel,
    Handshake,
    FileCheck,
    Ban,
    CreditCard,
    UserCheck,
    Briefcase,
    AlertTriangle,
    FileSignature,
    Ship,
    Anchor,
    HeartHandshake,
    TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
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
        { id: "acceptance", title: "Acceptance of Terms", icon: <FileCheck className="w-4 h-4" /> },
        { id: "services", title: "Services Description", icon: <Briefcase className="w-4 h-4" /> },
        { id: "user-obligations", title: "User Obligations", icon: <UserCheck className="w-4 h-4" /> },
        { id: "fees", title: "Fees & Payments", icon: <CreditCard className="w-4 h-4" /> },
        { id: "prohibited", title: "Prohibited Activities", icon: <Ban className="w-4 h-4" /> },
        { id: "intellectual", title: "Intellectual Property", icon: <FileText className="w-4 h-4" /> },
        { id: "liability", title: "Limitation of Liability", icon: <Scale className="w-4 h-4" /> },
        { id: "termination", title: "Termination", icon: <Gavel className="w-4 h-4" /> },
        { id: "governing", title: "Governing Law", icon: <Globe className="w-4 h-4" /> },
        { id: "contact", title: "Contact Us", icon: <Mail className="w-4 h-4" /> },
    ];

    const keyPoints = [
        { icon: <Handshake className="w-5 h-5" />, text: "Clear terms for both parties" },
        { icon: <Shield className="w-5 h-5" />, text: "Your rights are protected" },
        { icon: <FileSignature className="w-5 h-5" />, text: "Transparent agreements" },
        { icon: <Clock className="w-5 h-5" />, text: "24/7 support available" },
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
                            <Scale className="w-14 h-14 text-[#FFD700]" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-on-scroll">
                            Terms &{' '}
                            <span className="text-gradient">Conditions</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto animate-on-scroll">
                            Please read these terms carefully before using our services. By using our platform, you agree to these terms with BlueWave International.
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
                                    Legally Compliant
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
                                <h3 className="text-sm font-semibold text-[#002B5C] mb-3 text-center lg:text-left">Key Highlights</h3>
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

                            {/* Important Notice */}
                            <div className="mt-6 pt-6 border-t border-[#FFD700]/20">
                                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                                    <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                                        <h4 className="text-sm font-semibold text-amber-800">Important</h4>
                                    </div>
                                    <p className="text-xs text-amber-700 text-center lg:text-left">
                                        These terms form a legally binding agreement between you and BlueWave International.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Quick Action */}
                            <div className="mt-6 pt-6 border-t border-[#FFD700]/20">
                                <Link
                                    to="/contact"
                                    className="block w-full px-4 py-3 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white rounded-xl text-center font-medium hover:shadow-xl hover:shadow-[#FFD700]/20 transition-all hover:scale-105"
                                >
                                    Contact Legal Team
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Terms Content */}
                    <div className="lg:w-3/4 space-y-8">
                        {/* Acceptance of Terms */}
                        <section id="acceptance" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <FileCheck className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Acceptance of Terms
                            </h2>

                            <div className="prose prose-lg max-w-none text-gray-600 space-y-4 text-center lg:text-left">
                                <p className="leading-relaxed">
                                    By accessing or using BlueWave International's services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, you may not access the website or use our services.
                                </p>

                                <div className="bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 p-6 rounded-xl border border-[#FFD700]/20">
                                    <h3 className="font-semibold text-[#002B5C] mb-2 flex items-center gap-2 justify-center lg:justify-start">
                                        <HeartHandshake className="w-4 h-4 text-[#FFD700]" />
                                        Key Point
                                    </h3>
                                    <p className="text-gray-600 text-center lg:text-left">
                                        These terms apply to all users of the platform, including job seekers, employers, and visitors.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Services Description */}
                        <section id="services" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Services Description
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#002B5C] text-lg text-center lg:text-left">For Job Seekers</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Profile creation and management',
                                            'Job search and application',
                                            'Career resources and guidance',
                                            'Interview scheduling',
                                            'Document verification'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 justify-center lg:justify-start group">
                                                <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#002B5C] text-lg text-center lg:text-left">For Employers</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Job posting and management',
                                            'Candidate search and filtering',
                                            'Recruitment analytics',
                                            'Interview coordination',
                                            'Onboarding support'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 justify-center lg:justify-start group">
                                                <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* User Obligations */}
                        <section id="user-obligations" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <UserCheck className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                User Obligations
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-600 text-center lg:text-left">
                                    As a user of our platform, you agree to:
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        'Provide accurate and complete information',
                                        'Maintain the security of your account',
                                        'Use the platform for lawful purposes only',
                                        'Respect intellectual property rights',
                                        'Not impersonate others',
                                        'Comply with all applicable laws'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-xl group hover:scale-105 transition-transform">
                                            <div className="w-2 h-2 bg-[#FFD700] rounded-full flex-shrink-0"></div>
                                            <span className="text-sm text-gray-700 text-center lg:text-left">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Fees & Payments */}
                        <section id="fees" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <CreditCard className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Fees & Payments
                            </h2>

                            <div className="space-y-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10">
                                                <th className="p-3 text-left text-[#002B5C]">Service Type</th>
                                                <th className="p-3 text-left text-[#002B5C]">Fee Structure</th>
                                                <th className="p-3 text-left text-[#002B5C]">Payment Terms</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#FFD700]/20">
                                            {[
                                                { service: 'Job Seeker - Basic', fee: 'Free', terms: 'No payment required' },
                                                { service: 'Job Seeker - Premium', fee: '$29.99/month', terms: 'Monthly subscription' },
                                                { service: 'Employer - Job Posting', fee: '$199 per post', terms: 'Pay per posting' },
                                                { service: 'Employer - Annual', fee: '$1,999/year', terms: 'Annual subscription' },
                                            ].map((row, index) => (
                                                <tr key={index} className="hover:bg-gradient-to-r hover:from-[#FFD700]/5 hover:to-[#FFA500]/5 transition-colors">
                                                    <td className="p-3 font-medium text-[#002B5C]">{row.service}</td>
                                                    <td className="p-3 text-gray-600">{row.fee}</td>
                                                    <td className="p-3 text-gray-500">{row.terms}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="p-4 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-xl">
                                    <p className="text-sm text-gray-600 text-center lg:text-left">
                                        <span className="font-semibold">Note:</span> All fees are non-refundable unless required by law. We reserve the right to modify our fee structure with 30 days notice.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Prohibited Activities */}
                        <section id="prohibited" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Ban className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Prohibited Activities
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Posting false or misleading information',
                                    'Harassing other users',
                                    'Uploading malicious content',
                                    'Attempting to breach security',
                                    'Using automated scripts or bots',
                                    'Infringing on others\' rights',
                                    'Spamming or unsolicited advertising',
                                    'Impersonating others'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 border border-red-200 rounded-lg bg-red-50/50 group hover:scale-105 transition-transform">
                                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-700 text-center lg:text-left">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Intellectual Property */}
                        <section id="intellectual" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <FileText className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Intellectual Property
                            </h2>

                            <div className="space-y-4 text-center lg:text-left">
                                <p className="text-gray-600">
                                    All content on this platform, including but not limited to:
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        'Logos',
                                        'Trademarks',
                                        'Software',
                                        'Designs',
                                        'Text content',
                                        'Graphics',
                                        'Videos',
                                        'Database rights'
                                    ].map((item, index) => (
                                        <div key={index} className="p-3 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-lg text-center group hover:scale-105 transition-transform">
                                            <span className="text-sm text-[#002B5C] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-500 mt-4">
                                    are the property of BlueWave International or its licensors and are protected by intellectual property laws.
                                </p>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section id="liability" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Scale className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Limitation of Liability
                            </h2>

                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <p className="text-gray-600 text-center lg:text-left">
                                        To the maximum extent permitted by law, BlueWave International shall not be liable for:
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    {[
                                        'Any indirect, incidental, or consequential damages',
                                        'Loss of profits, data, or business opportunities',
                                        'Damages resulting from third-party conduct',
                                        'Issues arising from force majeure events',
                                        'Content accuracy from third-party sources'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 justify-center lg:justify-start group">
                                            <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="text-gray-600 text-center lg:text-left">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Termination */}
                        <section id="termination" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Gavel className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Termination
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3 text-center lg:text-left">
                                    <h3 className="font-semibold text-[#002B5C]">By Users</h3>
                                    <p className="text-gray-600 text-sm">
                                        You may terminate your account at any time by contacting support or through your account settings.
                                    </p>
                                </div>

                                <div className="space-y-3 text-center lg:text-left">
                                    <h3 className="font-semibold text-[#002B5C]">By Company</h3>
                                    <p className="text-gray-600 text-sm">
                                        We reserve the right to suspend or terminate accounts for violations of these terms, with or without notice.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                                <p className="text-sm text-amber-800 text-center lg:text-left">
                                    Upon termination, your right to use the services will immediately cease. Certain provisions of these terms shall survive termination.
                                </p>
                            </div>
                        </section>

                        {/* Governing Law */}
                        <section id="governing" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-mt-24 border border-[#FFD700]/20 hover:shadow-2xl transition-all duration-300 animate-on-scroll">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="p-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl">
                                    <Globe className="w-6 h-6 text-[#FFD700]" />
                                </div>
                                Governing Law
                            </h2>

                            <div className="space-y-4 text-center lg:text-left">
                                <p className="text-gray-600">
                                    These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Florida, without regard to its conflict of law provisions.
                                </p>

                                <div className="p-4 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-xl">
                                    <p className="text-sm text-gray-600">
                                        Any legal disputes arising from these terms shall be resolved in the courts of Miami-Dade County, Florida.
                                    </p>
                                </div>
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
                                Have questions about our terms? Reach out to our legal team at BlueWave International:
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

export default TermsAndConditions;