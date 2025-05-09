import React from 'react';
import "./App.css";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/Landing-Page/Landing-Page";
import ResultsPage from "./Pages/Search/Results-Page";
import DiscoveryPage from "./Pages/Home/Discovery-Page";



import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/ResultsPage" element={<ResultsPage />} />
                <Route path="/DiscoveryPage" element={<DiscoveryPage />} />
            </Routes>
        </Router>
    );
}

export default App;