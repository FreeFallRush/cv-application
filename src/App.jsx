import { useState } from "react";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import CVPreview from "./components/CVPreview";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
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
    id: crypto.randomUUID(),
    school: "Chicago High School",
    degree: "Social Sciences",
    startDate: "2020 August",
    endDate: "2024 September",
  };

  const defaultExperience = {
    id: crypto.randomUUID(),
    company: "Click Link Ring",
    position: "Software Engineer",
    responsibilities:
      "Developed cloud solutions and collaborated with international teams.",
    startDate: "2019-06-01",
    endDate: "2023-08-01",
  };

  const [personalInfo, setPersonalInfo] = useState(defaultInfo);
  const [educationInfoList, setEducationInfoList] = useState([
    defaultEducation,
  ]);
  const [practicalExperienceList, setPracticalExperienceList] = useState([
    defaultExperience,
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

  const handleAddPracticalExperience = () => {
    setPracticalExperienceList([
      ...practicalExperienceList,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handlePracticalExperienceSubmit = (newWorkExp, index) => {
    const updatedList = [...practicalExperienceList];
    updatedList[index] = newWorkExp;
    setPracticalExperienceList(updatedList);
  };

  const handleDeletePracticalExperience = (index) => {
    setPracticalExperienceList(
      practicalExperienceList.filter((_, i) => i !== index)
    );
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

          <section className="practicalExperience-form">
            {practicalExperienceList.map((exp, index) => (
              <div key={exp.id} className="experience-entry">
                <h3>Work Experience {index + 1}</h3>
                <PracticalExperienceForm
                  experienceInfo={exp}
                  onSubmit={(newExp) =>
                    handlePracticalExperienceSubmit(newExp, index)
                  }
                  onDelete={() => handleDeletePracticalExperience(index)}
                />
              </div>
            ))}
            <button className="add-btn" onClick={handleAddPracticalExperience}>
              + Add Work Experience
            </button>
          </section>
        </aside>

        <section className="preview-section">
          <CVPreview
            personalInfo={personalInfo}
            defaultInfo={defaultInfo}
            educationInfo={educationInfoList}
            defaultEducation={defaultEducation}
            experienceInfo={practicalExperienceList}
            defaultExperience={defaultExperience}
          />
        </section>
      </main>
    </>
  );
}

export default App;
