import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // 1. Wait for AuthContext to finish checking localStorage
  if (loading) {
    return <LoadingSpinner message="Checking Chef credentials..." />;
  }

  // 2. No user found? Kick them back to Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. Authenticated? Let them in
  return children;
};

export default ProtectedRoute;