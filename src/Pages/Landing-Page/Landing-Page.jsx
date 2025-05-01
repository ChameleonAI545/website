import React from 'react';
import FirstPage from './firstPage.jsx';
import AboutUs from './AboutUs.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import HowItWorks from "./howItWorks.jsx";
import ContactUs from "./contactUs.jsx";
import Footer from "../../components/Footer/footer.jsx";



const LandingPage = () => {
    return (
        <div className="relative w-full min-h-screen bg-black">
            <Navbar />
            {/* Fixed background video and hero content */}
            <FirstPage />

            {/* Scrollable Content */}
            <div className="scrollable-content min-h-screen bg-black text-white flex items-center justify-center">
                <AboutUs />
            </div>
            <div className="scrollable-content min-h-screen bg-black text-white flex items-center justify-center">
                <HowItWorks/>
            </div>
            <div className="scrollable-content min-h-screen bg-black text-white flex flex-col items-center justify-start">
                <ContactUs/>

                <Footer/>
            </div>
        </div>
    );
};

export default LandingPage;