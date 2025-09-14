import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';


import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Onboarding from './Pages/Onboarding/Onboarding';
import Exam from './Pages/Exam/Exam';
import Result from './Pages/Result/Result';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Sections/Profile';
import Progress from './Pages/Dashboard/Sections/Progress';
import Welcome from './Pages/Dashboard/Sections/Welcome';
import ELearning from './Pages/Dashboard/Sections/ELearning';
import Community from './Pages/Dashboard/Sections/Community';
import Roadmap from './Pages/Dashboard/Sections/Roadmap';
import Resume from './Pages/Dashboard/Sections/Resume';
import Insights from './Pages/Dashboard/Sections/Insights'; 
import PioneerPlatform from './Pages/Dashboard/Sections/PioneerPlatform'; 

const App = () => {
  const location = useLocation();

  const hiddenRoutes = [
    '/login',
    '/signup',
    '/onboarding',
    '/exam',
    '/result',
    '/dashboard'
  ];

  const shouldHideNavbar = () =>
    hiddenRoutes.some((route) => location.pathname.toLowerCase().startsWith(route));

  return (
    <>
      {!shouldHideNavbar() && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/result" element={<Result />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Welcome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="progress" element={<Progress />} />
          <Route path="insights" element={<Insights />} />
          <Route path="elearning" element={<ELearning />} />
          <Route path="community" element={<Community />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="resume" element={<Resume />} />
          <Route path="pioneer" element={<PioneerPlatform />} /> 
        </Route>
      </Routes>
    </>
  );
};

export default App;