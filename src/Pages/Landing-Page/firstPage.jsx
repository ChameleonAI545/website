import React from 'react';
import "./Landing-Page.css";
import SpotlightVideo from "../../components/SpotlightVideo";
import FloatingIcon from '../../components/FloatingIcon';




const FirstPage = () => {
    return (
        <>
            <div className="window-container">
                <div className="window">
                    <div className = "cta-text-container">
                        <div className="cta-text-gradient">
                            <h1 className="font-bold mb-4  pl-5">Navigate the AI Revolution with Ease</h1>
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
