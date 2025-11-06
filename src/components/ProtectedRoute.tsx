// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'EDITOR' | 'ADMIN';
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#121212]">
        <div className="text-4xl font-bold gradient-text loading-dots">Loading Admin...</div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login BUT remember where they were trying to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole) {
    const roleHierarchy = {
      USER: 1,
      EDITOR: 2,
      ADMIN: 3,
    };
    const userRoleLevel = roleHierarchy[user.role as keyof typeof roleHierarchy] || 0;
    const requiredLevel = roleHierarchy[requiredRole];

    if (userRoleLevel < requiredLevel) {
      return (
        <div className="flex h-screen items-center justify-center bg-[#121212]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
            <p className="text-xl text-gray-400">You need {requiredRole} privileges</p>
            <button
              onClick={() => window.history.back()}
              className="mt-8 px-6 py-3 bg-cyan-600 rounded-full hover:scale-105 transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
}