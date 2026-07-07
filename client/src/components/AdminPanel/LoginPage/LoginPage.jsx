import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/Mail";
import LockOutlinedIcon from "@mui/icons-material/Lock";

import "./LoginPage.css";
import axios from "axios";
import { API_URL } from "../../../Config/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [credentials, setCredentials] = useState(true);
  const navigate = useNavigate();

  let [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  // input save in state
  const handleInput = (event) => {
    const fieldInput = event.target.name;
    const valueInput = event.target.value;

    setFormData((currentData) => {
      return {
        ...currentData,
        [fieldInput]: valueInput,
      };
    });
  };

  // backend route handling
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setCredentials(true);

      const response = await axios.post(`${API_URL}/admin/login`, formData);

      localStorage.setItem("edusity_admin_token", response.data.token);

      navigate("/admin");
    } catch (error) {
      console.log(error);
      setCredentials(false);
    } 
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-sidebar">
        <div className="sidebar-content">
          <h1 className="brand-logo">Edusity</h1>

          <p className="sidebar-tagline">
            Welcome back! Access your personalized admin dashboard and continue
            your journey.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-form-wrapper">
        <div className="login-card">
          <div className="login-header">
            <h2>Sign In</h2>

            <p>Please enter your credentials to access the admin dashboard.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="input-group">
              <TextField
                onChange={handleInput}
                value={formData.userEmail}
                name="userEmail"
                id="email"
                label="Email Address"
                variant="outlined"
                fullWidth
                required
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon sx={{ color: "#6b7280" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            {/* Password */}
            {/* Password */}
            <div className="input-group">
              <TextField
                onChange={handleInput}
                value={formData.userPassword}
                name="userPassword"
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                required
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: "#6b7280" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <div className="status-button">
              <p>
                {credentials ? "" : "Please Check the Login Credentials"}
              </p>
            </div>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="submit-btn"
              sx={{
                background: "linear-gradient(135deg, #212ea0 0%, #172070 100%)",
                color: "white",
                padding: "12px",
                fontWeight: "600",
                fontSize: "1rem",
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(33,46,160,0.25)",

                "&:hover": {
                  background:
                    "linear-gradient(135deg, #172070 0%, #0f154d 100%)",
                },
              }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
