import "./404Page.css";
import LottieModule from "lottie-react";
import animationData from "../../assets/unknow-page.json";
const Lottie = LottieModule.default;

import { Link } from "react-router-dom"; // Agar React Router use kar rhe ho toh, nahi toh <a> tag use kar sakt

function UnknowPage() {
  return (
    <div className="error-page-container">
      {/* Background Subtle Glows */}
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>

      <div className="error-content-wrapper">
        {/* Lottie Animation Wrapper */}
        <div className="lottie-wrapper">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Text Content */}
        <div className="error-text-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Oops! Page Not Found</h2>
          <p className="error-description">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable. Let's get you back on track!
          </p>

          {/* Action Button */}
          <Link to="/" className="back-home-btn">
            <span className="btn-text">Back to Home</span>
            <span className="btn-icon">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UnknowPage;