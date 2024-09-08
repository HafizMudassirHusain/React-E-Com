import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Import Firebase authentication

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
