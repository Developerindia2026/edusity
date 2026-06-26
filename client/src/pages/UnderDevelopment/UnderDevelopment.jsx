import "./UnderDevelopment.css";
import LottieModule from "lottie-react";
import developerAnimation from "../../assets/underDevelopmentIcon.json";
const Lottie = LottieModule.default;

function UnderDevelopment() {
  return (
    <section className="under-development-container">
      <Lottie
        animationData={developerAnimation}
        loop={true}
        className="developer-animation"
        style={{ width: "300px" }}
      />

      <div className="text-section">
        <h3>The Page Is Currently</h3>

        <h1>Under Development 🚧</h1>

        <p>
          We are working hard to bring this page online as soon as possible.
          Please check back later.
        </p>
      </div>
    </section>
  );
}

export default UnderDevelopment;
