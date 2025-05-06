import React from 'react';
import './Landing-Page.css';


const AboutUs = () => {
    return (

        <div className="container-aboutUs  ">
            <div className="centered-div-aboutUs rounded-2xl mx-auto px-6 py-12 comic-relief-regular leading-relaxed p-8 text-center">
                <h1 className="text-5xl font-bold mb-4 comic-relief-bold text-center">About us</h1>
                <p className="text-xl md:text-3xl">
                    Welcome to your ultimate AI discovery hub — where innovation meets simplicity.
                    Our platform is more than a directory; it’s powered by an intelligent AI that actively searches, recommends, and matches you with the best AI tools for your specific tasks. Whether you’re a content creator streamlining your workflow, a student seeking smarter research and writing support, an entrepreneur automating business operations, or simply an AI enthusiast — we’ve got you covered.

                    Explore a curated collection of cutting-edge tools, enhanced by AI-driven recommendations tailored to your needs. With clear descriptions, helpful tags, and direct links, finding the right solution has never been easier.

                    From writing assistants and productivity boosters to research aids and creative design tools, our AI helps cut through the noise — delivering personalized results so you can focus on what matters.

                    Our clean, minimal interface ensures a smooth, distraction-free experience. At our core, we’re driven by a simple mission: to make discovering and using AI tools effortless, personalized, and accessible to everyone.
                </p>
            </div>
            
        </div>
    );
};

export default AboutUs;