import React from 'react'

const ResultsPage = () => {
    return (
        <div className="results-container">
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="/src/assets/chamelionVideo-wm.mp4" type="video/mp4" />
                    {/* Make sure the path to your video is correct */}
                </video>
                <div className="video-overlay"></div>
                <header className="results-header">
                    <h1>Your AI prey is just waiting to be caught</h1>
                </header>
            </div>

            <main className="results-main">
                <section className="about-us">
                    <h2>About Us</h2>
                    <p>
                        This application is designed to [Explain how your application
                        works here]. We leverage the power of AI to [Mention key features and
                        benefits]. Our goal is to [State the purpose or mission of your
                        application].
                    </p>
                </section>
            </main>
        </div>
    );
}
export default ResultsPage
