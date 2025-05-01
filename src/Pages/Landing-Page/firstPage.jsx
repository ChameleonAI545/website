import React from 'react';
import "./Landing-Page.css";
import SpotlightVideo from "../../components/SpotlightVideo";
import FloatingIcon from '../../components/FloatingIcon';

import geminiLogo from '../../assets/icons/AI-Icons/gemini.svg';
import lovableLogo from '../../assets/icons/AI-Icons/lovable.svg';
import guathLogo from '../../assets/icons/AI-Icons/guath.svg';
import relumeLogo from '../../assets/icons/AI-Icons/relume.png';
import invideoLogo from '../../assets/icons/AI-Icons/invideo.svg';
import midjourneyLogo from '../../assets/icons/AI-Icons/midjourney.svg';

const logos = [

    {
        src: geminiLogo,
        label: "Gemini",
        style: "animate-float delay-100",
        glow: "shadow-blue-400/40",
        position: 'top-[63%] right-[13%]',
        size: 'w-12 h-12'
    },
    {
        src: lovableLogo,
        label: "Lovable",
        style: "animate-float delay-200",
        glow: "shadow-pink-400/40",
        position: 'top-[80%] left-[55%]',
    },
    {
        src: guathLogo,
        label: "Guath",
        style: "animate-float-slow delay-400",
        glow: "shadow-lime-400/40",
        position: 'top-[17%] right-[18%]',
    },
    {
        src: relumeLogo,
        label: "Relume",
        style: " animate-float-reverse delay-100",
        glow: "shadow-amber-400/40",
        position: 'bottom-[10%] left-[70%]',
    },
    {
        src: invideoLogo,
        label: "InVideo",
        style: "animate-float delay-400",
        glow: "shadow-indigo-400/40",
        position: 'top-[35%] right-[7%]',
    },
    {
        src: midjourneyLogo,
        label: "MidJourney",
        style: "animate-float-reverse delay-300",
        glow: "shadow-indigo-400/40",
        position: 'top-[80%] right-[64%]',
    }


]

const FirstPage = () => {
    return (
        <>
            <div className="window-container">
                <div className="window">
                    <div className = "cta-text-container">
                        <div className="cta-text-gradient">
                            <h1 className="font-bold mb-4  pl-5">Navigate the AI Revolution with Ease</h1>
                            <p className="text-xl text-left pl-10 text-white">Enabling discovery and exploration across the new evolving AI ecosystem.</p>
                        </div>

                    </div>
                    <div className="spotlight-video-container">
                        <SpotlightVideo/>
                        {logos.map((logo, index) => (
                            <FloatingIcon
                                key={index}
                                src={logo.src}
                                label={logo.label}
                                position={logo.position}
                                style={logo.style}
                                glowColor={logo.glowColor}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
export default FirstPage;
