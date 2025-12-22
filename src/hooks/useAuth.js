import { useContext } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const { isAuthenticate, user, updateLoginStatus, handleLogout } = useContext(AuthContext);

  return { isAuthenticate, user, updateLoginStatus, handleLogout };
};
