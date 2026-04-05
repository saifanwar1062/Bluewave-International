import React, { useState, useEffect } from 'react';
import { X, Upload, CheckCircle, Send, FileText, Briefcase, User, Mail, Phone, Star, Anchor } from 'lucide-react';
import { useApply } from './ApplyContext';

const ApplyModal = () => {
    const { isModalOpen, closeModal, selectedJob, triggerWhatsApp } = useApply();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        job: ''
    });
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        if (selectedJob) {
            setFormData(prev => ({ ...prev, job: selectedJob }));
        }
    }, [selectedJob]);

    if (!isModalOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, resume: file }));
        setFileName(file ? file.name : '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build a pre-filled WhatsApp message with applicant details
        const waMessage =
            `Hello BlueWave International! 🌊%0A%0A` +
            `I would like to apply for a position.%0A%0A` +
            `📋 *Application Details*%0A` +
            `👤 Name: ${formData.name}%0A` +
            `📧 Email: ${formData.email}%0A` +
            `📞 Phone: ${formData.phone}%0A` +
            `💼 Position: ${formData.job}%0A%0A` +
            `I have attached my resume. Please let me know the next steps.`;

        // Show success briefly then close and open WhatsApp
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', resume: null, job: '' });
            setFileName('');
            closeModal();
            // Trigger the WhatsApp widget to open with the pre-filled message
            triggerWhatsApp(waMessage);
        }, 2000);
    };

    const jobsList = [
        'Butcher', 'Carpenter', 'Chef De Partie', 'Chef De Partie Pastry',
        'Hot / Cold Kitchen Cooks', 'Housekeeping Supervisor', 'Jr. Sous Chef',
        'Kitchen Steward', 'Lifeguard', 'Pantry Chef / Garde Manger',
        'Pastry Chef', 'Pastry Commis', 'Pest Control Technician', 'Plumber',
        'Public Area Attendant', 'Sous Chef', 'Upholsterer', 'Front Office Manager',
        'Concierge', 'Sales Manager'
    ];

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl transform transition-all animate-in zoom-in-95 duration-300 overflow-hidden border border-[#FFD700]/20">
                {!isSubmitted ? (
                    <div className="relative">
                        {/* Company Header - Blue Wave International with Golden Accents */}
                        <div className="relative bg-gradient-to-r from-[#002B5C] via-[#0A4D8C] to-[#002B5C] px-6 py-5 text-white text-center overflow-hidden">
                            {/* Golden overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 via-[#FFA500]/5 to-[#FFD700]/10"></div>
                            
                            {/* Decorative wave pattern */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]"></div>
                            
                            <div className="relative z-10">
                                {/* Logo Icons */}
                                <div className="flex justify-center items-center space-x-2 mb-2">
                                   
                                </div>
                                <h1 className="text-2xl font-bold tracking-wide">
                                    Blue Wave <span className="text-[#FFD700]">International</span>
                                </h1>
                                <p className="text-xs text-white/80 mt-1 font-light">Your Gateway to Global Careers</p>
                            </div>
                            
                            <button
                                onClick={closeModal}
                                className="absolute right-4 top-4 p-1.5 hover:bg-white/20 rounded-full transition-colors z-20"
                                aria-label="Close modal"
                            >
                                <X className="h-5 w-5 text-white" />
                            </button>
                        </div>

                        {/* Form Header */}
                        <div className="px-6 pt-5 pb-2 border-b border-gray-100">
                            <h2 className="text-lg font-semibold text-[#002B5C]">Application Form</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Please fill in your details below</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {/* Name Field */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-[#002B5C] flex items-center gap-2">
                                    <User className="h-4 w-4 text-[#FFD700]" />
                                    Full Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all text-black placeholder:text-gray-400"
                                />
                            </div>

                            {/* Email and Phone Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-[#002B5C] flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-[#FFD700]" />
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all text-black placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-[#002B5C] flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-[#FFD700]" />
                                        Phone
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 234 567 890"
                                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all text-black placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Position Select */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-[#002B5C] flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-[#FFD700]" />
                                    Position Applying For
                                </label>
                                <select
                                    required
                                    name="job"
                                    value={formData.job}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all text-black appearance-none cursor-pointer"
                                >
                                    <option value="">Select a position</option>
                                    {jobsList.map(job => (
                                        <option key={job} value={job}>{job}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Resume Upload */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-[#002B5C] flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-[#FFD700]" />
                                    Upload Resume
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="resume-upload"
                                        accept=".pdf,.doc,.docx"
                                    />
                                    <label
                                        htmlFor="resume-upload"
                                        className={`flex items-center justify-between w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                                            fileName 
                                                ? 'border-[#FFD700] bg-[#FFD700]/5' 
                                                : 'border-gray-200 hover:border-[#FFD700] hover:bg-[#FFD700]/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 truncate">
                                            <Upload className={`h-5 w-5 ${
                                                fileName ? 'text-[#FFD700]' : 'text-gray-400'
                                            }`} />
                                            <span className={`text-sm truncate max-w-[200px] ${
                                                fileName ? 'text-[#002B5C] font-medium' : 'text-gray-500'
                                            }`}>
                                                {fileName || 'Click to upload (PDF, DOC)'}
                                            </span>
                                        </div>
                                        {fileName && (
                                            <CheckCircle className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                                        )}
                                    </label>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">
                                    Supported formats: PDF, DOC, DOCX (Max 5MB)
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4"
                            >
                                <Send className="h-4 w-4" />
                                Submit Application
                            </button>

                            {/* Footer Note */}
                            <p className="text-center text-xs text-gray-400 mt-3">
                                By submitting, you agree to our Terms & Conditions
                            </p>
                        </form>
                    </div>
                ) : (
                    <div className="p-8 text-center animate-in zoom-in-95 duration-500">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                                <CheckCircle className="h-8 w-8 text-[#002B5C]" />
                            </div>
                        </div>
                        
                        {/* Company Name in Success State */}
                        <div className="mb-3">
                            <div className="flex justify-center items-center space-x-2 mb-2">
                                <Anchor className="w-4 h-4 text-[#FFD700]" />
                                <Star className="w-3 h-3 text-[#FFA500]" />
                            </div>
                            <span className="text-xs font-semibold text-[#FFD700] bg-[#FFD700]/10 px-3 py-1 rounded-full">
                                Blue Wave International
                            </span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-[#002B5C] mb-2">Application Submitted!</h2>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Thank you! Redirecting you to WhatsApp to connect with our team instantly… 🚀
                        </p>
                        {/* Loading bar */}
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                            <div className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full animate-[loader_2s_linear_forwards]"
                                style={{ animation: 'width 2s linear forwards', width: '100%',
                                    background: 'linear-gradient(to right, #FFD700, #FFA500)' }}
                            />
                        </div>
                        
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                closeModal();
                            }}
                            className="px-6 py-2.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002B5C] rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-[#FFD700]/30 hover:-translate-y-0.5 transition-all"
                        >
                            Return to Website
                        </button>
                        
                        <p className="text-[10px] text-gray-400 mt-5">
                            © 2024 Blue Wave International. All rights reserved.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplyModal;