import { useState } from "react";
import Button from "./Button";
import "../styles/FormStyles.css";

function PersonalInfoForm({ personalInfo, onSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(personalInfo);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(false);
  };

  return (
    <div className="personalInfoForm">
      {!isEditing ? (
        <Button variant="edit" onClick={() => setIsEditing(true)}>
          Add / Edit Personal Info
        </Button>
      ) : (
        <>
          <h2>Personal Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail: </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City: </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country: </label>
              <input
                id="country"
                name="country"
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" variant="submit">
              Submit
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default PersonalInfoForm;
