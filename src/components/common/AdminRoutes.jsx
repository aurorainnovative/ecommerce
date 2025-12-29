import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminRoutes = () => {
  const { isAuthenticate, isLoading, user } = useAuth();
  if(isLoading) return null;

  if (!isAuthenticate) return <Navigate to={"/login"} replace />;

  if(user.role !== "ADMIN") return <Navigate to={"/profile"} />
  
  return <Outlet/>;
};

export default AdminRoutes;
