import "./Achievement.css";

import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

function Achievement() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [students, setStudents] = useState(0);
  const [experts, setExperts] = useState(0);
  const [placements, setPlacements] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const studentInterval = setInterval(() => {
      setStudents((prev) => (prev < 10000 ? prev + 100 : 10000));
    }, 20);

    const expertInterval = setInterval(() => {
      setExperts((prev) => (prev < 500 ? prev + 5 : 500));
    }, 20);

    const placementInterval = setInterval(() => {
      setPlacements((prev) => (prev < 100 ? prev + 5 : 100));
    }, 30);

    return () => {
      clearInterval(studentInterval);
      clearInterval(expertInterval);
      clearInterval(placementInterval);
    };
  }, [inView]);

  return (
    <section ref={ref} className="achievement">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <div
            className="counter-card"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h1>{students.toLocaleString()}+</h1>
            <p>Students Enrolled</p>
          </div>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <div
            className="counter-card"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h1>{experts}+</h1>
            <p>Expert Faculty</p>
          </div>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <div
            className="counter-card"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <h1>{placements}%</h1>
            <p>Placement Rate</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Achievement;