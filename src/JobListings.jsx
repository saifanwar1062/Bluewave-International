// JobsListings.jsx - Main Job Listings Page for Bluewave International
import React, { useState } from 'react';
import {
  Menu, X, Ship, Search, Filter, MapPin, Clock,
  DollarSign, Briefcase, ChevronRight, Star,
  Users, TrendingUp, Calendar, Award, Anchor,
  Sparkles, Rocket, CheckCircle, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApply } from './ApplyContext';

// Job data matching your requirements
const jobListings = [
  {
    id: 1,
    title: 'Butcher',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Various Cruise Ships',
    salary: '$2,800 - $3,500/month',
    experience: '2+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Responsible for preparing, cutting, and storing meat products for ship kitchens.',
    requirements: ['Butcher certification', 'Food safety knowledge', 'Physical stamina'],
    postedDate: '2024-01-15',
    urgent: true,
    featured: true
  },
  {
    id: 2,
    title: 'Carpenter',
    department: 'Deck / Marine department',
    category: 'Marine',
    location: 'Worldwide Cruises',
    salary: '$3,200 - $4,000/month',
    experience: '3+ years',
    type: 'Full-time',
    contract: '8-10 months',
    description: 'Maintain and repair wooden structures and furniture onboard.',
    requirements: ['Carpentry certification', 'Marine experience', 'Safety training'],
    postedDate: '2024-01-14',
    urgent: false,
    featured: false
  },
  {
    id: 3,
    title: 'Chef De Partie',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Luxury Cruise Lines',
    salary: '$3,500 - $4,500/month',
    experience: '4+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Lead a specific section of the kitchen with culinary excellence.',
    requirements: ['Culinary degree', 'Supervisory experience', 'International cuisine'],
    postedDate: '2024-01-13',
    urgent: true,
    featured: true
  },
  {
    id: 4,
    title: 'Chef De Partie Pastry',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Premium Cruise Ships',
    salary: '$3,400 - $4,200/month',
    experience: '3+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Specialize in pastry and dessert preparation for all dining venues.',
    requirements: ['Pastry certification', 'Baking expertise', 'Creative skills'],
    postedDate: '2024-01-12',
    urgent: false,
    featured: false
  },
  {
    id: 5,
    title: 'Hot / Cold Kitchen Cooks',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Various Locations',
    salary: '$2,500 - $3,200/month',
    experience: '1+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Prepare hot and cold food items in high-volume kitchen environment.',
    requirements: ['Cooking certification', 'Fast-paced experience', 'Team player'],
    postedDate: '2024-01-11',
    urgent: true,
    featured: false
  },
  {
    id: 6,
    title: 'Housekeeping Supervisor',
    department: 'Housekeeping',
    category: 'Hospitality',
    location: 'International Waters',
    salary: '$3,000 - $3,800/month',
    experience: '3+ years',
    type: 'Full-time',
    contract: '8-10 months',
    description: 'Oversee housekeeping staff and ensure premium cabin service.',
    requirements: ['Supervisory experience', 'Hospitality background', 'Leadership'],
    postedDate: '2024-01-10',
    urgent: false,
    featured: true
  },
  {
    id: 7,
    title: 'Jr. Sous Chef',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Global Cruise Routes',
    salary: '$3,800 - $4,800/month',
    experience: '5+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Assist Executive Chef in kitchen operations and menu planning.',
    requirements: ['Advanced culinary training', 'Management skills', 'Menu development'],
    postedDate: '2024-01-09',
    urgent: true,
    featured: false
  },
  {
    id: 8,
    title: 'Kitchen Steward',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Various Cruise Ships',
    salary: '$2,200 - $2,800/month',
    experience: 'Entry Level',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Maintain kitchen cleanliness and assist with food preparation.',
    requirements: ['Basic food safety', 'Physical fitness', 'Willingness to learn'],
    postedDate: '2024-01-08',
    urgent: false,
    featured: false
  },
  {
    id: 9,
    title: 'Life Guard / Aquatic Attendant',
    department: 'Housekeeping',
    category: 'Entertainment',
    location: 'Pool Areas',
    salary: '$2,300 - $2,900/month',
    experience: '1+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Ensure pool safety and assist guests with aquatic activities.',
    requirements: ['Lifeguard certification', 'CPR certified', 'Customer service'],
    postedDate: '2024-01-07',
    urgent: true,
    featured: false
  },
  {
    id: 10,
    title: 'Pantry Chef / Garde Manger',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Cruise Ship Kitchens',
    salary: '$3,000 - $3,600/month',
    experience: '2+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Specialize in cold food preparation, salads, and appetizers.',
    requirements: ['Cold kitchen expertise', 'Food presentation', 'Sanitation knowledge'],
    postedDate: '2024-01-06',
    urgent: false,
    featured: false
  },
  {
    id: 11,
    title: 'Pastry Chef',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Fine Dining Venues',
    salary: '$4,000 - $5,000/month',
    experience: '5+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Lead pastry department and create exquisite desserts.',
    requirements: ['Pastry degree', 'Creative design', 'Production management'],
    postedDate: '2024-01-05',
    urgent: true,
    featured: true
  },
  {
    id: 12,
    title: 'Pastry Commis',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Bakery Department',
    salary: '$2,400 - $3,000/month',
    experience: 'Entry Level',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Assist pastry chefs in daily baking and preparation.',
    requirements: ['Baking interest', 'Basic skills', 'Learning attitude'],
    postedDate: '2024-01-04',
    urgent: false,
    featured: false
  },
  {
    id: 13,
    title: 'Pest Control Technician',
    department: 'Housekeeping',
    category: 'Maintenance',
    location: 'Ship-wide',
    salary: '$2,800 - $3,400/month',
    experience: '2+ years',
    type: 'Full-time',
    contract: '8-10 months',
    description: 'Implement pest control measures throughout the ship.',
    requirements: ['Pest control license', 'Safety knowledge', 'Attention to detail'],
    postedDate: '2024-01-03',
    urgent: false,
    featured: false
  },
  {
    id: 14,
    title: 'Plumber',
    department: 'Deck / Marine department',
    category: 'Marine',
    location: 'Engine Room Areas',
    salary: '$3,400 - $4,200/month',
    experience: '3+ years',
    type: 'Full-time',
    contract: '8-10 months',
    description: 'Maintain and repair plumbing systems throughout the vessel.',
    requirements: ['Plumbing certification', 'Marine systems', 'Emergency repair'],
    postedDate: '2024-01-02',
    urgent: true,
    featured: false
  },
  {
    id: 15,
    title: 'Public Area Attendant',
    department: 'Housekeeping',
    category: 'Hospitality',
    location: 'Public Spaces',
    salary: '$2,300 - $2,900/month',
    experience: '1+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Maintain cleanliness in all public areas of the cruise ship.',
    requirements: ['Cleaning experience', 'Customer service', 'Physical stamina'],
    postedDate: '2024-01-01',
    urgent: false,
    featured: false
  },
  {
    id: 16,
    title: 'Sous Chef',
    department: 'Food Production',
    category: 'Culinary',
    location: 'Main Kitchen',
    salary: '$4,500 - $5,500/month',
    experience: '6+ years',
    type: 'Full-time',
    contract: '6-9 months',
    description: 'Second-in-command in kitchen hierarchy, overseeing daily operations.',
    requirements: ['Executive experience', 'Menu planning', 'Staff management'],
    postedDate: '2023-12-30',
    urgent: true,
    featured: true
  },
  {
    id: 17,
    title: 'Upholster',
    department: 'Deck / Marine department',
    category: 'Marine',
    location: 'Interior Spaces',
    salary: '$3,000 - $3,800/month',
    experience: '3+ years',
    type: 'Full-time',
    contract: '8-10 months',
    description: 'Repair and maintain all upholstered furniture onboard.',
    requirements: ['Upholstery skills', 'Fabric knowledge', 'Repair expertise'],
    postedDate: '2023-12-29',
    urgent: false,
    featured: false
  },
  {
    id: 18,
    title: 'Varnisher',
    department: 'Deck / Marine department',
    category: 'Marine',
    location: 'Exterior/Interior',
    salary: '$2,900 - $3,600/month',
    experience: '2+ years',
    type: 'Full-time',
    contract: '8-10 months',
    description: 'Apply and maintain varnish on wood surfaces throughout the ship.',
    requirements: ['Varnishing experience', 'Attention to detail', 'Safety protocols'],
    postedDate: '2023-12-28',
    urgent: false,
    featured: false
  }
];

const JobListings = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
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

  // Extract unique categories and departments
  const categories = ['All', ...new Set(jobListings.map(job => job.category))];
  const departments = ['All', ...new Set(jobListings.map(job => job.department))];

  // Filter jobs based on search and filters
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;

    return matchesSearch && matchesCategory && matchesDepartment;
  });

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  const stats = [
    { icon: <Briefcase className="h-7 w-7" />, value: '1,200+', label: 'Active Jobs' },
    { icon: <Users className="h-7 w-7" />, value: '850+', label: 'Positions Filled' },
    { icon: <TrendingUp className="h-7 w-7" />, value: '98%', label: 'Placement Rate' },
    { icon: <Calendar className="h-7 w-7" />, value: '24/7', label: 'Applications Open' },
  ];

  const departmentCards = [
    { name: 'Food Production', count: 11, icon: '🍽️' },
    { name: 'Housekeeping', count: 5, icon: '🏨' },
    { name: 'Deck / Marine', count: 5, icon: '⚓' },
    { name: 'Entertainment', count: 2, icon: '🎭' },
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
      <section className="relative pt-10 pb-12 px-4 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFD700]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#002B5C]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0A4D8C]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
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
              <span className="text-sm font-medium text-[#002B5C]">Cruise Ship Careers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002B5C] mb-6 animate-on-scroll">
              Find Your Dream Job at{' '}
              <span className="text-gradient">Sea</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Explore exciting opportunities across luxury cruise lines worldwide.
              Start your maritime career journey with BlueWave International.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#002B5C] mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-[#FFD700]/20 animate-on-scroll">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search jobs by title, keyword, or department..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full md:w-48">
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] h-5 w-5" />
                  <select
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category} Jobs
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Department Filter */}
              <div className="w-full md:w-48">
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FFD700] h-5 w-5" />
                  <select
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept === 'All' ? 'All Departments' : dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:from-[#FFD700] hover:to-[#FFA500] hover:text-[#002B5C]">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-bold text-[#002B5C] flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-[#FFD700]" />
              Featured{' '}
              <span className="text-gradient">Job Opportunities</span>
            </h2>
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-[#FFD700]/20">
              Showing {filteredJobs.length} of {jobListings.length} jobs
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                onClick={() => handleJobClick(job.id)}
                className="group relative animate-on-scroll cursor-pointer"
                data-animation="slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                />
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#FFD700]/20 overflow-hidden group-hover:-translate-y-2">
                  {/* Urgent/Featured Banner */}
                  {job.urgent && (
                    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2 px-4">
                      <span className="font-semibold flex items-center justify-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        URGENT HIRING
                      </span>
                    </div>
                  )}
                  {job.featured && !job.urgent && (
                    <div className="bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white text-center py-2 px-4">
                      <span className="font-semibold flex items-center justify-center gap-2">
                        <Star className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        FEATURED
                      </span>
                    </div>
                  )}

                  <div className="p-6 text-center">
                    {/* Centered Title */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#002B5C] mb-3 group-hover:text-[#FFD700] transition-colors text-center">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#002B5C]/10 to-[#0A4D8C]/10 text-[#002B5C] text-sm font-medium rounded-full">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                          {job.category}
                        </span>
                      </div>
                    </div>

                    {/* Star icon for featured jobs */}
                    {job.featured && (
                      <div className="flex justify-center mb-2">
                        <Star className="h-5 w-5 text-[#FFD700] fill-[#FFD700]" />
                      </div>
                    )}

                    {/* Centered Description */}
                    <p className="text-gray-600 mb-6 text-center">
                      {job.description}
                    </p>

                    {/* Centered Job Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4 text-[#FFD700]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 text-[#FFD700]" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4 text-[#FFD700]" />
                        <span>{job.type} • {job.contract}</span>
                      </div>
                    </div>

                    {/* Centered Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(job.title);
                      }}
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:from-[#FFD700] group-hover:to-[#FFA500] group-hover:text-[#002B5C]"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Departments Overview */}
          <div className="mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-8 text-center flex items-center justify-center gap-3">
              <Anchor className="h-7 w-7 text-[#FFD700]" />
              Browse by{' '}
              <span className="text-gradient">Department</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {departmentCards.map((dept, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedDepartment(dept.name)}
                  className="group relative cursor-pointer animate-on-scroll"
                  data-animation="scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `linear-gradient(135deg, #002B5C 0%, #0A4D8C 50%, #FFD700 100%)` }}
                  />
                  <div className="relative bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FFD700] group-hover:-translate-y-1">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{dept.icon}</div>
                    <h3 className="font-bold text-[#002B5C] mb-2">{dept.name}</h3>
                    <div className="text-sm text-gray-500">{dept.count} positions</div>
                    <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#7CB9E8]"></div>
      

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll" data-animation="scale">
            <div className="flex justify-center mb-6">
              <Ship className="w-16 h-16 text-[#FFD700] animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Set Sail on Your{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Career Journey?
              </span>
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Create your profile and get matched with the perfect cruise ship job opportunities.
              Let BlueWave International guide you to your dream career at sea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListings;