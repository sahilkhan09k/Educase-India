import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'; // <- updated (WelcomePage.js)
import SigninPage from './Pages/SigninPage'; // <- updated (SigninPage.js)
import { Toaster } from 'react-hot-toast';
import ProfilePage from './Pages/ProfilePage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;

