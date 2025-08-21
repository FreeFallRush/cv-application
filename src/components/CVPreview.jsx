import "../styles/CVPreview.css";
import { formatDate } from "../utils/formatDate";

function CVPreview({
  personalInfo,
  defaultInfo,
  educationInfo,
  defaultEducation,
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

        <div className="educationInfo-section">
          <h2>Education</h2>
          <div className="educationInfo">
            <p>
              <strong>School: </strong>
              {educationInfo.school || defaultEducation.school}
            </p>
            <p>
              <strong>Degree: </strong>
              {educationInfo.degree || defaultEducation.degree}
              <p>
                <strong>Period: </strong> {formatDate(educationInfo.startDate)}{" "}
                -{" "}
                {formatDate(educationInfo.endDate) ||
                  defaultEducation.startDate - defaultEducation.endDate}
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVPreview;
