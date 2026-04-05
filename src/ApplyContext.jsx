import React, { createContext, useContext, useState } from 'react';

const ApplyContext = createContext();

export const useApply = () => {
    const context = useContext(ApplyContext);
    if (!context) {
        throw new Error('useApply must be used within an ApplyProvider');
    }
    return context;
};

export const ApplyProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const [whatsappTrigger, setWhatsappTrigger] = useState(null); // { message: string }

    const openModal = (jobTitle = '') => {
        setSelectedJob(jobTitle);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob('');
    };

    const triggerWhatsApp = (message) => {
        setWhatsappTrigger({ message, id: Date.now() });
    };

    const clearWhatsappTrigger = () => {
        setWhatsappTrigger(null);
    };

    return (
        <ApplyContext.Provider value={{
            isModalOpen, selectedJob, openModal, closeModal,
            whatsappTrigger, triggerWhatsApp, clearWhatsappTrigger
        }}>
            {children}
        </ApplyContext.Provider>
    );
};
