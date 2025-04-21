import React from 'react';
import Accordion from '../components/Accordion';

const ManddSobhann = () => {
    // Accordion section data
    const accordionData = [
        {
            title: "Our Mission",
            content: [
                "Promote and preserve Konkani language and culture.",
                "Organize events and performances to celebrate heritage.",
                "Empower communities through cultural education."
            ]
        },
        {
            title: "History",
            content: [
                "Founded in Mangalore, a cultural hub for Konkani people.",
                "Has hosted major festivals, plays, and literary events.",
                "Recognized as a key institution for cultural preservation."
            ]
        },
        {
            title: "Our Activities",
            content: [
                "Workshops for youth in music, dance, and drama.",
                "Annual 'Kalaangann' cultural celebration.",
                "Competitions, exhibitions, and heritage education."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#f9f9e9] py-10 px-4 sm:px-8 lg:px-20">
            <h1 className="text-3xl font-bold text-[#2b2b2b] mb-6 text-center">
                About Mandd Sobhann
            </h1>

            {/* Dynamically render each accordion by index */}
            {accordionData.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default ManddSobhann;
