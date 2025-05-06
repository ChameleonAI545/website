import React from 'react';
import chameleonImage from '../../assets/chamelionImage.jpg';


const FirstPage = () => {
    return (
        <div
            className="relative min-h-screen bg-black bg-cover bg-center flex justify-center items-center overflow-hidden"
            style={{ backgroundImage: `url(${chameleonImage})` }}
        >
            <div className="display: flex; mr-auto ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold cta-text-gradient ml-17 m-10 relative -top-50">
                Let our AI find the perfect AI for you
                </h1>
                <p className="text-lg md:text-xl text-white m-10 relative -top-45 max-w-150 ml-17 cta-text-gradient">
                Discover AI tools faster. Explore, learn, and launch all in one place. Our tool allows you to explore the AI universe easily and beautifully.
                </p>

                <button className="bg-blue-500 text-black px-6 py-3 rounded-lg tracking-wide shadow-md  hover:-translate-y-1 transition relative -top-35 ml-17 floating-effect">

                    Get started

                </button>

                <button className="border-2 border-blue-500 text-blue-500 bg-transparent px-6 py-3 rounded-lg tracking-wide shadow-md  hover:-translate-y-1 hover:bg-[#ad230308] transition relative -top-35 ml-7 floating-effect">

                    Try demo

                </button>
            </div>


        </div>
    );
};

export default FirstPage;