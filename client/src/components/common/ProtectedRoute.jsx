import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // 1. If we are still checking the "Pantry" (localStorage), show a loader
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <h2>Checking Chef Credentials...</h2>
      </div>
    );
  }

  // 2. If no Chef is logged in, send them back to the Login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. If authenticated, allow them inside
  return children;
};

export default ProtectedRoute;