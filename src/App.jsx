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
    startDate: "2020 August",
    endDate: "2024 September",
  };
  const [personalInfo, setPersonalInfo] = useState(defaultInfo);
  const [educationInfoList, setEducationInfoList] = useState([
    defaultEducation,
  ]);

  const handlePersonalInfoSubmit = (newInfo) => {
    setPersonalInfo(newInfo);
  };

  const handleAddEducation = () => {
    setEducationInfoList([
      ...educationInfoList,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleEducationInfoSubmit = (newEdInfo, index) => {
    const updatedList = [...educationInfoList];
    updatedList[index] = newEdInfo;
    setEducationInfoList(updatedList);
  };

  const handleDeleteEducation = (index) => {
    setEducationInfoList(educationInfoList.filter((_, i) => i !== index));
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
            {educationInfoList.map((edu, index) => (
              <div key={edu.id} className="education-entry">
                <h3>Education {index + 1}</h3>
                <EducationInfoForm
                  educationInfo={edu}
                  onSubmit={(newEd) => handleEducationInfoSubmit(newEd, index)}
                  onDelete={() => handleDeleteEducation(index)}
                />
              </div>
            ))}

            <button className="add-btn" onClick={handleAddEducation}>
              + Add Education
            </button>
          </section>
        </aside>

        <section className="preview-section">
          <CVPreview
            personalInfo={personalInfo}
            defaultInfo={defaultInfo}
            educationInfo={educationInfoList}
            defaultEducation={defaultEducation}
          />
        </section>
      </main>
    </>
  );
}

export default App;
