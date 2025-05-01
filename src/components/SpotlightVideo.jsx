// src/components/SpotlightVideo.jsx
import chameleonVideo from "../assets/chamelionVideo-wm.mp4";

const SpotlightVideo = () => {
    return (
        <div className=" inset z-0">
            <video
                src={chameleonVideo}
                autoPlay
                muted
                playsInline
                className=" object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none" />
        </div>
    );
};

export default SpotlightVideo;