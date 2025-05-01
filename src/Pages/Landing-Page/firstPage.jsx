import React from 'react';
import "./Landing-Page.css";
import SpotlightVideo from "../../components/SpotlightVideo";
const FirstPage = () => {
    return (
        <>
            <div className="window-container">
                <div className="window">
                    <div className = "cta-text-container">
                        <div className="cta-text-gradient">
                            <h1 className="font-bold mb-4">Discover AI tools faster</h1>
                            <p className="text-xl md:text-2xl">
                                Explore, learn, and launch — all in one place.
                            </p>
                        </div>

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
