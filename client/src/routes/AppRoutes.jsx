import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import UnderDevelopment from "../pages/UnderDevelopment/UnderDevelopment";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/UnderDevelopment" element={<UnderDevelopment />} />
    </Routes>
  );
}

export default AppRoutes;
