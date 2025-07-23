import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    rollNo: "",
    accessCode: "",
    clientID: "",
    clientSecret: ""
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      setResponseMsg(res.data.message);
    } catch (err) {
      setResponseMsg(err.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="form-container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        {["email", "name", "rollNo", "accessCode", "clientID", "clientSecret"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Register</button>
      </form>
      <p className="message">{responseMsg}</p>
    </div>
  );
}

export default App;
