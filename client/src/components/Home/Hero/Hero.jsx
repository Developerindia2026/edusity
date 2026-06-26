import "./Hero.css";

import heroImage from "../../../assets/hero.png";
import darkArrow from "../../../assets/dark-arrow.png";

function Hero() {
  return (
    <section
      className="hero-section"
      id="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We Ensure Better Education
            For A Better World
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our cutting-edge curriculum is designed
            to empower students with the knowledge,
            skills, and experiences needed to excel
            in the dynamic field of education.
          </p>

          <button
            className="hero-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Explore More
            <img
              src={darkArrow}
              alt="Arrow Icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;