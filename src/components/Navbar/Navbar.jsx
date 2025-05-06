import React, { useState } from 'react';
import './Navbar.css';
import companyLogo from "../../assets/icons/comapanyLogo.png";
import accountCircle from "../../assets/icons/account_circle.png";
import LogIn from "../../assets/icons/login-icon.png";
import { Menu, X } from 'lucide-react'; // using lucide icons, install with `npm install lucide-react`

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={companyLogo} alt="Company Logo" style={{ width: "50px", height: "50px" }} />
            </div>

            {/* Hamburger icon for small screens */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Normal buttons for medium and up */}
            <div className={`flex flex-row gap-2 justify-end items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
                <button className="log-in-button flex pr-3">
                    Login
                    <img src={LogIn} alt="Log In" style={{ width: '24px', height: '24px', marginLeft: '4px' }} />
                </button>
                <button className="create-account-button">
                    Join now
                    <img src={accountCircle} alt="Account Circle" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;