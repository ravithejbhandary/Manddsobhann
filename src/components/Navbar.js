import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <nav className="navbar relative px-4 py-3 text-white flex flex-col md:flex-row items-center justify-between">
            {/* Logo & Toggle */}
            <div className="flex items-center justify-between w-full md:w-auto">
                <img src={logo} alt="Mandd Sobhann" className="h-12" />
                <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars className="text-white text-2xl" />
                </button>
            </div>

            {/* Navigation Links */}
<div className={`md:flex ${menuOpen ? "block" : "hidden"} w-full md:w-auto`}>
  <ul className="md:flex md:space-x-6 text-lg">
    {/* Home */}
    <li className="relative px-4 py-2 hover:text-yellow-300 cursor-pointer">Home</li>

    {/* About with dropdown */}
    <li className="relative px-4 py-2 hover:text-yellow-300 cursor-pointer group">
      About <span className="ml-1">▼</span>
      {/* Dropdown menu */}
      <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 z-30 w-40">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Our Story</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mission</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Team</li>
      </ul>
    </li>

    {/* Other nav items */}
    <li className="relative px-4 py-2 hover:text-yellow-300 cursor-pointer">News</li>
    <li className="relative px-4 py-2 hover:text-yellow-300 cursor-pointer">Events</li>
    <li className="relative px-4 py-2 hover:text-yellow-300 cursor-pointer">Contact</li>
  </ul>
</div>


            {/* Right Section */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                {/* Language Dropdown */}
                <select className="bg-transparent border border-white px-2 py-1 rounded">
                    <option>English</option>
                    <option>Konkani</option>
                </select>

                {/* Search Bar */}
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-box text-black px-3 py-1"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 text-black" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
