import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react'; // or use an SVG if no icon lib
import Footer from "../components/Footer/footer.jsx";

export default function ScrollArrow() {
    const [isVisible, setIsVisible] = useState(true);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (footerRef.current) observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div
                className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <ChevronDown className="animate-bounce w-10 h-10 text-gray-500" />
            </div>

            {/* 👇 attach this ref to your actual footer */}
        </>
    );
}