import "./Testimonials.css";

import { useEffect, useState } from "react";

import user1 from "../../../assets/user-1.png";
import user2 from "../../../assets/user-2.png";
import user3 from "../../../assets/user-3.png";
import user4 from "../../../assets/user-4.png";

import backButton from "../../../assets/back-icon.png";
import nextButton from "../../../assets/next-icon.png";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="testimonial-section"
      id="testimonials"
    >
      <button
        className="arrow-btn"
        onClick={prevSlide}
      >
        <img
          src={backButton}
          alt="Previous Slide"
        />
      </button>

      <div className="slider">
        <div
          className="slide-track"
          style={{
            transform: `translateX(-${index * 50}%)`,
          }}
        >
          {/* Card 1 */}
          <div className="comment-card">
            <div className="user-info">
              <img
                src={user1}
                alt="Emily Williams"
              />

              <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
              </div>
            </div>

            <p>
              Choosing to pursue my degree at
              Edusity was one of the best
              decisions I've ever made. The
              supportive community and facilities
              exceeded my expectations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="comment-card">
            <div className="user-info">
              <img
                src={user2}
                alt="William Jackson"
              />

              <div>
                <h3>William Jackson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>

            <p>
              The professors and learning
              environment helped me grow both
              academically and professionally.
            </p>
          </div>

          {/* Card 3 */}
          <div className="comment-card">
            <div className="user-info">
              <img
                src={user3}
                alt="James Smith"
              />

              <div>
                <h3>James Smith</h3>
                <span>Edusity, Canada</span>
              </div>
            </div>

            <p>
              I met amazing people here and
              gained valuable experiences that
              prepared me for my career.
            </p>
          </div>

          {/* Card 4 */}
          <div className="comment-card">
            <div className="user-info">
              <img
                src={user4}
                alt="Sophia Johnson"
              />

              <div>
                <h3>Sophia Johnson</h3>
                <span>Edusity, UK</span>
              </div>
            </div>

            <p>
              The campus atmosphere and quality
              education made my university
              journey unforgettable.
            </p>
          </div>
        </div>
      </div>

      <button
        className="arrow-btn"
        onClick={nextSlide}
      >
        <img
          src={nextButton}
          alt="Next Slide"
        />
      </button>
    </section>
  );
}

export default Testimonials;