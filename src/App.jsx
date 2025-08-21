import { useState } from "react";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const defaultInfo = {
    firstName: "Click",
    lastName: "Link",
    email: "click@office.com",
    phoneNumber: "+44 768 521 55",
    city: "Rome",
    country: "Italy",
  };

  const defaultEducation = {
    school: "Chicago High School",
    degree: "Social Sciences",
  };
  const [personalInfo, setPersonalInfo] = useState(defaultInfo);
  const [educationInfo, setEducationInfo] = useState(defaultEducation);

  const handlePersonalInfoSubmit = (newInfo) => {
    setPersonalInfo(newInfo); // update state with new values
  };

  const handleEducationInfoSubmit = (newEdInfo) => {
    setEducationInfo(newEdInfo);
  };

  return (
    <>
      <Header />
      <main className="content">
        <aside className="sidebar">
          <section className="personalInfo-form">
            <PersonalInfoForm
              personalInfo={personalInfo}
              onSubmit={handlePersonalInfoSubmit}
            />
          </section>
          <section className="educationInfo-form">
            <EducationInfoForm
              educationInfo={educationInfo}
              onSubmit={handleEducationInfoSubmit}
            />
          </section>
        </aside>

        <section className="preview-section">
          <CVPreview
            personalInfo={personalInfo}
            defaultInfo={defaultInfo}
            educationInfo={educationInfo}
            defaultEducation={defaultEducation}
          />
        </section>
      </main>
    </>
  );
}

export default App;
