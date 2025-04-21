import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Events = ({ events = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  // Ensure at least 1 slide to avoid division by zero or NaN
  const totalSlides = Math.max(1, Math.ceil(events.length / itemsPerSlide));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const visibleEvents = events.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="bg-[#fdf1dc] p-8 rounded-xl text-center max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#4b1e0d]">Welcome to Mandd Sobhann</h2>

      {events.length === 0 ? (
        <p className="text-gray-500">No events available.</p>
      ) : (
        <>
          <div className="relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>

            <div className="flex flex-wrap justify-center gap-6 w-full px-8">
              {visibleEvents.map((event, index) => (
                <div key={index} className="w-72 bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-[#4b1e0d]">{event.title}</h3>
                    <p className="text-sm text-gray-700">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${idx === currentIndex ? 'bg-[#4b1e0d]' : 'bg-[#d4a373]'
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
