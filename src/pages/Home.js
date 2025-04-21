import React from "react";
import ImageCarousel from "../components/ImageCarousel"
import Events from "../components/Events"
import events from '../data/events';



function HomePage() {
    return (
        <main className="p-4 bg-[#F5F5DC]">
            <ImageCarousel />

            <Events events={events} />

        </main>
    );
}

export default HomePage;

