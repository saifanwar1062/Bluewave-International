// JobDescription.jsx - Individual Job Description Page
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Ship, MapPin, Clock, DollarSign,
  Briefcase, Users, Calendar, CheckCircle, Award,
  FileText, Mail, Phone, Share2, Bookmark,
  ChevronRight, Star, Globe, Shield, Anchor,
  HeartHandshake, Target, Rocket, Sparkles
} from 'lucide-react';
import { useApply } from './ApplyContext';

// Job data
const jobData = {
  1: {
    id: 1,
    title: 'Butcher',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Various Cruise Ships',
    salary: '$2,800 - $3,500/month',
    experience: '2+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'As a Butcher on our luxury cruise ships, you will be responsible for preparing, cutting, and storing high-quality meat products for all onboard dining venues. You will work closely with the culinary team to ensure proper meat handling, portion control, and inventory management.',
    responsibilities: [
      'Prepare and cut various meats according to specifications',
      'Maintain proper storage and rotation of meat products',
      'Ensure compliance with food safety and sanitation standards',
      'Assist in inventory control and ordering',
      'Collaborate with chefs for menu requirements',
      'Maintain butcher equipment and work area',
      'Follow all maritime safety protocols'
    ],
    requirements: [
      'Certified Butcher qualification or equivalent',
      'Minimum 2 years experience in commercial butchery',
      'Knowledge of meat cutting techniques and portion control',
      'Food Safety Handler Certification',
      'Ability to work in fast-paced environment',
      'Physical stamina for standing long hours',
      'Basic knowledge of inventory management'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Accommodation and meals provided onboard',
      'Medical insurance coverage',
      'Paid training and certification',
      'Career advancement opportunities',
      'Travel to exotic destinations',
      'End-of-contract bonus'
    ],
    cruiseLine: 'Multiple Luxury Cruise Partners',
    vesselType: 'Various sizes (2,000 - 6,000 passengers)',
    itinerary: 'Worldwide destinations',
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-15',
    positions: 4,
    urgent: true,
    featured: true
  },
  2: {
    id: 2,
    title: 'Carpenter',
    department: 'Deck / Marine department',
    category: 'Marine',
    location: 'Worldwide Cruises',
    salary: '$3,200 - $4,000/month',
    experience: '3+ years',
    type: 'Full-time',
    contract: '8-10 months',
    description: 'Join our marine operations team as a Carpenter, responsible for maintaining and repairing all wooden structures, furniture, and interior elements on our cruise ships. Your expertise will ensure our vessels maintain their premium appearance and structural integrity.',
    responsibilities: [
      'Repair and maintain wooden structures throughout the ship',
      'Construct and install custom woodwork',
      'Perform routine inspections of woodwork',
      'Work with other marine departments on projects',
      'Maintain tools and equipment',
      'Follow safety protocols for marine carpentry',
      'Document maintenance and repairs'
    ],
    requirements: [
      'Carpentry certification or equivalent experience',
      '3+ years experience in marine or commercial carpentry',
      'Knowledge of marine-grade materials',
      'Ability to read blueprints and schematics',
      'Safety training certification',
      'Physical fitness for shipboard work',
      'Experience with power tools and equipment'
    ],
    benefits: [
      'Comprehensive benefits package',
      'Onboard accommodation and meals',
      'Travel to global destinations',
      'Professional development opportunities',
      'Competitive salary with overtime pay',
      'Health and wellness programs',
      'Retirement savings plan'
    ],
    cruiseLine: 'Various International Cruise Lines',
    vesselType: 'Modern Cruise Ships',
    itinerary: 'Global itineraries',
    postedDate: '2024-01-14',
    applicationDeadline: '2024-02-14',
    positions: 2,
    urgent: false,
    featured: false
  },
  3: {
    id: 3,
    title: 'Executive Chef',
    department: 'Culinary',
    category: 'Food & Beverage',
    location: 'Luxury Cruise Ships',
    salary: '$6,000 - $8,500/month',
    experience: '8+ years',
    type: 'Full-time',
    contract: '6-8 months',
    description: 'Lead our culinary team as Executive Chef, responsible for menu planning, kitchen operations, and maintaining 5-star dining experiences across multiple venues.',
    responsibilities: [
      'Oversee all kitchen operations',
      'Develop innovative menus',
      'Manage kitchen staff training',
      'Control food costs and inventory',
      'Ensure quality standards',
      'Coordinate with other departments'
    ],
    requirements: [
      'Executive Chef certification',
      '8+ years fine dining experience',
      'International cuisine expertise',
      'Leadership and management skills',
      'HACCP certification',
      'Budget management experience'
    ],
    benefits: [
      'Executive level compensation',
      'Private accommodation',
      'Performance bonuses',
      'Global recognition',
      'Career advancement'
    ],
    cruiseLine: 'Premium Cruise Lines',
    vesselType: 'Luxury Vessels',
    itinerary: 'Exclusive routes',
    postedDate: '2024-01-13',
    applicationDeadline: '2024-02-13',
    positions: 1,
    urgent: true,
    featured: true
  }
};

const JobDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useApply();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [saved, setSaved] = useState(false);

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

  const job = jobData[id] || jobData[1];

  const handleApply = () => {
    openModal(job.title);
  };

  const similarJobs = Object.values(jobData).filter(j => j.id !== job.id).slice(0, 3);

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
      `}</style>

      {/* Back Button */}
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/jobs')}
          className="group flex items-center gap-2 text-[#002B5C] hover:text-[#FFD700] transition-colors duration-300 mb-6 animate-on-scroll"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Jobs</span>
        </button>
      </div>

      <div className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Job Header */}
          <div className="bg-white rounded-3xl shadow-xl mb-8 overflow-hidden border border-[#FFD700]/20 animate-on-scroll">
            <div className="bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] px-8 py-4">
              <div className="flex flex-wrap gap-3">
                {job.urgent && (
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full animate-pulse">
                    URGENT HIRING
                  </span>
                )}
                {job.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] text-sm font-semibold rounded-full">
                    FEATURED
                  </span>
                )}
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                  {job.department}
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                  {job.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-4">{job.title}</h1>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5 text-[#FFD700]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="h-5 w-5 text-[#FFD700]" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-5 w-5 text-[#FFD700]" />
                      <span>{job.positions} positions available</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">{job.description}</p>
                </div>

                {/* Apply Box */}
                <div className="lg:w-80">
                  <div className="bg-gradient-to-br from-[#002B5C] to-[#0A4D8C] rounded-2xl p-6 text-white shadow-xl">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Ship className="w-8 h-8 text-[#FFD700]" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
                      <p className="opacity-90 text-sm">{job.positions} positions available</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between pb-2 border-b border-white/20">
                        <span className="opacity-80">Job Type:</span>
                        <span className="font-semibold">{job.type}</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-white/20">
                        <span className="opacity-80">Contract:</span>
                        <span className="font-semibold">{job.contract}</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-white/20">
                        <span className="opacity-80">Experience:</span>
                        <span className="font-semibold">{job.experience}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleApply}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Apply Now
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </button>

                    <button
                      onClick={() => setSaved(!saved)}
                      className="w-full mt-3 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Bookmark className={`w-4 h-4 ${saved ? 'fill-[#FFD700] text-[#FFD700]' : ''}`} />
                      {saved ? 'Saved' : 'Save Job'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Responsibilities */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#FFD700]/20 animate-on-scroll">
                <h2 className="text-2xl font-bold text-[#002B5C] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  Key Responsibilities
                </h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#FFD700]/20 animate-on-scroll">
                <h2 className="text-2xl font-bold text-[#002B5C] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center">
                    <Award className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  Requirements & Qualifications
                </h2>
                <ul className="space-y-4">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-[#FFD700] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#FFD700]/20 animate-on-scroll">
                <h2 className="text-2xl font-bold text-[#002B5C] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] flex items-center justify-center">
                    <Star className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  Benefits & Perks
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#002B5C]/10 to-[#0A4D8C]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-[#FFD700]" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Cruise Line Info */}
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-[#FFD700]/20 animate-on-scroll">
                <h3 className="text-xl font-bold text-[#002B5C] mb-4 flex items-center gap-2">
                  <Ship className="h-5 w-5 text-[#FFD700]" />
                  Cruise Line Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-[#FFD700] mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#002B5C]">{job.cruiseLine}</div>
                      <div className="text-sm text-gray-500">Cruise Partner</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Anchor className="h-5 w-5 text-[#FFD700] mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#002B5C]">{job.vesselType}</div>
                      <div className="text-sm text-gray-500">Vessel Type</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#FFD700] mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#002B5C]">{job.itinerary}</div>
                      <div className="text-sm text-gray-500">Itinerary</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-gradient-to-br from-[#002B5C] to-[#0A4D8C] rounded-3xl p-6 text-white shadow-xl animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#FFD700]" />
                  Application Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Submit Application', desc: 'Complete online form' },
                    { step: '2', title: 'Screening Call', desc: 'Initial interview' },
                    { step: '3', title: 'Final Interview', desc: 'With cruise line HR' },
                    { step: '4', title: 'Offer & Onboarding', desc: 'Join the team' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="font-bold text-[#FFD700]">{step.step}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{step.title}</div>
                        <div className="text-sm opacity-80">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-[#FFD700]/20 animate-on-scroll">
                <h3 className="text-xl font-bold text-[#002B5C] mb-4 flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-[#FFD700]" />
                  Need Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#002B5C]/10 to-[#0A4D8C]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#002B5C]">hr@bluewavecruise.in</div>
                      <div className="text-sm text-gray-500">Email Support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#002B5C]/10 to-[#0A4D8C]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#002B5C]">+1 (888) 123-4567</div>
                      <div className="text-sm text-gray-500">24/7 Support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#002B5C]/10 to-[#0A4D8C]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#002B5C]">100% Verified</div>
                      <div className="text-sm text-gray-500">Genuine Job Opportunity</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Options */}
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-[#FFD700]/20 animate-on-scroll">
                <h3 className="text-xl font-bold text-[#002B5C] mb-4 flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-[#FFD700]" />
                  Share This Job
                </h3>
                <div className="flex gap-3">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Email'].map((platform, idx) => (
                    <button
                      key={idx}
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-[#002B5C] hover:to-[#0A4D8C] flex items-center justify-center transition-all duration-300 group"
                    >
                      <span className="text-gray-600 group-hover:text-[#FFD700] text-sm font-semibold">
                        {platform[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Similar Jobs */}
          {similarJobs.length > 0 && (
            <div className="mt-12 animate-on-scroll">
              <h2 className="text-3xl font-bold text-[#002B5C] mb-8 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-[#FFD700]" />
                Similar Job Opportunities
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarJobs.map((similarJob) => (
                  <div
                    key={similarJob.id}
                    onClick={() => navigate(`/job/${similarJob.id}`)}
                    className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#FFD700]/20 hover:-translate-y-2"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#002B5C] group-hover:text-[#FFD700] transition-colors">
                        {similarJob.title}
                      </h3>
                      {similarJob.urgent && (
                        <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">Urgent</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {similarJob.department}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {similarJob.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <MapPin className="h-3 w-3" />
                      <span>{similarJob.location}</span>
                      <DollarSign className="h-3 w-3 ml-2" />
                      <span>{similarJob.salary}</span>
                    </div>
                    <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-200 group-hover:from-[#FFD700] group-hover:to-[#FFA500] group-hover:text-[#002B5C]">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;