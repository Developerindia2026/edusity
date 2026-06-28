import "./ApplyForm.css";
import TextField from "@mui/material/TextField";

function ApplyForm({ SelectedJob, CloseApply }) {
  return (
    <div className="apply-overlay">
      <div className="apply-container">
        <button className="close-btn" onClick={CloseApply}>
          ✕
        </button>

        <h2>APPLICATION FOR {SelectedJob}</h2>

        <p>Please Correctly Fill The Details Below</p>

        <div className="application-details">
          <form>
            {/* name  */}
            <TextField id="name" label="Full Name *" variant="outlined" />

            {/* phone  */}
            <TextField id="Phone" label="Phone Number *" variant="outlined" />

            {/* email  */}
            <TextField id="Email" label="Email Address *" variant="outlined" />

            {/* experience  */}
            <TextField
              id="Experience"
              label="Years of Experience *"
              variant="outlined"
            />

            {/* city  */}
            <TextField id="City" label="Current City *" variant="outlined" />

            {/* resume  */}
            <input
            className="resume-upload"
              type="file"
              accept=".pdf,.docs,.docx"
              placeholder="Attach Your Resume"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
