// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';          
import WelcomePage from './pages/WelcomePage';                    
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/LoginPgae" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignUpPage />} />

        {/* Protected routes (wrap these in ProtectedRoute if desired) */}
        <Route path="/ExplorePage" element={<ExplorePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </MainLayout>
  );
}
