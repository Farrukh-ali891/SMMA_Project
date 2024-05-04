import React, { useEffect, useState } from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


const NavbarDB = ({handleButtonClick}) => {
    //NAVBAR MOBILE MENU CLICK STATE
    const [menuOpen, setmenuOpen] = useState(false);

    // NAVBAR SUBLIST OPEN & CLOSE ON HOVER STATE
    const [subList1, setSubList1] = useState(false);
    const [subList2, setSubList2] = useState(false);

    // NAVBAR NOTIFICATIONS SUBLIST OPEN & CLOSE ON CLICK STATE
    const [bellList, setBellList] = useState(false);
    const [settingList, setSettingList] = useState(false);
    const [userList, setUserList] = useState(false);


    // FUNCTION TO SHOW ONE DROPDOWN AT A TIME & CLOSE OTHER
    const showRightList = (value) => {

        switch (value) {
            case 'bellList':
                setSettingList(false)
                setUserList(false)
                setmenuOpen(false)
                setBellList(!bellList)
                return console.log(value)

            case 'settingList':
                setBellList(false)
                setUserList(false)
                setmenuOpen(false)
                setSettingList(!settingList)
                return console.log(value)

            case 'userList':
                setBellList(false)
                setSettingList(false)
                setmenuOpen(false)
                setUserList(!userList)
                return console.log(value)

            case 'menuOpen':
                setBellList(false)
                setSettingList(false)
                setUserList(false)
                setmenuOpen(!menuOpen)
                return console.log(value)


            default:
                setBellList(false)
                setSettingList(false)
                setUserList(false)
                setmenuOpen(false)
        }
    }

    const handleNavDisplayClick = () => {
        // SETTING VALUE TO FALSE TO DETERMINE WHICH NAVBAR & FOOTER TO BE SHOWN
        localStorage.setItem("activeLink", "home");
        handleButtonClick();
    }

    // USING USEEFFECT HOOK TO CLOSE DROPDOWN WHEN CLICK OUTSIDE OF THE DROPDOWN WINDOW
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.close-DropDown')) {
                setBellList(false)
                setSettingList(false)
                setUserList(false)
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);




    return (
        <header className="bg-gradient-to-r from-primary_dark from-45% to-primary to-65% font-body_font">

            <div className="container mx-auto">
                <nav className="flex justify-between items-center mx-3">

                    {/* LEFT SECTION NAVBAR START */}
                    <div className="p-2">
                        <Link to="/" onClick={() => handleNavDisplayClick()} className="text-3xl text-white font-title_font font-semibold tracking-wide">Swirl Marketing</Link>
                    </div>
                    {/* LEFT SECTION NAVBAR ENDS */}


                    {/* NAVBAR MENU & CLOSE ICON START */}
                    <div onClick={() => showRightList("menuOpen")} className="text-3xl text-white absolute top-3 right-5 cursor-pointer lg:hidden">
                        {menuOpen ? <i className="ri-close-fill"></i> : <i className="ri-menu-line"></i>}
                    </div>
                    {/* NAVBAR MENU & CLOSE ICON ENDS */}


                    {/* Full SCREEN HEADER START */}

                    {/* ==CENTER SECTION NAVBAR START */}
                    <div className="text-white text-base tracking-wide capitalize">
                        <ul className="lg:flex lg:items-center h-full space-x-2 hidden" >
                            <li className='flex items-center relative' onMouseEnter={() => setSubList1(true)} onMouseLeave={() => setSubList1(false)}>

                                <Link to="/dashboard" className="px-3 py-5 flex items-center hover:-translate-y-1 transition-all navLinks"><i className="ri-dashboard-fill mr-1"></i>Dashboard</Link>
                                {/* DASHBOARD SUB LIST START */}
                                <ul className={`absolute -bottom-[5rem] left-0 min-w-52 h-fit shadow-lg origin-top transition-all duration-200 ease-in-out ${subList1 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                                    <li ><Link to="/dashboard-add-new-services" className="block bg-white text-primary py-2 pl-4 pr-12 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:text-secondary hover:bg-gray-100">Add New Services</Link></li>
                                    <li ><Link to="/dashboard-services-list" className="block bg-white text-primary py-2 pl-4 pr-12 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:text-secondary hover:bg-gray-100">Services List</Link></li>
                                </ul>
                                {/* DASHBOARD SUB LIST START */}
                            </li>
                            <li className='flex items-center'>
                                <Link className="px-3 py-3 flex items-center hover:-translate-y-1 transition-all navLinks" to="/dashboard-services"><i className="ri-macbook-fill mr-1"></i>Services</Link>
                            </li>
                            <li className='flex items-center relative' onMouseEnter={() => setSubList2(true)} onMouseLeave={() => setSubList2(false)}>

                                <Link className="px-3 py-5 flex items-center hover:-translate-y-1 transition-all navLinks" href=""><i className="ri-user-6-fill mr-1"></i>User</Link>
                                {/* USER SUB LIST START */}
                                <ul className={`absolute -bottom-[7.5rem] left-0 min-w-52 h-fit shadow-lg origin-top transition-all duration-200 ease-in-out ${subList2 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                                    <li ><Link to="/dashboard-login" className="block bg-white text-primary py-2 pl-4 pr-12 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:text-secondary hover:bg-gray-100">Login</Link></li>
                                    <li ><Link to="/dashboard-register" className="block bg-white text-primary py-2 pl-4 pr-12 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:text-secondary hover:bg-gray-100">Register</Link></li>
                                    <li ><Link to="/dashboard-forgot-password" className="block bg-white text-primary py-2 pl-4 pr-12 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:text-secondary hover:bg-gray-100">Forget Password</Link></li>

                                </ul>
                                {/* USER SUB LIST ENDS */}

                            </li>

                        </ul>
                    </div>
                    {/* ==CENTER SECTION NAVBAR ENDS */}

                    {/* ==RIGHT SECTION NAVBAR START */}
                    <div className="text-white text-base tracking-wide capitalize close-DropDown">
                        <ul className="lg:flex lg:items-center h-full space-x-2 hidden" >
                            <li className='flex items-center relative'>
                                <a className="text-2xl mx-1 cursor-pointer" onClick={() => showRightList("bellList")}><i className="ri-notification-2-fill"></i></a>

                                {/* BELL SUB LIST START */}
                                <ul className={`absolute shadow-lg text-black min-w-[22rem] h-fit -bottom-[22.5rem] -left-10 normal-case origin-top-left transition-all duration-300 ease-in-out ${bellList ? 'scale-100 ' : 'scale-0'} `}>
                                    <i className="ri-arrow-up-s-fill absolute text-4xl text-white -top-5 left-9"></i>
                                    <li><p className="py-4 px-6 text-gray-400">You have 3 Notifications</p></li>

                                    <li><a href="" className="p-4 flex items-center transition-all duration-300 ease-in-out hover:bg-gray-200">
                                        <i className="ri-mail-open-fill mx-3 bg-green-600 text-white rounded-full text-2xl w-10 h-10 flex items-center justify-center"></i>
                                        <div>
                                            <h1 className="text-gray-600 font-title_font text-sm">You got a email notification</h1>
                                            <p className="text-gray-400 text-[12px] tracking-tight">April 12, 2018 06:50</p>
                                        </div>
                                    </a></li>

                                    <li><a href="" className="p-4 flex items-center transition-all duration-300 ease-in-out hover:bg-gray-200">
                                        <i className="ri-file-user-fill mx-3 bg-red-500 text-white rounded-full text-2xl w-10 h-10 flex items-center justify-center"></i>
                                        <div>
                                            <h1>You got a email notification</h1>
                                            <p>April 12, 2018 06:50</p>
                                        </div>
                                    </a></li>

                                    <li><a href="" className="p-4 flex items-center transition-all duration-300 ease-in-out hover:bg-gray-200">
                                        <i className="ri-file-text-line mx-3 bg-orange-500 text-white rounded-full text-2xl w-10 h-10 flex items-center justify-center"></i>
                                        <div>
                                            <h1>You got a email notification</h1>
                                            <p>April 12, 2018 06:50</p>
                                        </div>
                                    </a></li>
                                    <li className="text-center py-4"><a href="" className="py-2 px-4 text-primary transition-all duration-200 ease-in-out hover:text-secondary">All notifications</a></li>

                                </ul>
                                {/* BELL SUB LIST ENDS */}

                            </li>

                            <li className='flex items-center relative'>
                                <a className="text-2xl mx-1 cursor-pointer" onClick={() => showRightList("settingList")}><i className="ri-settings-5-fill"></i></a>

                                <div className={`shadow-lg bg-white w-72 text-sm absolute top-12 -left-10 normal-case origin-top-left transition-all duration-300 ease-in-out ${settingList ? 'scale-100 ' : 'scale-0'}`}>
                                    <i className="ri-arrow-up-s-fill absolute text-4xl text-white -top-[1.4rem] left-9"></i>
                                    {/* SETTINGS SUB LIST 1 START */}
                                    <ul className="text-gray-600 text-base pt-2">
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-user-3-fill mr-3"></i>Account</a></li>
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-settings-5-fill mr-3"></i>Setting</a></li>
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-money-dollar-box-line mr-3"></i>Billing</a></li>
                                    </ul>
                                    {/* SETTINGS SUB LIST 1 ENDS */}

                                    <hr className="text-gray-400 border-b-[1px] my-2" />

                                    {/* SETTINGS SUB LIST 2 START */}
                                    <ul className="text-gray-600 text-base pb-2">
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-earth-fill mr-3"></i>Language</a></li>
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-map-pin-2-fill mr-3"></i>Location</a></li>
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-mail-fill mr-3"></i>Email</a></li>
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-notification-2-fill mr-3"></i>Notifications</a></li>
                                    </ul>

                                    {/* SETTINGS SUB LIST 2 ENDS */}
                                </div>


                            </li>
                            <li className='flex items-center relative'>

                                <a className="hover:text-gray-400 flex items-center text-base cursor-pointer" onClick={() => showRightList("userList")}>
                                    <img src="src/assests/images/team/haider.JPG" className="w-12 h-12 rounded-full mr-2" alt="" />Haider Ashraf<i className="ri-arrow-down-s-line ml-1"></i>
                                </a>


                                <div className={`shadow-lg bg-white w-72 text-sm absolute top-14 -left-10 normal-case origin-top-right transition-all duration-300 ease-in-out ${userList ? 'scale-100 ' : 'scale-0'}`}>
                                    <i className="ri-arrow-up-s-fill absolute text-4xl text-white -top-[1.4rem] right-20"></i>

                                    {/* USER INFO START */}
                                    <ul className="pt-4 pb-2">
                                        <li>
                                            <a href="" className="flex items-center px-2">
                                                <img src="src/assests/images/team/haider.JPG" className="w-16 h-16 rounded-full mr-4" alt="" />
                                                <div className="font-body_font space-y-1 normal-case text-gray-800">
                                                    <h1 className="text-base">Haider Ashraf</h1>
                                                    <p className="text-gray-400 text-sm">haidersomroo@gmail.com</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                    {/* USER INFO ENDS */}

                                    <hr className="text-gray-400 border-b-[1px] my-2" />

                                    {/* USER SUB LIST START */}
                                    <ul className="text-gray-600 text-base">
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-user-3-fill mr-3"></i>Account</a></li>
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-settings-5-fill mr-3"></i>Setting</a></li>
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-money-dollar-box-line mr-3"></i>Billing</a></li>
                                    </ul>

                                    {/* USER SUB LIST ENDS */}

                                    <hr className="text-gray-400 border-b-[1px] my-2" />

                                    {/* USER LOGOUT START */}
                                    <ul className="text-gray-600 text-base pb-2">
                                        <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-shut-down-line mr-3"></i>Logout</a></li>
                                    </ul>

                                    {/* USER LOGOUT ENDS */}
                                </div>

                            </li>

                        </ul>
                    </div>
                    {/* ==RIGHT SECTION NAVBAR ENDS */}


                    {/* Full SCREEN HEADER ENDS */}

                    {/* MOBILE SCREEN HEADER */}
                    <div className={`lg:hidden z-10 w-full h-full absolute pb-8 bg-primary text-white text-base tracking-wide uppercase transition-all ease-in-out duration-700 left-0 ${menuOpen ? 'top-[7.3rem] ' : 'top-[-100%]'}`}>
                        <ul className="pt-5 w-[90%] mx-auto" >

                            {/* DASHBOARD LINK SECTION START */}
                            <li>
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="/dashboard">
                                    <i className="ri-dashboard-fill mr-1"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li >
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="/dashboard-add-new-services">
                                    <MdOutlineSubdirectoryArrowRight className="ml-10 mr-1" />
                                    Add New Services
                                </Link>
                            </li>
                            <li >
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="/dashboard-services-list">
                                    <MdOutlineSubdirectoryArrowRight className="ml-10 mr-1" />
                                    Services List
                                </Link>
                            </li>
                            {/* DASHBOARD LINK SECTION ENDS */}

                            {/* SERVICES LINK SECTION START */}
                            <li>
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="/dashboard-services">
                                    <i className="ri-macbook-fill mr-1"></i>
                                    Services
                                </Link>
                            </li>
                            {/* DASHBOARD LINK SECTION ENDS */}

                            {/* USER LINK SECTION START */}
                            <li >
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="">
                                    <i className="ri-user-6-fill mr-1"></i>
                                    User
                                </Link>
                            </li>
                            <li >
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="/dashboard-login">
                                    <MdOutlineSubdirectoryArrowRight className="ml-10 mr-1" />
                                    Login
                                </Link>
                            </li>
                            <li >
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="/dashboard-register">
                                    <MdOutlineSubdirectoryArrowRight className="ml-10 mr-1" />
                                    Register
                                </Link>
                            </li>
                            <li >
                                <Link className="py-3 flex items-center hover:-translate-y-0 transition-all navLinks" to="/dashboard-forgot-password">
                                    <MdOutlineSubdirectoryArrowRight className="ml-10 mr-1" />
                                    Forget Password
                                </Link>
                            </li>
                            {/* DASHBOARD LINK SECTION ENDS */}
                        </ul>
                    </div>
                    {/* MOBILE SCREEN HEADER ENDS*/}
                </nav>
            </div>

            {/* USER ACCOUNT RIGHT SECTION MOBILE VIEW START */}
            <div className="text-primary bg-white py-2 shadow-xl text-base tracking-wide capitalize close-DropDown flex justify-end pr-6 lg:hidden">
                <ul className="flex items-center h-full space-x-2" >
                    <li className='flex items-center relative'>
                        <a className="text-2xl mx-1 cursor-pointer" onClick={() => showRightList("bellList")}><i className="ri-notification-2-fill"></i></a>

                        {/* BELL SUB LIST START */}
                        <div className={`shadow-lg bg-white w-72 text-sm absolute top-12 -left-10 normal-case rounded-t-md origin-top-left transition-all duration-300 ease-in-out ${bellList ? 'scale-100 ' : 'scale-0'} `}>
                            <ul className="border-t-4 border-primary rounded-t-md">
                                <i className="ri-arrow-up-s-fill absolute text-4xl text-primary -top-5 left-9"></i>
                                <li><p className="py-4 px-6 text-gray-400">You have 3 Notifications</p></li>

                                <li><a href="" className="p-4 flex items-center transition-all duration-300 ease-in-out hover:bg-gray-200">
                                    <i className="ri-mail-open-fill mx-3 bg-green-600 text-white rounded-full text-2xl w-10 h-10 flex items-center justify-center"></i>
                                    <div>
                                        <h1 className="text-gray-600 font-title_font">You got a email notification</h1>
                                        <p className="text-gray-400 text-[12px] tracking-tight">April 12, 2018 06:50</p>
                                    </div>
                                </a></li>

                                <li><a href="" className="p-4 flex items-center transition-all duration-300 ease-in-out hover:bg-gray-200">
                                    <i className="ri-file-user-fill mx-3 bg-red-500 text-white rounded-full text-2xl w-10 h-10 flex items-center justify-center"></i>
                                    <div>
                                        <h1 className="text-gray-600 font-title_font">Your account has been blocked</h1>
                                        <p className="text-gray-400 text-[12px] tracking-tight">April 12, 2018 06:50</p>
                                    </div>
                                </a></li>

                                <li><a href="" className="p-4 flex items-center transition-all duration-300 ease-in-out hover:bg-gray-200">
                                    <i className="ri-file-text-line mx-3 bg-orange-500 text-white rounded-full text-2xl w-10 h-10 flex items-center justify-center"></i>
                                    <div>
                                        <h1 className="text-gray-600 font-title_font">You got a new file</h1>
                                        <p className="text-gray-400 text-[12px] tracking-tight">April 12, 2018 06:50</p>
                                    </div>
                                </a></li>
                                <li className="text-center py-4"><a href="" className="py-2 px-4 text-primary transition-all duration-200 ease-in-out hover:text-secondary">All notifications</a></li>

                            </ul>
                        </div>
                        {/* BELL SUB LIST ENDS */}

                    </li>

                    <li className='flex items-center relative'>
                        <a className="text-2xl mx-1 cursor-pointer" onClick={() => showRightList("settingList")}><i className="ri-settings-5-fill"></i></a>

                        {/* SETTINGS SUB LIST START */}
                        <div className={`border-t-4 border-primary shadow-lg bg-white w-72 text-sm absolute top-12 -left-20 rounded-t-md normal-case origin-top-left transition-all duration-300 ease-in-out ${settingList ? 'scale-100 ' : 'scale-0'}`}>
                            <i className="ri-arrow-up-s-fill absolute text-4xl text-primary -top-[1.5rem] left-[4.8rem]"></i>
                            {/* SETTINGS SUB LIST 1 START */}
                            <ul className="text-gray-600 text-base pt-2">
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-user-3-fill mr-3"></i>Account</a></li>
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-settings-5-fill mr-3"></i>Setting</a></li>
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-money-dollar-box-line mr-3"></i>Billing</a></li>
                            </ul>
                            {/* SETTINGS SUB LIST 1 ENDS */}

                            <hr className="text-gray-400 border-b-[1px] my-2" />

                            {/* SETTINGS SUB LIST 2 START */}
                            <ul className="text-gray-600 text-base pb-2">
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-earth-fill mr-3"></i>Language</a></li>
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-map-pin-2-fill mr-3"></i>Location</a></li>
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-mail-fill mr-3"></i>Email</a></li>
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-notification-2-fill mr-3"></i>Notifications</a></li>
                            </ul>

                            {/* SETTINGS SUB LIST 2 ENDS */}
                        </div>
                        {/* SETTINGS SUB LIST ENDS */}

                    </li>
                    <li className='flex items-center relative'>

                        <a className="hover:text-gray-400 flex items-center text-base cursor-pointer text-gray-800" onClick={() => showRightList("userList")}>
                            <img src="src/assests/images/team/haider.JPG" className="w-12 h-12 rounded-full mr-2" alt="" />Haider Ashraf<i className="ri-arrow-down-s-line ml-1"></i>
                        </a>

                        {/* USER SUB LIST START */}
                        <div className={`border-t-4 border-primary rounded-t-md shadow-lg bg-white w-72 text-sm absolute top-14 -left-32 normal-case origin-top-right transition-all duration-300 ease-in-out ${userList ? 'scale-100 ' : 'scale-0'}`}>
                            <i className="ri-arrow-up-s-fill absolute text-4xl text-primary -top-[1.5rem] right-12"></i>

                            {/* USER INFO START */}
                            <ul className="pt-4 pb-2">
                                <li>
                                    <a href="" className="flex items-center px-2">
                                        <img src="src/assests/images/team/haider.JPG" className="w-16 h-16 rounded-full mr-4" alt="" />
                                        <div className="font-body_font space-y-1 normal-case text-gray-800">
                                            <h1 className="text-base">Haider Ashraf</h1>
                                            <p className="text-gray-400 text-sm">haidersomroo@gmail.com</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                            {/* USER INFO ENDS */}

                            <hr className="text-gray-400 border-b-[1px] my-2" />

                            {/* USER SUB LIST START */}
                            <ul className="text-gray-600 text-base">
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-user-3-fill mr-3"></i>Account</a></li>
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-settings-5-fill mr-3"></i>Setting</a></li>
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-money-dollar-box-line mr-3"></i>Billing</a></li>
                            </ul>

                            {/* USER SUB LIST ENDS */}

                            <hr className="text-gray-400 border-b-[1px] my-2" />

                            {/* USER LOGOUT START */}
                            <ul className="text-gray-600 text-base pb-2">
                                <li><a href="" className="flex items-center py-3 pl-4 transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><i className="ri-shut-down-line mr-3"></i>Logout</a></li>
                            </ul>

                            {/* USER LOGOUT ENDS */}
                        </div>
                        {/* USER SUB LIST ENDS */}


                    </li>

                </ul>
            </div>
            {/* USER ACCOUNT RIGHT SECTION MOBILE VIEW ENDS */}

        </header>
    )
}

export default NavbarDB