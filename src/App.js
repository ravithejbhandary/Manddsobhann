import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  // Import the Footer component

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col">
      <Navbar />
      
      <main className="flex-grow p-4 bg-[#F5F5DC]">  
        <h1 className="text-center text-4xl">Welcome to Mandd Sobhann</h1>
      </main>

      <Footer />  {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;