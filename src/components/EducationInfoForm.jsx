import { useState } from "react";
import "../styles/FormStyles.css";

function EducationInfoForm({ educationInfo, onSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(educationInfo);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(false);
  };

  return (
    <div className="educationInfoForm">
      {!isEditing ? (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Add / Edit Education
        </button>
      ) : (
        <>
          <h2>Education</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="school"
              type="text"
              placeholder="School"
              value={formData.school}
              onChange={handleChange}
            />

            <input
              name="degree"
              type="text"
              placeholder="Degree"
              value={formData.degree}
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

export default EducationInfoForm;
