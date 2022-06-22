import React from 'react';
import './index.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import RegisterAdmin from './Components/RegisterAdmin';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Specialties from './Components/Specialties';
import Specialtyform from './Pages/Specialtyform';
import Staff from './Components/Staff';
import Events from './Components/Events';
import Comments from './Components/Comments';
import Replies from './Components/Replies';
import Staffform from './Pages/Staffform';
import Research from './Components/Research';
import Researchform from './Pages/Researchform';
import Eventsform from './Pages/Eventsform';
import Navbar from './Components/Navbar';
import Tips from './Components/Tips';
import Tipsform from './Pages/Tipsform';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registerAdmin" element={<RegisterAdmin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/specialty" element={<Specialties />} />
      <Route path="/specialtyForm" element={<Specialtyform />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/events" element={<Events />} />
      <Route path="/eventsForm" element={<Eventsform />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/replies" element={<Replies />} />
      <Route path="/staffForm" element={<Staffform />} />
      <Route path="/research" element={<Research />} />
      <Route path="/researchform" element={<Researchform />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/tipsform" element={<Tipsform />} />
      
    </Routes>
  );
}

export default App;
