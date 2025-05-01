import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
                {/* Logo & Tagline */}
                <div className="col-span-2">
                    <h2 className="text-3xl font-extrabold mb-2">Chameleon AI</h2>
                    <p className="text-gray-400">
                        Discover AI tools faster. Explore, learn, and launch — all in one place.
                    </p>
                    <p className="text-sm text-gray-600 mt-4">Built remotely • Powered by React + Tailwind</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="/" className="hover:text-white transition">Get Started with AI</a></li>
                        <li><a href="#about" className="hover:text-white transition">About Us</a></li>

                        <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Developers */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Developers</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#submit" className="hover:text-white transition">Submit a Tool</a></li>
                    </ul>
                </div>
            </div>

            {/* Divider + Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                © 2025 YourSiteName. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;