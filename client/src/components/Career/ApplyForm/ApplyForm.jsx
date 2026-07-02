import "./ApplyForm.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
// import Lottie from "lottie-react";
import SuccessIcon from "../../../assets/success.json";
import DeclineIcon from "../../../assets/Icon Failed.json";
import LottieModule from "lottie-react";
const Lottie = LottieModule.default;
import { API_URL } from "../../../Config/api";

function ApplyForm({ SelectedJob, CloseApply }) {
  // resume
  let [resume, setResume] = useState(null);

  let [SubmitStatus, setSubmitStatus] = useState(null);

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
  });

  let HandleForm = (event) => {
    let fieldname = event.target.name;
    let valueName = event.target.value;

    setFormData((currentData) => {
      return {
        ...currentData,
        [fieldname]: valueName,
      };
    });
  };

  let HandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const Data = new FormData();

      // values
      Data.append("name", formData.name);
      Data.append("email", formData.email);
      Data.append("experience", formData.experience);
      Data.append("city", formData.city);
      Data.append("phone", formData.phone);
      Data.append("jobTitle", SelectedJob);
      Data.append("resume", resume);

      // request
      const response = await axios.post(
        `${API_URL}/career/apply`,
        Data,
      );

      setSubmitStatus("success");

      setTimeout(()=> {

        CloseApply();

      }, 4000)
      

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
      });

      setResume(null);
    } catch (error) {
      console.log(error);

      setSubmitStatus("failed");

      setTimeout(() => {
        CloseApply();
      },4000 );

    }
  };

  return (
    <div className="apply-overlay">
      <div className="apply-container">
        <button className="close-btn" onClick={CloseApply}>
          ✕
        </button>

        <h2>APPLICATION FOR {SelectedJob}</h2>

        <p>Please Correctly Fill The Details Below</p>

        {SubmitStatus === null ? (
          <div className="application-details">
            <form onSubmit={HandleSubmit}>
              {/* name  */}
              <TextField
                id="name"
                label="Full Name *"
                variant="outlined"
                value={formData.name}
                onChange={HandleForm}
                name="name"
              />

              {/* phone  */}
              <TextField
                id="Phone"
                label="Phone Number *"
                variant="outlined"
                value={formData.phone}
                onChange={HandleForm}
                name="phone"
              />

              {/* email  */}
              <TextField
                id="Email"
                label="Email Address *"
                variant="outlined"
                value={formData.email}
                onChange={HandleForm}
                name="email"
              />

              {/* experience  */}
              <TextField
                id="Experience"
                label="Years of Experience *"
                variant="outlined"
                name="experience"
                value={formData.experience}
                onChange={HandleForm}
                name="experience"
              />

              {/* city  */}
              <TextField
                id="City"
                label="Current City *"
                variant="outlined"
                name="city"
                value={formData.city}
                onChange={HandleForm}
                name="city"
              />

              {/* resume  */}
              <input
                className="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                placeholder="Attach Your Resume"
                name="resume"
                onChange={(e) => setResume(e.target.files[0])}
              />

              <button type="submit">SUBMIT</button>
            </form>
          </div>
        ) : (
          <div className="message-container">
            {SubmitStatus === "success" ? (
              <>
                <Lottie animationData={SuccessIcon} loop={false} className="status-animation"/>

                <h2>Application Submitted Successfully</h2>
                <p>Our Team will be Get back to you Shortly...</p>
              </>
            ) : (
              <>
                <Lottie animationData={DeclineIcon} loop={false} className="status-animation"/>

                <h2>Application is Not Submited Yet</h2>
                <p>Please try again later</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ApplyForm;
