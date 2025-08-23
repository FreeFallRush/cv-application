import "../styles/CVPreview.css";
import { formatDate } from "../utils/formatDate";

function CVPreview({
  personalInfo,
  defaultInfo,
  educationInfo,
  defaultEducation,
  experienceInfo,
  defaultExperience,
}) {
  return (
    <div className="cv-preview">
      <h2>Curriculum Vitae</h2>
      <div className="personalInfo-section">
        <h3>Personal Info</h3>
        <div className="personalInfo">
          <div className="personalInfo-group">
            <p>
              <strong>First Name: </strong>
              {personalInfo.firstName || defaultInfo.firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {personalInfo.lastName || defaultInfo.lastName}
            </p>
          </div>
          <div className="personalInfo-group">
            <p>
              <strong>E-mail: </strong>
              {personalInfo.email || defaultInfo.email}
            </p>
            <p>
              <strong>Phone Number: </strong>
              {personalInfo.phoneNumber || defaultInfo.phoneNumber}
            </p>
          </div>
          <div className="personalInfo-group">
            <p>
              <strong>City: </strong>
              {personalInfo.city || defaultInfo.city}
            </p>
            <p>
              <strong>Country: </strong>
              {personalInfo.country || defaultInfo.country}
            </p>
          </div>
        </div>
      </div>

      <div className="educationInfo-section">
        <h2>Education</h2>
        {educationInfo.length > 0 ? (
          educationInfo.map((edu, index) => (
            <div key={index} className="educationInfo">
              <h3>Education {index + 1}</h3>
              <p>
                <strong>School: </strong>
                {edu.school || (index === 0 ? defaultEducation.school : "")}
              </p>
              <p>
                <strong>Degree: </strong>
                {edu.degree || (index === 0 ? defaultEducation.degree : "")}
              </p>
              <p>
                <strong>Period: </strong>
                {edu.startDate
                  ? formatDate(edu.startDate)
                  : index === 0
                  ? formatDate(defaultEducation.startDate)
                  : ""}{" "}
                -{" "}
                {edu.endDate
                  ? formatDate(edu.endDate)
                  : index === 0
                  ? formatDate(defaultEducation.endDate)
                  : ""}
              </p>
            </div>
          ))
        ) : (
          <p>No education entries yet.</p>
        )}
      </div>

      <div className="practicalExperience-section">
        <h3>Work Experience</h3>
        {experienceInfo.length > 0 ? (
          experienceInfo.map((exp, index) => (
            <div key={index} className="practicalExperience">
              <h3>Work Experience {index + 1}</h3>
              <p>
                <strong>Company: </strong>{" "}
                {exp.company || (index === 0 ? defaultExperience.company : "")}
              </p>
              <p>
                <strong>Position: </strong>{" "}
                {exp.position ||
                  (index === 0 ? defaultExperience.position : "")}
              </p>
              <p>
                <strong>Responsibilities: </strong>{" "}
                {exp.position ||
                  (index === 0 ? defaultExperience.responsibilities : "")}
              </p>
              <p>
                <strong>Period: </strong>
                {exp.startDate
                  ? formatDate(exp.startDate)
                  : index === 0
                  ? formatDate(defaultExperience.startDate)
                  : ""}{" "}
                -{" "}
                {exp.endDate
                  ? formatDate(exp.endDate)
                  : index === 0
                  ? formatDate(defaultExperience.endDate)
                  : ""}
              </p>
            </div>
          ))
        ) : (
          <p>No work experience yet.</p>
        )}
      </div>
    </div>
  );
}

export default CVPreview;
