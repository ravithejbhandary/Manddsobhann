import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-6 py-4 bg-[#fcefc4] hover:bg-[#f9e58b] text-left text-lg font-semibold text-[#2b2b2b]"
            >
                {title}
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 py-4 bg-white text-gray-700 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Accordion;
