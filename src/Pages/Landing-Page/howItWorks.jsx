import React from 'react';
import { AiOutlineSearch, AiOutlineRead, AiOutlineRocket } from 'react-icons/ai';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            icon: <AiOutlineSearch className="text-6xl text-white mt-10" />,
            title: 'Browse Curated Tools',
            description:
                'Explore a handpicked library of the best AI tools across different categories — from writing and research to productivity and design. Use filters and tags to quickly find what suits your needs.',
            bgGradient: 'from-[#3A65B4] to-[#0794A3]',
        },
        {
            number: 2,
            icon: <AiOutlineRead className="text-6xl text-white mt-10" />,
            title: 'Learn What Each Tool Does',
            description:
                'Every tool comes with a concise description, feature tags, and a direct link to its site. Save time by comparing tools at a glance without endless searching.',
            bgGradient: 'from-[#0794A3] to-[#B00000]',
        },
        {
            number: 3,
            icon: <AiOutlineRocket className="text-6xl text-white mt-10" />,
            title: 'Click & Go',
            description:
                'Found a tool you like? Just click and get started instantly. Many tools are free to try — no sign-up required on our end.',
            bgGradient: 'from-[#BF8330] to-[#757575]',
        },
    ];

    return (
        <section className="py-32 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-extrabold text-center text-white mb-16">
                    How It Works
                </h2>
                <p className="text-lg text-gray-400 text-center mb-24">
                    Discover the perfect AI tools in just a few clicks.
                </p>
                <div className="space-y-60">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-16 ${
                                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Gradient Card */}
                            <div
                                className={`flex-1 bg-gradient-to-br ${step.bgGradient} rounded-3xl p-10 md:p-14`}
                                style={{
                                    boxShadow:
                                        '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 201, 255, 0.6), 0 0 60px rgba(132, 94, 194, 0.5)',
                                    transform: 'translateY(0px)',
                                }}
                            >
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold">
                                        {step.number}
                                    </div>
                                    <h3 className="text-4xl font-extrabold">{step.title}</h3>
                                </div>
                                <div className="flex justify-center">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Description Section */}
                            <div className="flex-1 text-white text-xl leading-relaxed">
                                {step.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;