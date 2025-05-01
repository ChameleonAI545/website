import React from 'react';
import './Landing-Page.css';


const AboutUs = () => {
    return (
        <div className="container-aboutUs ">
            <div className="centered-div-aboutUs rounded-2xl mx-auto px-6 py-12 comic-relief-regular leading-relaxed p-8 text-center">
                <h1 className="text-5xl font-bold mb-4 comic-relief-bold text-center">About us</h1>
                <p className="text-xl md:text-3xl">
                    Welcome to your ultimate AI discovery hub — where innovation meets simplicity.
                    Our platform is built to help you easily explore and evaluate the most powerful AI tools available today. Whether you’re a content creator streamlining your workflow, a student looking for smarter research and writing support, an entrepreneur automating business tasks, or simply an AI enthusiast — we’ve got you covered.

                    Browse a curated collection of cutting-edge tools, complete with clear descriptions, helpful tags, and direct links. From writing assistants and productivity boosters to research aids and creative design tools, we make it easy to find the right solution for your needs.

                    Our clean, minimal interface ensures a smooth, distraction-free experience so you can focus on discovering what’s possible. At our core, we’re driven by a simple mission: to make finding and using AI tools effortless, enjoyable, and accessible to everyone.
                </p>
            </div>
            
        </div>
    );
};

export default AboutUs;