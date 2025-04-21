import React from 'react';
import EventCard from '../components/EventCard';

const events = [
    {
        title: 'First Event',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'January 15, 2024',
        image: 'https://via.placeholder.com/100x100.png?text=1',
    },
    {
        title: 'Second Event',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'February 20, 2024',
        image: 'https://via.placeholder.com/100x100.png?text=2',
    },
    {
        title: 'Third Event',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'March 30, 2024',
        image: 'https://via.placeholder.com/100x100.png?text=3',
    },
];

const EventPage = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-center text-brown-800 mb-8">Events</h2>
            {events.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    image={event.image}
                />
            ))}
        </div>
    );
};

export default EventPage;
