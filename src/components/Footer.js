import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white text-center p-4 mt-10">
            <p>&copy; {new Date().getFullYear()} ManddSobhann. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
