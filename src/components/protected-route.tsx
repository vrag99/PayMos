import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { isSignedIn } = useUser();
  return isSignedIn ? <Outlet /> : <Navigate to="/" />;
}
