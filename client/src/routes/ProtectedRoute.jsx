import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // fetch token
  const token = localStorage.getItem("edusity_admin_token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
