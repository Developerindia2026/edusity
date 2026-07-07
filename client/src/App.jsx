import "./App.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import PageLoading from "./components/PageLoading/PageLoading";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const hideLocation = location.pathname.startsWith("/admin/login");

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  //PAGE LOADER
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      AOS.refresh();
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <>
          {!hideLocation && <Navbar />}
          <AppRoutes />
          {!hideLocation && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
