import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Admin from './pages/Admin';

import ContactUs from "./components/Admin/ContactUs";
import WebsiteInfo from "./components/MoreInfo/WebsiteInfo";
import SoftwareInfo from "./components/MoreInfo/SoftwareInfo";
import PhotoInfo from "./components/MoreInfo/PhotoInfo";
import DigitalMarketingInfo from "./components/MoreInfo/DigitalMarketingInfo";
import AnimationInfo from "./components/MoreInfo/AnimationInfo";
import BrandingDesignInfo from "./components/MoreInfo/BrandingDesignInfo";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/contactus' element={<ContactUs />} />
        <Route path='/websiteinfo' element={<WebsiteInfo />} />
        <Route path='/softwareinfo' element={<SoftwareInfo />} />
        <Route path='/photoinfo' element={<PhotoInfo />} />
        <Route path='/digitalmarketinginfo' element={<DigitalMarketingInfo />} />
        <Route path='/animationinfo' element={<AnimationInfo />} />
        <Route path='/brandanddesigninfo' element={<BrandingDesignInfo />} />
      </Routes>
      <Footer />
    </div>
  )
}
