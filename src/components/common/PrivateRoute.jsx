import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticate, isLoading } = useAuth();

  if(isLoading) return null;

  if (!isAuthenticate) return <Navigate to={"/login"} replace />;
  return children;
};

export default PrivateRoute;
