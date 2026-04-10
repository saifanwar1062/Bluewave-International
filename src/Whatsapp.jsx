import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Ship, Anchor, Sparkles } from 'lucide-react';
import { useApply } from './ApplyContext';

const Whatsapp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(false);
    const { whatsappTrigger, clearWhatsappTrigger } = useApply();

    const whatsappNumber = "+918796144831";

    // Bluewave International color scheme
    const colors = {
        primary: '#002B5C',
        secondary: '#0A4D8C',
        accent: '#54c807',
        accentLight: '#54c807',
        background: '#FAFAFA',
        lightBg: '#FEFAF0',
        whatsapp: '#25D366'
    };

    const quickReplies = [
        { icon: "🚢", text: "Cruise Jobs", message: "I'd like to know about available cruise jobs" },
        { icon: "⚓", text: "Training Programs", message: "Tell me about your training programs" },
        { icon: "🏨", text: "Departments", message: "What cruise ship departments are hiring?" },
        { icon: "💰", text: "Salaries", message: "What are the salary ranges?" }
    ];

    const welcomeMessages = [
        {
            id: 1,
            text: "Welcome to BlueWave International! 🌊",
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            isBot: true
        },
        {
            id: 2,
            text: "Your journey to an exciting cruise career starts here!",
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            isBot: true
        },
        {
            id: 3,
            text: "How can we help you today?",
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            isBot: true
        }
    ];

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);

            welcomeMessages.forEach((message, index) => {
                setTimeout(() => {
                    setMessages(prev => [...prev, message]);
                    if (index === welcomeMessages.length - 1) {
                        setIsTyping(false);
                        setTimeout(() => setShowQuickReplies(true), 300);
                    }
                }, (index + 1) * 600);
            });
        }
    }, [isOpen]);

    // Watch for form submission trigger → auto-open widget and redirect to WhatsApp
    useEffect(() => {
        if (whatsappTrigger) {
            const { message } = whatsappTrigger;
            setIsOpen(true);
            setInputText('');
            clearWhatsappTrigger();

            // Directly open WhatsApp in a new tab with pre-filled message
            const url = `https://wa.me/${whatsappNumber}?text=${message}`;
            setTimeout(() => {
                window.open(url, '_blank');
            }, 400); // small delay so widget visually opens first
        }
    }, [whatsappTrigger]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleQuickReply = (reply) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reply.message)}`;
        window.open(url, '_blank');
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inputText)}`;
            window.open(url, '_blank');
            setInputText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                @keyframes wave {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-3px); }
                }

                @keyframes shimmer {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }

                .message-animate {
                    animation: slideIn 0.2s ease-out;
                }

                .pulse-btn {
                    animation: pulse 2s infinite;
                }

                .wave-icon {
                    animation: wave 1.5s ease-in-out infinite;
                }

                .shimmer-effect {
                    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite;
                }

                .chat-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }

                .chat-scrollbar::-webkit-scrollbar-track {
                    background: ${colors.lightBg};
                    border-radius: 4px;
                }

                .chat-scrollbar::-webkit-scrollbar-thumb {
                    background: ${colors.accent};
                    border-radius: 4px;
                }
            `}</style>

            <div className="fixed bottom-4 right-4 z-50 font-sans sm:bottom-5 sm:right-5">
                {/* Chat Window */}
                <div className={`
                    absolute bottom-14 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#FFD700]/20
                    transition-all duration-300 ease-out origin-bottom-right
                    ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-4 pointer-events-none'}
                `} style={{ backgroundColor: colors.background }}>
                    
                    {/* Header */}
                    <div className="p-4" style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                    }}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-full flex items-center justify-center border-2 border-[#FFD700]/50">
                                        <Ship className="w-6 h-6 text-[#FFD700]" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <h1 className="font-bold text-white text-base">BlueWave International</h1>
                                    <div className="flex items-center space-x-1.5 mt-0.5">
                                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                                        <p className="text-xs text-white/80">Online • 24/7 Support</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-all duration-200 hover:scale-110"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="h-80 overflow-y-auto p-4 chat-scrollbar" style={{ backgroundColor: colors.lightBg }}>
                        <div className="space-y-3">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`message-animate flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    {message.isBot && (
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-2"
                                            style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
                                            <Ship className="w-4 h-4 text-[#FFD700]" />
                                        </div>
                                    )}
                                    <div className={`max-w-[85%] ${message.isBot ? '' : 'order-1'}`}>
                                        <div className={`
                                            px-3 py-2 rounded-xl text-sm
                                            ${message.isBot
                                                ? 'rounded-tl-sm bg-white border border-[#FFD700]/20 shadow-sm'
                                                : 'rounded-tr-sm text-white'
                                            }
                                        `}
                                            style={{
                                                backgroundColor: message.isBot ? 'white' : colors.accent,
                                                color: message.isBot ? colors.primary : colors.primary,
                                            }}>
                                            <p className="leading-relaxed">{message.text}</p>
                                        </div>
                                        <p className={`text-[10px] mt-1 px-1 ${message.isBot ? 'text-gray-400' : 'text-gray-500 text-right'}`}>
                                            {message.time}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-center space-x-2 message-animate">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
                                        <Ship className="w-4 h-4 text-[#FFD700]" />
                                    </div>
                                    <div className="bg-white px-4 py-2 rounded-xl rounded-tl-sm border border-[#FFD700]/20 shadow-sm">
                                        <div className="flex space-x-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFA500] animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Quick Replies */}
                            {showQuickReplies && !isTyping && (
                                <div className="space-y-3 message-animate">
                                    <p className="text-xs text-center font-medium px-2 py-1 rounded-full inline-block mx-auto"
                                        style={{ backgroundColor: `${colors.accent}20`, color: colors.primary }}>
                                        Quick Options
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {quickReplies.map((reply, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleQuickReply(reply)}
                                                className="flex items-center space-x-2 p-2.5 bg-white hover:bg-gradient-to-r hover:from-[#FFD700]/10 hover:to-[#FFA500]/10 rounded-xl transition-all duration-200 border border-[#FFD700]/20 hover:border-[#FFD700]/50 text-left group"
                                            >
                                                <span className="text-lg wave-icon">{reply.icon}</span>
                                                <span className="text-xs font-medium truncate group-hover:text-[#FFD700] transition" style={{ color: colors.primary }}>
                                                    {reply.text}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-[#FFD700]/20 p-3 bg-white">
                        <div className="flex items-center space-x-2 border border-[#FFD700]/30 rounded-xl px-2 py-1 bg-white focus-within:border-[#FFD700] focus-within:shadow-md transition-all">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2.5 bg-transparent rounded-lg focus:outline-none text-sm placeholder:text-gray-400"
                                style={{ color: colors.primary }}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputText.trim()}
                                className="p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
                                    opacity: inputText.trim() ? 1 : 0.5
                                }}
                            >
                                <Send size={16} className="text-[#002B5C]" />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-gray-400 mt-2 flex items-center justify-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#FFD700]" />
                            Send to continue on WhatsApp
                            <Sparkles className="w-3 h-3 text-[#FFD700]" />
                        </p>
                    </div>
                </div>

                {/* Floating Button */}
                <button
                    onClick={toggleChat}
                    className={`
                        relative w-14 h-14 text-white rounded-full shadow-2xl
                        flex items-center justify-center transition-all duration-300 transform
                        hover:scale-110 active:scale-95 group
                        ${!isOpen ? 'pulse-btn' : ''}
                    `}
                    style={{
                        background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
                        boxShadow: `0 8px 25px rgba(255, 215, 0, 0.4)`
                    }}
                >
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-[#FFD700] opacity-30 animate-ping"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10">
                        {isOpen ? (
                            <X size={20} className="text-[#002B5C] transition-transform duration-200" />
                        ) : (
                            <div className="relative">
                                <MessageCircle size={24} className="text-[#002B5C] transition-transform duration-200 group-hover:scale-110" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                            </div>
                        )}
                    </div>

                    {/* Notification Badge */}
                    {!isOpen && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-lg animate-pulse">
                            1
                        </div>
                    )}

                    {/* Wave Effect */}
                    {!isOpen && (
                        <div className="absolute inset-0 rounded-full border-2 border-[#FFD700] opacity-50 animate-ping"></div>
                    )}
                </button>
            </div>
        </>
    );
};

export default Whatsapp;