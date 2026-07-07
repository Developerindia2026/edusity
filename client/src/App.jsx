import "./App.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {<Navbar />}
      <AppRoutes />
      {<footer />}
    </>
  );
}

export default App;
