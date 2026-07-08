import { Routes, Route } from "react-router-dom";
import Career from "../pages/CareerPage/Career";
import HomePage from "../pages/HomePage/HomePage";
import UnderDevelopment from "../pages/UnderDevelopment/UnderDevelopment";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import ProtectedRoute from "./ProtectedRoute";
import LoginAdmin from "../pages/AdminPanel/Login";
import AboutUs from "../components/AboutPage/AboutUs";
import UnknowPage from "../pages/404Page/404Page";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/career" element={<Career />} />

      <Route path="/programs" element={<UnderDevelopment/>} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="*" element={<UnknowPage/>}/>

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />

      <Route path="/admin/login" element={<LoginAdmin />} />
    </Routes>
  );
}

export default AppRoutes;
