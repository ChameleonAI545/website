import React from 'react';
import './Navbar.css'; // Create a Navbar.css file for styling
import companyLogo from "../../assets/icons/comapanyLogo.png";
import accountCircle from "../../assets/icons/account_circle.png";
import LogIn from "../../assets/icons/login-icon.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={companyLogo} alt="Company Logo" style = {{width: "40px", height: "40px"}}/>
            </div>
            <ul className="navbar-nav flex flex-row gap-2 justify-end items-center">
                <li className="nav-item">
                    <a href="#" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full">
                        Get Started with AI
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full">
                        About us
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full">
                        How it works
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
                        Contact us
                    </a>
                </li>
            </ul>

            <div className="flex flex-row gap-2 justify-end items-center ">
                <button className="log-in-button flex padding-top: 10px pr-3" >
                    Sign In
                    <img src={LogIn} alt="Log In" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginLeft: '4px' }}/>
                </button>
                <button className="create-account-button">
                    Sign Up
                    <img src={accountCircle} alt="Account Circle" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginLeft: '8px' }}/>

                </button>
            </div>



        </nav>
    );
}

export default Navbar;