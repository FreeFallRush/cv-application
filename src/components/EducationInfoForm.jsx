import { useState } from "react";
import "../styles/FormStyles.css";

function EducationInfoForm({ educationInfo, onSubmit, onDelete }) {
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
            <div className="form-group">
              <label htmlFor="school">School: </label>
              <input
                id="school"
                name="school"
                type="text"
                placeholder="School"
                value={formData.school}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="degree">Degree: </label>
              <input
                id="degree"
                name="degree"
                type="text"
                placeholder="Degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date: </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date: </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-btns">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="button" className="delete-btn" onClick={onDelete}>
                Delete
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default EducationInfoForm;
