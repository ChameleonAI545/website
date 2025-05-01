import React from "react";

export default function Logo({
                                 src,
                                 alt = "Logo",
                                 label,
                                 glowColor = "shadow-white",
                                 position,
                                 style = "", // 👈 added style prop
                                 size = "w-10 h-10", // optional: allow Tailwind size override
                             }) {
    return (
        <div
            className={`absolute ${position} ${style} flex flex-col items-center text-white text-sm`}
        >
            <div
                className={`bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ${glowColor}`}
            >
                <img
                    src={src}
                    alt={alt}
                    className={`object-cover rounded-full ${size}`}
                />
            </div>
            {label && (
                <span className="text-sm text-white font-light opacity-80">
          {label}
        </span>
            )}
        </div>
    );
}