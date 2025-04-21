import React from 'react';

const ContactUsPage = () => {
    return (
        <div className="min-h-screen bg-[#f9f9e9] py-10 px-4 sm:px-8 lg:px-20">
            <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300">

                {/* Header */}
                <h2 className="text-3xl font-bold text-[#2b2b2b] mb-6">Contact Us</h2>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
                    <div className="flex-1 space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800">Mandd Sobhann</h3>
                            <p className="text-gray-600 text-sm">
                                Kalaangann, Shaktinagar,<br />
                                Mangalore – 575016, Karnataka, India
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-700 text-sm">
                                📞 <a href="tel:+918242211964" className="text-blue-600 hover:underline">+91 824 2211964</a>
                            </p>
                            <p className="text-gray-700 text-sm">
                                ✉ <a href="mailto:info@manddsobhann.org" className="text-blue-600 hover:underline">info@manddsobhann.org</a>
                            </p>
                        </div>
                    </div>

                    {/* Google Maps Directions Link */}
                    <div className="mt-6 md:mt-0 flex items-start">
                        <a
                            href="https://www.google.com/maps?q=Mandd+Sobhann,+Kalaangann,+Shaktinagar,+Mangalore+575016"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-100 transition inline-block"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
