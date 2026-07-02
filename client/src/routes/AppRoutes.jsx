import { Routes, Route } from "react-router-dom";
import Career from "../pages/CareerPage/Career";
import HomePage from "../pages/HomePage/HomePage";
import UnderDevelopment from "../pages/UnderDevelopment/UnderDevelopment";
import AdminPanel from "../pages/AdminPanel/AdminPanel";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/UnderDevelopment" element={<UnderDevelopment />} />

      <Route path="/career" element={<Career />} />

      <Route path="career/admin/dashboard" element={<AdminPanel />} />
    </Routes>
  );
}

export default AppRoutes;
