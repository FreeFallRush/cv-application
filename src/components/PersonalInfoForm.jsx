import { useState } from "react";
import "../styles/FormStyles.css";

function PersonalInfoForm({ personalInfo, onSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(personalInfo);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // pass new data up to App.jsx
    setIsEditing(false);
  };

  return (
    <div className="personalInfoForm">
      {!isEditing ? (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Add / Edit Personal Info
        </button>
      ) : (
        <>
          <h2>Personal Info</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              name="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              name="country"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default PersonalInfoForm;
