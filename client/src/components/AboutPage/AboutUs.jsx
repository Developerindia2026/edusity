import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  // ===============================
  // States
  let [students, setStudents] = useState(0);
  let [placements, setPlacements] = useState(0);
  let [industry, setIndustry] = useState(0);
  let [experts, setExperts] = useState(0);
  // ===============================

  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  //timer
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (!inView) return;

    const studentInterval = setInterval(() => {
      setStudents((current) => {
        if (current >= 15000) {
          clearInterval(studentInterval);
          return 15000;
        }
        return current + 150;
      });
    }, 20);

    const placementInterval = setInterval(() => {
      setPlacements((current) => {
        if (current >= 98) {
          clearInterval(placementInterval);
          return 98;
        }
        return current + 1;
      });
    }, 25);

    const industryInterval = setInterval(() => {
      setIndustry((current) => {
        if (current >= 50) {
          clearInterval(industryInterval);
          return 50;
        }
        return current + 1;
      });
    }, 30);

    const expertInterval = setInterval(() => {
      setExperts((current) => {
        if (current >= 120) {
          clearInterval(expertInterval);
          return 120;
        }
        return current + 2;
      });
    }, 20);

    return () => {
      clearInterval(studentInterval);
      clearInterval(placementInterval);
      clearInterval(industryInterval);
      clearInterval(expertInterval);
    };
  }, [inView]);

  // ===============================
  // Core Methodology Data
  // ===============================

  const methodology = [
    {
      title: "Tech Driven Classrooms",
      icon: "💻",
      description:
        "Our classrooms are fully equipped with smart boards, digital learning systems, high-speed internet and interactive teaching methods to make learning more engaging.",
    },
    {
      title: "Industry Mentorship",
      icon: "👨‍💼",
      description:
        "Students get guidance from experienced industry professionals through workshops, seminars and live project mentoring.",
    },
    {
      title: "Global Lab Infrastructure",
      icon: "🌍",
      description:
        "Modern computer labs, cloud infrastructure and advanced engineering labs help students gain practical experience.",
    },
  ];

  // ===============================
  // FAQ Data
  // ===============================

  const faqs = [
    {
      question: "Is Edusity globally recognized?",
      answer:
        "Yes. Our academic programs follow recognized educational standards and prepare students for higher education as well as global careers.",
    },
    {
      question: "Does Edusity provide placement support?",
      answer:
        "Yes. Students receive career guidance, aptitude training, mock interviews and placement opportunities through our placement cell.",
    },
    {
      question: "Can students work on research projects?",
      answer:
        "Absolutely. Students can participate in research programs, innovation labs and faculty-guided projects.",
    },
  ];

  return (
    <div className="about-page">
      {/* ===============================
            HERO SECTION
      =============================== */}
      <section className="about-hero">
        <div 
          className="about-hero-content" 
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <span>WELCOME TO EDUSITY</span>
          <h1>
            Empowering Minds,
            <br />
            Building Better Futures
          </h1>
          <p>
            Discover a place where education, innovation and practical learning
            come together to prepare students for successful careers.
          </p>
        </div>
      </section>

      {/* ===============================
            ABOUT SECTION
      =============================== */}
      <section className="about-section">
        <div className="about-container">
          {/* Left */}
          <div 
            className="about-left" 
            data-aos="fade-right" 
            data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800"
              alt="Campus"
              className="about-img1"
            />
          </div>

          {/* Right */}
          <div 
            className="about-right" 
            data-aos="fade-left" 
            data-aos-duration="1000"
          >
            <span>WHO WE ARE</span>
            <h2>
              A Trusted Institution
              <br />
              Focused On Student Success
            </h2>
            <p className="highlight-text">
              We believe education should prepare students for real-world
              challenges instead of only classroom examinations.
            </p>
            <p>
              Edusity provides an environment where students learn through
              practical projects, modern technology and industry exposure. Our
              goal is to develop confident professionals who are ready for
              future opportunities.
            </p>

            <div className="vision-mission">
              <div 
                className="vision-box" 
                data-aos="zoom-in" 
                data-aos-delay="200" 
                data-aos-duration="800"
              >
                <h4>👁️ Vision</h4>
                <p>
                  To become one of the most trusted educational institutions by
                  delivering world-class learning experiences.
                </p>
              </div>

              <div 
                className="vision-box" 
                data-aos="zoom-in" 
                data-aos-delay="400" 
                data-aos-duration="800"
              >
                <h4>🎯 Mission</h4>
                <p>
                  To provide affordable, practical and industry-focused
                  education that empowers every student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
            STATS SECTION
      =============================== */}
      <section className="about-stats" ref={ref}>
        <div className="stats-container">
          <div 
            className="stat-box" 
            data-aos="fade-up" 
            data-aos-delay="100" 
            data-aos-duration="600"
          >
            <h2>{students.toLocaleString()}+</h2>
            <p>Students</p>
          </div>

          <div 
            className="stat-box" 
            data-aos="fade-up" 
            data-aos-delay="200" 
            data-aos-duration="600"
          >
            <h2>{placements}%</h2>
            <p>Placement Rate</p>
          </div>

          <div 
            className="stat-box" 
            data-aos="fade-up" 
            data-aos-delay="300" 
            data-aos-duration="600"
          >
            <h2>{industry}+</h2>
            <p>Industry Partners</p>
          </div>

          <div 
            className="stat-box" 
            data-aos="fade-up" 
            data-aos-delay="400" 
            data-aos-duration="600"
          >
            <h2>{experts}K</h2>
            <p>Expert Faculty</p>
          </div>
        </div>
      </section>

      {/* ===============================
            CORE METHODOLOGY
      =============================== */}
      <section className="methodology">
        <div 
          className="methodology-heading" 
          data-aos="fade-up" 
          data-aos-duration="800"
        >
          <span>HOW WE TEACH</span>
          <h2>Our Learning Methodology</h2>
          <p>
            Our academic system combines technology, practical learning and
            industry experience to create better professionals.
          </p>
        </div>

        <div className="methodology-container">
          {/* Left Buttons */}
          <div 
            className="methodology-left" 
            data-aos="fade-right" 
            data-aos-duration="800"
          >
            {methodology.map((item, index) => (
              <button
                key={index}
                className={
                  activeTab === index ? "method-btn active-btn" : "method-btn"
                }
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div 
            className="methodology-right" 
            data-aos="fade-left" 
            data-aos-duration="800"
          >
            <div className="method-icon">{methodology[activeTab].icon}</div>
            <h3>{methodology[activeTab].title}</h3>
            <p>{methodology[activeTab].description}</p>
          </div>
        </div>
      </section>

      {/* ===============================
            INFRASTRUCTURE SECTION
      =============================== */}
      <section className="infrastructure">
        <div className="infrastructure-container">
          {/* Left Side */}
          <div 
            className="infrastructure-left" 
            data-aos="fade-right" 
            data-aos-duration="1000"
          >
            <span>CAMPUS LIFE</span>
            <h2>
              Modern Infrastructure
              <br />
              Designed For Learning
            </h2>
            <p>
              Our campus provides an inspiring environment where students can
              learn, innovate and grow through world-class facilities, advanced
              laboratories and collaborative learning spaces.
            </p>

            <ul>
              <li>
                <strong>Advanced Computer Labs</strong> with latest hardware and
                software.
              </li>
              <li>
                <strong>Digital Library</strong> with thousands of books and
                online research journals.
              </li>
              <li>
                <strong>Sports & Activity Center</strong> for overall
                personality development.
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="infrastructure-right">
            <div 
              className="gallery gallery1" 
              data-aos="zoom-in" 
              data-aos-delay="100" 
              data-aos-duration="700"
            ></div>
            <div 
              className="gallery gallery2" 
              data-aos="zoom-in" 
              data-aos-delay="300" 
              data-aos-duration="700"
            ></div>
            <div 
              className="gallery gallery3" 
              data-aos="zoom-in" 
              data-aos-delay="500" 
              data-aos-duration="700"
            ></div>
          </div>
        </div>
      </section>

      {/* ===============================
            FAQ SECTION
      =============================== */}
      <section className="faq-section">
        <div 
          className="faq-heading" 
          data-aos="fade-up" 
          data-aos-duration="800"
        >
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div 
          className="faq-container" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="200"
        >
          {faqs.map((item, index) => (
            <div
              key={index}
              className={openFaq === index ? "faq-box active-faq" : "faq-box"}
            >
              <div
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3>{item.question}</h3>
                <span>{openFaq === index ? "−" : "+"}</span>
              </div>

              {openFaq === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;