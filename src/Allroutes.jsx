import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Scrolltotop from './ScrolltoTop'
import Footer from './Footer'
import Homepage from './Homepage'
import Aboutus from './Aboutus'
import Service from './Service'
import TrainingPage from './TrainingPage'
import Faq from './Faq'
import Contactus from './Contactus'
import JobListings from './JobListings'
import JobDescription from './JobDescription'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './Terms&Conditions'
import Whatsapp from './Whatsapp'


const AllRoutes = () => {
  return (
    <div>
      <Router>  


        <Scrolltotop />
        <Navbar />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Service />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/job/:id" element={<JobDescription />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>


        <Footer />
      </Router>
    </div>
  )
}

export default AllRoutes;