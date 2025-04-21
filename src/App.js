import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Eventspage from "./pages/Eventspage";
import Newspage from "./pages/Newspage";
import ContactUsPage from "./pages/ContactUsPage";
import ManddSobhann from './pages/ManddSobhann';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5DC]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/ManddSobhann" element={<ManddSobhann />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
