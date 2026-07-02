import "./AdminData.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../Config/api";

function AdminData() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/career/admin/dashboard`,
        );

        setApplications(response.data.applications);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApplications();
  }, []);

  const HandleDelete = async (id) => {
    try {
      let Delresponse = await axios.delete(
        `${API_URL}/career/admin/delete/${id}`,
      );

      setApplications(applications.filter((app) => app._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-data-container">
      <div className="admin-header">
        <h1>Career Applications</h1>
        <p>Total Applications: {applications.length}</p>
      </div>

      <div className="table-wrapper">
        <table className="application-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Experience</th>
              <th>Job Role</th>
              <th>Resume</th>
              <th>Unselected</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr key={application._id}>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>{application.phone}</td>
                <td>{application.city}</td>
                <td>{application.experience}</td>
                <td>{application.jobTitle}</td>

                <td>
                  <a
                    href={application.resumeUrl}
                    download
                    rel="noopener noreferrer"
                    className="resume-btn"
                  >
                    Download Resume
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => HandleDelete(application._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminData;
