import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { CircularProgress } from "@mui/material";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="loadingScreen">
        <CircularProgress />
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
