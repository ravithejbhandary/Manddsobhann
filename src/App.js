import React from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar />
      <ImageCarousel />
      <main className="p-4 bg-[#F5F5DC]">
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
