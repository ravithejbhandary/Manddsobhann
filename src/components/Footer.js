import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"; // ✅ Correctly importing the logo

const Footer = () => {
  return (
    <footer className="bg-[#FEF3C7] text-[#8A100F] py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Mandd Sobhann" className="h-12 mb-3" />  {/* ✅ Correctly using the imported logo */}
          <p className="text-sm">
            World's Premier Konkani Cultural Organisation dedicated to preserving and promoting Konkani culture, language, and heritage.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-[#8A100F]" />
            <FaTwitter className="text-xl cursor-pointer hover:text-[#8A100F]" />
            <FaInstagram className="text-xl cursor-pointer hover:text-[#8A100F]" />
            <FaYoutube className="text-xl cursor-pointer hover:text-[#8A100F]" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#8A100F]">About Us</a></li>
            <li><a href="#" className="hover:text-[#8A100F]">Events</a></li>
            <li><a href="#" className="hover:text-[#8A100F]">Gallery</a></li>
            <li><a href="#" className="hover:text-[#8A100F]">Publications</a></li>
            <li><a href="#" className="hover:text-[#8A100F]">News</a></li>
            <li><a href="#" className="hover:text-[#8A100F]">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
          <p className="text-sm">
            Mandd Sobhann, Kalaangann, Shaktinagar, Mangalore - 575016, Karnataka, India
          </p>
          <p className="mt-2 text-sm">📞 +91 824 2211964</p>
          <p className="text-sm">✉ info@manddsobhann.org</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-sm mb-2">
            Subscribe to our newsletter to receive updates on events, news, and activities.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 border rounded-md text-gray-800"
          />
          <button className="w-full mt-3 py-2 bg-[#8A100F] text-white font-semibold rounded-md hover:bg-[#551C3B]">
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm">
        © 2025 Mandd Sobhann. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;