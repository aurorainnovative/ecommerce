import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AuthRoute = () => {
  const { isAuthenticate, isLoading } = useAuth();

  if(isLoading) return null;

  if (isAuthenticate) return <Navigate to={"/profile"} replace />;
  return <Outlet/>;
};

export default AuthRoute;
