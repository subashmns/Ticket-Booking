import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;  // Redirect to login page if not authenticated
  }

  return children;  // Render the component if authenticated
};

export default ProtectedRoute;
