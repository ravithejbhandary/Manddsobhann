import React from 'react';

const EventCard = ({ title, description, date }) => {
    return (
        <div className="w-full px-2 sm:px-4 lg:px-10">
            <div className="w-full max-w-none bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-start justify-between mb-6 hover:shadow-lg transition-all duration-300">

                {/* Left section: Event info */}
                <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                    <p className="text-gray-600 text-sm mb-2 md:mb-0">{title}</p>
                    <div>
                        <h3 className="text-xl font-bold text-[#2b2b2b]">{title}</h3>
                        <p className="text-gray-700 mt-1 text-sm">{description}</p>
                        <p className="text-gray-500 text-sm mt-2">{date}</p>
                    </div>
                </div>

                {/* Right section: Button */}
                <button className="mt-4 md:mt-0 px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-100 transition">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default EventCard;
