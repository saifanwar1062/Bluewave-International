import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight,
    Briefcase,
    Award,
    Globe,
    Clock,
    Ship,
    Anchor
} from 'lucide-react';
import RecruitmentProcess from './RecruitmentProcess';
import { useApply } from './ApplyContext';
import Msc from "./assets/msc.jpeg";
import Fred from "./assets/fred.jpeg";
import Norway from "./assets/norweign.jpeg";
import Ocean from "./assets/ocean.jpeg";
import Paradiesh from "./assets/paradise.jpeg";

import Food from "./assets/food.jpeg";
import Bar from "./assets/barservice1.jpeg";
import Housekeeping from "./assets/housekeeping.jpeg";
import CruiseStaff from "./assets/member.jpeg";
import Deck from "./assets/Deck.jpeg";
import Voyages from "./assets/voyages.jpeg";
import { Link } from 'react-router-dom';

// Import your hero video - replace with your actual video file
import HeroVideo from "./assets/Ship-1.mp4";

const Homepage = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef(null);
    const { openModal } = useApply();



    const toggleVideoPlayback = () => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause();
                setIsVideoPlaying(false);
            } else {
                videoRef.current.play();
                setIsVideoPlaying(true);
            }
        }
    };

    // Auto-popup functionality
    useEffect(() => {
        const popupTimer = setTimeout(() => {
            openModal();
        }, 2000);

        return () => {
            clearTimeout(popupTimer);
        };
    }, []);

    const features = [
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Premium Job Placements",
            description: "Access to top cruise lines worldwide with competitive salaries"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Certified Training",
            description: "Industry-recognized certifications for various cruise positions"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Opportunities",
            description: "Work with international cruise lines across 7 continents"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Round-the-clock assistance during your employment journey"
        }
    ];

    const cruiseLines = [
        { name: "Ocean Caribbean", logo: Ocean },
        { name: "Carnival Cruise", logo: Fred },
        { name: "MSC Cruises", logo: Msc },
        { name: "Norwegian", logo: Norway },
        { name: "Disney Cruise", logo: Paradiesh },
        { name: "Voyages Cruises", logo: Voyages }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fefaf0] to-[#fff9ef]">
            {/* Hero Section with Video Background */}
            <section className="relative h-[600px] md:h-[650px] lg:h-[550px] overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    {!videoError ? (
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={() => setVideoError(true)}
                        >
                            <source src={HeroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C]"></div>
                    )}

                    {/* Gradient Overlay with royal blue and golden */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/80 via-[#0A4D8C]/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 via-transparent to-[#FFA500]/10" />

                </div>



                {/* Hero Content */}
                <div className="relative container mx-auto px-4 h-full flex items-center justify-center z-10">
                    <div className="max-w-4xl text-center text-white">
                        <div className="flex justify-center space-x-3 mb-6">
                            <div className="relative">
                                <Ship className="w-12 h-12 md:w-16 md:h-16 text-[#FFD700] animate-pulse" />
                                <div className="absolute inset-0 bg-[#FFD700]/20 blur-xl rounded-full"></div>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                            Turn Your Dreams into
                            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                                Reality at Sea
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
                            Join the world's leading cruise lines with Blue Wave International.
                            Your journey to an extraordinary maritime career starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                to="/jobs"
                                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-2 border-white hover:from-[#FFA500] hover:to-[#FFD700] text-[#002B5C] px-6 py-2 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 transition-all hover:scale-105 shadow-lg shadow-[#FFD700]/30"
                            >
                                <span>Explore Jobs</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button
                                onClick={() => openModal()}
                                className="bg-white/10 backdrop-blur-sm border-2 border-[#FFD700] hover:bg-[#FFD700]/20 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with golden accents */}
            <section className="py-3 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">5000+</div>
                            <div className="text-white/90">Jobs Placed</div>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">50+</div>
                            <div className="text-white/90">Cruise Partners</div>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">98%</div>
                            <div className="text-white/90">Success Rate</div>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">30+</div>
                            <div className="text-white/90">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section with golden accents */}
            <section className="py-20 bg-gradient-to-b from-[#fefaf0] to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center space-x-2 mb-4">
                            <Anchor className="w-8 h-8 text-[#FFD700]" />
                            
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-4">
                            Why Choose <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Blue Wave International</span>?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We provide comprehensive support throughout your cruise career journey
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#FFD700]/20 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#002B5C] to-[#0A4D8C] flex items-center justify-center text-white mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-full bg-[#FFD700]/20 blur-md group-hover:blur-xl transition-all duration-300"></div>
                                        <div className="relative z-10">{feature.icon}</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#002B5C] mb-3 relative z-10 text-center">{feature.title}</h3>
                                <p className="text-gray-600 relative z-10 text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Categories with golden accents */}
            <section className="py-20 bg-gradient-to-b from-[#f8f5ea] to-[#fefaf0]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-4">
                            Explore Cruise Job <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Departments</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Discover specialized career opportunities across all cruise ship departments
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Food & Beverage Service */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-[#FFD700]/20">
                            <div className="h-48 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${Food})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent flex items-end justify-center p-6">
                                        <h3 className="text-2xl font-bold text-white text-center">Food & Beverage Service</h3>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-3 py-1 rounded-full text-xs font-bold text-[#002B5C] shadow-lg">
                                    50+ Openings
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    F&B manager, Dining room manager, Waiter, Asst. waiter, Café attendant, Room service attendant, Dining room cleaner, Wine steward…
                                </p>
                                <div className="flex justify-center">
                                    <Link to="/jobs" className="text-[#0A4D8C] font-semibold hover:text-[#FFD700] transition-colors flex items-center space-x-2">
                                        <span>View Opportunities</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Bar Department */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-[#FFD700]/20">
                            <div className="h-48 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${Bar})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent flex items-end justify-center p-6">
                                        <h3 className="text-2xl font-bold text-white text-center">Bar Department</h3>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-3 py-1 rounded-full text-xs font-bold text-[#002B5C] shadow-lg">
                                    35+ Openings
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Bar manager, Bartender, Bar waiter, Barboy…
                                </p>
                                <div className="flex justify-center">
                                    <Link to="/jobs" className="text-[#0A4D8C] font-semibold hover:text-[#FFD700] transition-colors flex items-center space-x-2">
                                        <span>View Opportunities</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Housekeeping */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-[#FFD700]/20">
                            <div className="h-48 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${Housekeeping})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent flex items-end justify-center p-6">
                                        <h3 className="text-2xl font-bold text-white text-center">Housekeeping</h3>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-3 py-1 rounded-full text-xs font-bold text-[#002B5C] shadow-lg">
                                    60+ Openings
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Housekeeping Manager, Supervisor, Cabin Attendant, Asst. cabin attendant, HK Cleaner, Linenkeeper, Cabin steward, Bell captain, Laundry man, Tailor…
                                </p>
                                <div className="flex justify-center">
                                    <Link to="/jobs" className="text-[#0A4D8C] font-semibold hover:text-[#FFD700] transition-colors flex items-center space-x-2">
                                        <span>View Opportunities</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pursers */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-[#FFD700]/20">
                            <div className="h-48 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${Deck})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent flex items-end justify-center p-6">
                                        <h3 className="text-2xl font-bold text-white text-center">Pursers</h3>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-3 py-1 rounded-full text-xs font-bold text-[#002B5C] shadow-lg">
                                    25+ Openings
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Guest Relations Officer, Crew Relations Purser, Guest Relations Purser, Shore Excursion Manager…
                                </p>
                                <div className="flex justify-center">
                                    <Link to="/jobs" className="text-[#0A4D8C] font-semibold hover:text-[#FFD700] transition-colors flex items-center space-x-2">
                                        <span>View Opportunities</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Food Production */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-[#FFD700]/20">
                            <div className="h-48 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${Food})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent flex items-end justify-center p-6">
                                        <h3 className="text-2xl font-bold text-white text-center">Food Production</h3>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-3 py-1 rounded-full text-xs font-bold text-[#002B5C] shadow-lg">
                                    45+ Openings
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Executive chef, Sous chef, Cook, Butcher, Baker, Pastry chef, Cold kitchen (all levels), galley utility…
                                </p>
                                <div className="flex justify-center">
                                    <Link to="/jobs" className="text-[#0A4D8C] font-semibold hover:text-[#FFD700] transition-colors flex items-center space-x-2">
                                        <span>View Opportunities</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Cruise Staff */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 border border-[#FFD700]/20">
                            <div className="h-48 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${CruiseStaff})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 to-transparent flex items-end justify-center p-6">
                                        <h3 className="text-2xl font-bold text-white text-center">Cruise Staff</h3>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-3 py-1 rounded-full text-xs font-bold text-[#002B5C] shadow-lg">
                                    30+ Openings
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Administrative staff, Social host/hostess, Youth activities coordinator, Youth Staff…
                                </p>
                                <div className="flex justify-center">
                                    <Link to="/jobs" className="text-[#0A4D8C] font-semibold hover:text-[#FFD700] transition-colors flex items-center space-x-2">
                                        <span>View Opportunities</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RecruitmentProcess />

            {/* Cruise Lines Partners with golden accents */}
            <section className="py-20 bg-gradient-to-b from-white to-[#fefaf0]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-4">
                            Our <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Cruise Line Partners</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We work with the world's most prestigious cruise companies
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {cruiseLines.map((line, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-[#FFD700]/20 flex items-center justify-center hover:scale-105 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="text-center relative z-10">
                                    <img src={line.logo} className="w-28 h-20 object-contain mx-auto mb-3" alt={line.name} />
                                    <div className="font-semibold text-[#002B5C] group-hover:text-[#FFD700] transition-colors">{line.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with golden gradient */}
            <section className="py-20 bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%23FFD700' d='M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat-x',
                        backgroundPosition: 'bottom',
                        backgroundSize: '1200px 40px'
                    }}></div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Embark on Your <span className="text-[#FFD700]">Cruise Career</span>?
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of successful professionals who started their journey with Blue Wave International
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button
                            onClick={() => openModal()}
                            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-[#002B5C] px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-[#FFD700]/30"
                        >
                            Apply Now
                        </button>
                        <Link
                            to="/contact"
                            className="bg-white/10 backdrop-blur-sm border-2 border-white hover:border-[#FFD700] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
            <br/>
        </div>
    );
};

export default Homepage;