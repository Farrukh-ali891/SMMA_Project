import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// CSS IMPORING
import "./assests/css/custom.css"

// MAIN PAGES
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Partner from './pages/Partner'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Service from './pages/Service'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

// SERVICES PAGES
import BrandMarketing from './sevices_pages/BrandMarketing'
import ContentCreator from './sevices_pages/ContentCreator'
import DigitalMarketing from './sevices_pages/DigitalMarketing'
import EmailMarketing from './sevices_pages/EmailMarketing'
import Fiverr from './sevices_pages/Fiverr'
import GoogleAds from './sevices_pages/GoogleAds'
import OurTeamService from './sevices_pages/OurTeamService'
import Popular from './sevices_pages/Popular'
import UpWork from './sevices_pages/UpWork'
import Youtube from './sevices_pages/Youtube'

// DASHBOARD PAGES
import NavbarDB from './dashboard/NavbarDB'
import CopyRightDB from './dashboard/CopyRightDB'
import Dashboard from './dashboard/Dashboard'
import AddNewServices from './dashboard/AddNewServices'
import ServicesList from './dashboard/ServicesList'
import LoginDB from './dashboard/LoginDB'
import RegisterDB from './dashboard/RegisterDB'
import ForgetPassDB from './dashboard/ForgetPassDB'
import ServicesDB from './dashboard/ServicesDB'


const App = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const handleButtonClick = () => {
    setShowNavbar(!showNavbar);
    setShowFooter(!showFooter);
  };

  return (

    <BrowserRouter>

      {showNavbar ? <Navbar handleButtonClick={handleButtonClick} /> : <NavbarDB handleButtonClick={handleButtonClick} />}

      <Routes>

        {/* MAIN PAGE ROUTES*/}
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* SERVICES PAGE ROUTES */}
        <Route path='/services/digitalmarketing' element={<DigitalMarketing />} />
        <Route path='/services/contentcreator' element={<ContentCreator />} />
        <Route path='/services/brandmarketing' element={<BrandMarketing />} />
        <Route path='/services/emailmarketing' element={<EmailMarketing />} />
        <Route path='/services/fiver' element={<Fiverr />} />
        <Route path='/services/googleads' element={<GoogleAds />} />
        <Route path='/services/ourteam' element={<OurTeamService />} />
        <Route path='/services/popular' element={<Popular />} />
        <Route path='/services/youtube' element={<Youtube />} />
        <Route path='/services/upwork' element={<UpWork />} />

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-services" element={<ServicesDB />} />
        <Route path="/dashboard-add-new-services" element={<AddNewServices />} />
        <Route path="/dashboard-services-list" element={<ServicesList />} />
        <Route path="/dashboard-login" element={<LoginDB />} />
        <Route path="/dashboard-register" element={<RegisterDB />} />
        <Route path="/dashboard-forgot-password" element={<ForgetPassDB />} />

      </Routes>

      {showFooter ? <Footer /> : <CopyRightDB/>}

    </BrowserRouter>
  )
}

export default App