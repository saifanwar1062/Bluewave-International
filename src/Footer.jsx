import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Globe, ChevronRight, Send, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import footerLogo from "./assets/Bluewave_international.png";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Job', path: '/jobs' },
        { name: 'Training', path: '/training' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const services = [
        'Food & Beverage',
        'Bar Services',
        'House Keeping',
        'Cruise Staff',
        'Deck & Engine',
    ];

    const socialLinks = [
        { icon: <Facebook size={18} />, path: '#', color: 'hover:bg-[#1877f2]' },
        { icon: <Twitter size={18} />, path: '#', color: 'hover:bg-[#1da1f2]' },
        { icon: <Linkedin size={18} />, path: '#', color: 'hover:bg-[#0a66c2]' },
        { icon: <Instagram size={18} />, path: '#', color: 'hover:bg-[#e4405f]' },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001B3D] via-[#0A4D8C] to-[#FFD700] opacity-95"></div>

            {/* Wave Divider at Top */}
            <div className="relative">
                <svg className="absolute top-0 w-full h-12 text-white" preserveAspectRatio="none" viewBox="0 0 1440 120" style={{ transform: 'rotate(180deg)' }}>
                    <path fill="currentColor" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>

            <div className="relative container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

                    {/* Brand Section - 4 columns */}
                    <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                               
                            </div>
                            {/* Logo Wrapper with Smoky White Background */}
                            <div className="inline-block bg-white/30 backdrop-blur-sm p-3 rounded-xl shadow-md">
                                <img
                                    src={footerLogo}
                                    alt="Insha Umrah Logo"
                                    className="h-16 sm:h-20 md:h-25 mx-auto sm:mx-0 w-auto object-contain transition-all duration-300 hover:opacity-90"
                                />
                            </div>
                        </Link>
                        <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base max-w-md">
                            Connecting top talent with leading global companies since 2010. Premium recruitment solutions for the modern workforce with 100% placement guarantee.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-3 mb-8 justify-center md:justify-start">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.path}
                                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                      
                    </div>

                    {/* Quick Links - 2 columns */}
                    <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[#FFD700] font-bold text-lg mb-6 relative inline-block">
                            Quick Links
                            <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-full h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent mt-2"></div>
                        </h4>
                        <ul className="space-y-3 w-full">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 hover:text-white transition-all duration-300 flex items-center justify-center md:justify-start space-x-2 group text-sm"
                                    >
                                        <ChevronRight size={14} className="text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services - 3 columns */}
                    <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[#FFD700] font-bold text-lg mb-6 relative inline-block">
                            Our Services
                            <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-full h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent mt-2"></div>
                        </h4>
                        <ul className="space-y-3 w-full">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-white/70 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start space-x-2 group cursor-pointer text-sm">
                                        <ChevronRight size={14} className="text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                                        <span>{service}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - 3 columns */}
                    <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[#FFD700] font-bold text-lg mb-6 relative inline-block">
                            Get In Touch
                            <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-full h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent mt-2"></div>
                        </h4>
                        <ul className="space-y-4 w-full">
                            <li className="flex items-center justify-center md:justify-start space-x-3 text-white/70 hover:text-white transition-colors group">
                                <MapPin size={18} className="text-[#FFD700] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">Plot no 6, 6th floor Office no 607, Knowledge Park IV, Jaitpur Baishpur, Greater Noida, Uttar Pradesh 201310</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3 text-white/70 hover:text-white transition-colors group">
                                <Phone size={18} className="text-[#FFD700] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+1 (800) 258-3928</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3 text-white/70 hover:text-white transition-colors group">
                                <Mail size={18} className="text-[#FFD700] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">hr@bluewavecruise.in</span>
                            </li>
                        </ul>

                        {/* Working Hours */}
                        <div className="mt-6 pt-6 border-t border-white/30 w-full">
                            <p className="text-white text-xs text-center md:text-left">
                                <span className="text-[#FFD700] font-semibold">Working Hours:</span> Mon-Sat : 10:00 AM - 06:00 PM
                            </p>
                        </div>
                    </div>
                </div>

           

                {/* Bottom Bar */}
                <div className="pt-8 mr-10 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-xs md:text-sm text-white">
                        &copy; {currentYear} Blue Wave International. All rights reserved. | Designed with ❤️ for global talent
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
                        <Link to="/privacy-policy" className="text-white hover:text-black transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-and-conditions" className="text-white hover:text-black transition-colors">
                            Terms of Service
                        </Link>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;