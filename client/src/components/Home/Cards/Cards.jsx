import "./Cards.css";

import card1 from "../../../assets/program-1.png";
import card2 from "../../../assets/program-2.png";
import card3 from "../../../assets/program-3.png";

import cardHover1 from "../../../assets/program-icon-1.png";
import cardHover2 from "../../../assets/program-icon-2.png";
import cardHover3 from "../../../assets/program-icon-3.png";

function Cards() {
  return (
    <div className="cards" id="program">
      <div
        className="card"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img src={card1} alt="Program 1" />

        <div className="overlay">
          <img
            src={cardHover1}
            alt="Graduation Degree"
          />

          <h3>Graduation Degree</h3>
        </div>
      </div>

      <div
        className="card"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <img src={card2} alt="Program 2" />

        <div className="overlay">
          <img
            src={cardHover2}
            alt="Masters Degree"
          />

          <h3>Masters Degree</h3>
        </div>
      </div>

      <div
        className="card"
        data-aos="fade-up"
        data-aos-delay="550"
      >
        <img src={card3} alt="Program 3" />

        <div className="overlay">
          <img
            src={cardHover3}
            alt="Post Graduation"
          />

          <h3>Post Graduation</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;