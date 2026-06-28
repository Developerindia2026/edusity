import { Routes, Route } from "react-router-dom";
import Career from "../pages/CareerPage/Career";
import HomePage from "../pages/HomePage/HomePage";
import UnderDevelopment from "../pages/UnderDevelopment/UnderDevelopment";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/UnderDevelopment" element={<UnderDevelopment />} />

      <Route path="/Career" element={<Career />} />
    </Routes>
  );
}

export default AppRoutes;
