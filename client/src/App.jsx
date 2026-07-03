import "./App.css";

import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
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
      <Navbar />
      <AppRoutes />
      <Footer/>
    </>
  );
}

export default App;
