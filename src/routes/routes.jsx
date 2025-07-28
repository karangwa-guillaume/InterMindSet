import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home" 
import StudyAbroad from "../pages/services/StudyAbroad"
import About from "../pages/About"
import ServicesPage from "../pages/ServicesPage"
import Contact from "../pages/Contact"
import CulturalExchange from "../pages/services/CulturalExchange"
import TravelBooking from "../pages/services/TravelBooking"
import AirTicketing from "../pages/services/AirTicketing"
import VisaAssistance from "../pages/services/VisaAssistance"
import ApplicationForm from "../pages/apply/ApplicationForm"
import AdminAuth from "../pages/admin/AdminAuth"
//import ProtectedRoute from "../components/Admin/ProtectedRoute"
import Dashboard from "../pages/admin/Dashboard"
import Gallery from "../pages/Gallery"

const RouteElements = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/studyAbroad" element={<StudyAbroad/>}/>
      <Route path="/servicesPage" element={<ServicesPage/>}/>
      <Route path="/services/culturalExchange" element={<CulturalExchange />} />
      <Route path="/services/visaAssistance" element={<VisaAssistance />} /> 
      <Route path="/services/travelBooking" element={<TravelBooking />} />
      <Route path="/services/airTicketing" element={<AirTicketing />} /> 
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/apply" element={<ApplicationForm/>}/>
      <Route path="/admin" element={<AdminAuth />} />
      <Route path="/admin/adminAuth" element={<AdminAuth />} />
      {/* <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/> */}
      <Route path="/admin/dashboard" element={<Dashboard />}/>
      <Route path="/gallery" element={<Gallery/>}/>
      
    </Routes>
  )
}


export default RouteElements
