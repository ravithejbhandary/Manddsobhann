import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar />
      <main className="p-4 bg-[#F5F5DC]"> {/* Added the background class here */}
        <h1 className="text-center text-4xl">Welcome to Mandd Sobhann</h1>
      </main>
    </div>
  );
}

export default App;