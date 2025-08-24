import { useState } from "react";
import Button from "./Button";
import "../styles/FormStyles.css";

function PracticalExperienceForm({ experienceInfo, onSubmit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(experienceInfo);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(false);
  };

  return (
    <div className="practicalExperienceForm">
      {!isEditing ? (
        <Button variant="edit" onClick={() => setIsEditing(true)}>
          Add / Edit Work Experience
        </Button>
      ) : (
        <>
          <h2>Work Experience</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="company">Company: </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position: </label>
              <input
                id="position"
                name="position"
                type="text"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="responsibilities">Responsibilities: </label>
              <input
                id="responsibilities"
                name="responsibilities"
                type="text"
                placeholder="Responsibilities"
                value={formData.responsibilities}
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
              <Button type="submit" variant="submit">
                Submit
              </Button>
              <Button type="button" variant="delete" onClick={onDelete}>
                Delete
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default PracticalExperienceForm;
