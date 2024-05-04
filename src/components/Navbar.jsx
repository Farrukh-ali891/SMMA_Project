import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ handleButtonClick }) => {

    // NAVBAR OPNE & CLOSE STATE
    const [menuOpen, setmenuOpen] = useState(false);

    // ACTIVE-LINK STATE DEFAULT LINK "HOME"
    const [activeLink, setActiveLink] = useState(() => {
        return localStorage.getItem('activeLink') || ('home');
    });

    const handleActiveLink = (link) => {
        // SETTING LINK IN LOCALSTORAGE
        setActiveLink(link);

        if (link === "dashboard") {
            handleNavDisplayClick();
        }
    }

    const handleNavDisplayClick = () => {
        // SETTING VALUE TO FALSE TO DETERMINE WHICH NAVBAR & FOOTER TO BE SHOWN
        handleButtonClick();
    }

    useEffect(() => {
        // Updating localStorage when activeLink changes
        localStorage.setItem("activeLink", activeLink);
    }, [activeLink]);

    return (
        <header className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font">

            <div className="container mx-auto py-3">
                <nav className="flex justify-between">
                    <div className="p-2">
                        <Link to="/" onClick={() => handleActiveLink("home")}>
                            <img src="/src/assests/images/swirl marketing logo.png" className="lg:w-52 w-36" alt="swirl marketing logo" />
                        </Link>
                    </div>

                    <div onClick={() => setmenuOpen(!menuOpen)} className="text-3xl text-white absolute top-8 right-5 cursor-pointer lg:hidden">
                        {menuOpen ? <i className="ri-close-fill"></i> : <i className="ri-menu-line"></i>}
                    </div>

                    {/* Full SCREEN HEADER */}
                    <div className="text-white text-base tracking-wide uppercase">
                        <ul className="lg:flex lg:items-center h-full space-x-2 hidden" >
                            <li className="relative">
                                <Link className={`p-3 navHover active:text-yellow-50 ${activeLink === 'home' ? 'active' : ''}`}
                                    to="/" onClick={() => handleActiveLink("home")}>Home</Link>
                            </li>
                            <li className="relative">
                                <Link className={`p-3 navHover active:text-yellow-50 ${activeLink === 'services' ? 'active' : ''}`}
                                    to="/services" onClick={() => handleActiveLink("services")}>Services</Link>
                            </li>
                            <li className="relative">
                                <Link className={`p-3 navHover active:text-yellow-50 ${activeLink === 'partner' ? 'active' : ''}`}
                                    to="/partner" onClick={() => handleActiveLink("partner")}>Partner</Link>
                            </li>
                            <li className="relative">
                                <Link className={`p-3 navHover active:text-yellow-50 ${activeLink === 'about' ? 'active' : ''}`}
                                    to="/about" onClick={() => handleActiveLink("about")}>About US</Link>
                            </li>
                            <li className="relative">
                                <Link className={`p-3 navHover active:text-yellow-50 ${activeLink === 'contact' ? 'active' : ''}`}
                                    to="/contact" onClick={() => handleActiveLink("contact")}>Contact US</Link>
                            </li>
                            <li className="relative">
                                <Link className={`p-3 navHover active:text-yellow-50`}
                                    to="/dashboard" onClick={() => handleActiveLink("dashboard")}>Dashboard</Link>
                            </li>

                        </ul>
                    </div>

                    {/* Full SCREEN HEADER ENDS */}

                    {/* MOBILE SCREEN HEADER */}

                    <div className={`z-10 w-full absolute h-full bg-primary text-white text-base tracking-wide uppercase transition-all ease-in-out duration-700 left-0 ${menuOpen ? 'top-28' : 'top-[-150%]'} lg:hidden`}>
                        <ul className="pt-5 w-[90%] mx-auto space-y-2" >
                            <li>
                                <Link className="p-3 block hover:-translate-y-0 transition-all navLinks active:text-yellow-50" to="/">Home</Link>
                            </li>
                            <li >
                                <Link className="p-3 block hover:-translate-y-0 transition-all navLinks active:text-yellow-50" to="/services">Services</Link>
                            </li>
                            <li >
                                <Link className="p-3 block hover:-translate-y-0 transition-all navLinks active:text-yellow-50" to="/partner">Partner</Link>
                            </li>
                            <li >
                                <Link className="p-3 block hover:-translate-y-0 transition-all navLinks active:text-yellow-50" to="/about">About US</Link>
                            </li>
                            <li >
                                <Link className="p-3 block hover:-translate-y-0 transition-all navLinks active:text-yellow-50" to="/contact">Contact US</Link>
                            </li>
                            <li >
                                <Link className="p-3 block hover:-translate-y-0 transition-all navLinks active:text-yellow-50" to="/dashboard">Dashboard</Link>
                            </li>

                            <li className="">
                                <Link className="my-5 py-3 block text-center capitalize font-semibold bg-primary_dark cursor-pointer rounded-lg  hover:text-secondary_light active:bg-blue-900" to="/login">Login</Link>
                            </li>
                            <li className="">
                                <Link className="my-5 py-3 block text-center capitalize font-semibold bg-primary_dark cursor-pointer rounded-lg hover:text-secondary_light active:bg-blue-900" to="/signup">SignUp</Link>
                            </li>


                        </ul>
                    </div>

                    {/* MOBILE SCREEN HEADER ENDS*/}


                    <div className="mx-4">
                        <ul className="lg:flex lg:items-center h-full space-x-3 hidden">
                            <li>
                                <Link className="py-3 px-5 text-white text-base font-semibold tracking-wide bg-primary_dark cursor-pointer rounded-lg  hover:text-secondary_light active:bg-blue-900" to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="py-3 px-5 text-white text-base font-semibold tracking-wide bg-primary_dark cursor-pointer rounded-lg hover:text-secondary_light active:bg-blue-900" to="/signup">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar