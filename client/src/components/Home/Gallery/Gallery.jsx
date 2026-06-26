import "./Gallery.css";

import Grid from "@mui/material/Grid";

import gallery1 from "../../../assets/gallery-1.png";
import gallery2 from "../../../assets/gallery-2.png";
import gallery3 from "../../../assets/gallery-3.png";
import gallery4 from "../../../assets/gallery-4.png";

import whiteArrow from "../../../assets/white-arrow.png";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <img
            src={gallery1}
            alt="Campus 1"
            data-aos="fade-up"
            data-aos-delay="300"
          />

          <img
            src={gallery2}
            alt="Campus 2"
            data-aos="fade-up"
            data-aos-delay="400"
          />

          <img
            src={gallery3}
            alt="Campus 3"
            data-aos="fade-up"
            data-aos-delay="500"
          />

          <img
            src={gallery4}
            alt="Campus 4"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </Grid>
      </Grid>

      <button className="gallery-btn">
        See More Here
        <img src={whiteArrow} alt="Arrow Icon" />
      </button>
    </section>
  );
}

export default Gallery;
