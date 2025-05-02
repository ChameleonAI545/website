import React from 'react';
import "./Landing-Page.css";
import SpotlightVideo from "../../components/SpotlightVideo";





const FirstPage = () => {
    return (
        <>
            <div className="window-container">
                <div className="window">
                    <div className="cta-text-container">
                        <div className="cta-text-gradient">
                            <h1 className="font-bold mb-4 pl-5">Let Our AI Find the Perfect AI for You</h1>
                            <p className="text-lg md:text-2xl pl-5 text-white/50">
                                Describe what you need — our intelligent AI searches the AI universe to match you with the best tools for the job.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 absolute bottom-[10%] z-10">
                        <button
                            className="bg-[#ad2303] text-black px-6 py-3 rounded-lg text-[16px] uppercase tracking-wide shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                            Sign up
                        </button>
                        <button
                            className="bg-transparent text-[#ad2303] border-2 border-[#ad2303] px-6 py-3 rounded-lg text-[16px] uppercase tracking-wide shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-[#ad230308] transition">
                            Learn More
                        </button>
                    </div>

                    <div>

                    </div>
                    <div className="spotlight-video-container">
                        <SpotlightVideo/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default FirstPage;
