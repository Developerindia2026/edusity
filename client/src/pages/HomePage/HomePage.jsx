import Hero from "../../components/Home/Hero/Hero";
import Cards from "../../components/Home/Cards/Cards";
import About from "../../components/Home/About/About";
import Gallery from "../../components/Home/Gallery/Gallery";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Achievement from "../../components/Home/Achievement/Achievement";
import Contact from "../../components/Home/Contact/Contact";
import Title from "../../components/Title/Title";

function HomePage() {
  return (
    <>

      <Hero />

      <Title title="Our Program" mainTitle="What We Offer" />
      <Cards />

      <About />

      <Title title="Gallery" mainTitle="Campus Photos" />
      <Gallery />

      <Title title="Testimonials" mainTitle="What Students Say" />
      <Testimonials />

      <Title title="Our Achievements" mainTitle="Commitment To Excellence" />
      <Achievement />

      <Title title="Contact Us" mainTitle="Get In Touch" />
      <Contact />
    </>
  );
}

export default HomePage;
