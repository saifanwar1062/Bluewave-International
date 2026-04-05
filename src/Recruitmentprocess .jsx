import React from 'react';
import { ClipboardCheck, FileText, Briefcase, ArrowRight, Sparkles, ChevronRight, Anchor, Star } from 'lucide-react';
import { useApply } from './ApplyContext';

const RecruitmentProcess = () => {
  const { openModal } = useApply();
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Register with us",
      description: "Create your profile and join our talent pool",
      color: "from-[#002B5C] to-[#0A4D8C]",
      gradient: "from-[#002B5C]/5 to-[#0A4D8C]/5",
      borderColor: "border-[#FFD700]/20"
    },
    {
      icon: FileText,
      title: "Search job & upload CV",
      description: "Browse opportunities and submit your resume",
      color: "from-[#0A4D8C] to-[#7CB9E8]",
      gradient: "from-[#0A4D8C]/5 to-[#7CB9E8]/5",
      borderColor: "border-[#FFD700]/20"
    },
    {
      icon: Briefcase,
      title: "Apply now",
      description: "Submit application and start your journey",
      color: "from-[#FFD700] to-[#FFA500]",
      gradient: "from-[#FFD700]/5 to-[#FFA500]/5",
      borderColor: "border-[#FFD700]/20"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#fefaf0] to-white py-20 px-4 relative overflow-hidden">
      {/* Decorative Elements with golden accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 h-64 bg-[#FFD700]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-64 h-64 bg-[#FFA500]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#002B5C]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Anchor Icon */}
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Anchor className="w-8 h-8 text-[#FFD700]" />
            
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#002B5C]">Our Recruitment</span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent ml-2">
              Process
            </span>
          </h2>

          {/* Description */}
          <div className="relative max-w-3xl mx-auto">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed px-4">
              At our{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-[#0A4D8C]">20-year-old</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD700]/30 -rotate-1"></span>
              </span>{' '}
              overseas recruitment agency, the process is seamless and efficient.
            </p>

            {/* Steps Indicator */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-gray-700">
              <span className="inline-flex items-center gap-1.5 bg-[#002B5C]/10 px-3 py-1.5 rounded-full text-sm border border-[#FFD700]/20">
                <span className="w-1.5 h-1.5 bg-[#002B5C] rounded-full"></span>
                <span className="font-medium">Register</span>
              </span>
              <ChevronRight className="w-3 h-3 text-[#FFD700] hidden sm:block" />
              <span className="inline-flex items-center gap-1.5 bg-[#0A4D8C]/10 px-3 py-1.5 rounded-full text-sm border border-[#FFD700]/20">
                <span className="w-1.5 h-1.5 bg-[#0A4D8C] rounded-full"></span>
                <span className="font-medium">Search</span>
              </span>
              <ChevronRight className="w-3 h-3 text-[#FFA500] hidden sm:block" />
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 px-3 py-1.5 rounded-full text-sm border border-[#FFD700]/30">
                <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span>
                <span className="font-medium">Apply</span>
              </span>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-28 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-[#002B5C]/20 via-[#FFD700]/40 to-[#FFA500]/20 rounded-full"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#FFD700]/20 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Golden top border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="absolute top-2 right-4 text-6xl font-black text-gray-100 group-hover:text-[#FFD700]/20 transition-colors">
                      {index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="mb-5">
                      <div className={`relative inline-block`}>
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} p-4 shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
                          <step.icon className="w-full h-full text-white" strokeWidth={1.5} />
                        </div>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-xl filter blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#002B5C] mb-2 group-hover:text-[#0A4D8C] transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Arrow Indicator for Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-lg shadow-[#FFD700]/30">
                      <ArrowRight className="w-5 h-5 text-[#002B5C]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => openModal()}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#002B5C] to-[#0A4D8C] text-white px-8 py-4 rounded-full text-base font-semibold overflow-hidden shadow-lg shadow-[#002B5C]/30 hover:shadow-xl hover:shadow-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <p className="text-gray-500 mt-4 text-sm">
            Join thousands of successful candidates who found their dream jobs through us
          </p>
          
          {/* Decorative stars */}
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 30px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default RecruitmentProcess;