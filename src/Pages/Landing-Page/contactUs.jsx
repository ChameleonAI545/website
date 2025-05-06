import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Basic validation
        if (!formData.name || !formData.email.includes('@') || !formData.message) {
            setStatus('error');
            return;
        }

        try {
            const response = await fetch('https://formsubmit.co/ajax/rgblghtraytracer@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success === 'true') {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="py-32 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-5xl font-extrabold mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-400 mb-16">
                    We’d love to hear from you. Whether it’s feedback, questions, or new ideas — we’re all ears.
                </p>

                <div
                    className="rounded-3xl p-10 md:p-14 mx-auto max-w-3xl"
                    style={{

                        background:
                            'linear-gradient(90deg,rgba(26, 0, 173, 1) 0%, rgba(0, 166, 163, 1) 100%)',
                        transform: 'translateY(0px)',
                    }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/60 text-black border border-black/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/60 text-black border border-black/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/60 text-black border border-black/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-3 text-lg font-semibold rounded-lg bg-black text-white hover:bg-gray-800 transition"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 mt-4">❌ Please fill in all fields correctly.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;