import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const { isAuthenticate, isLoading } = useAuth();

  if(isLoading) return null;

  if (isAuthenticate) return <Navigate to={"/profile"} replace />;
  return children;
};

export default AuthRoute;
