import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, initialLoading } = useAuth();
  if (initialLoading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}