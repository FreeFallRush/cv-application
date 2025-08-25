import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import CVPreview from "./components/CVPreview";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
import SkillsForm from "./components/SkillsForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const defaultInfo = {
    firstName: "Lizzy",
    lastName: "Smith",
    email: "liz.smith@office.com",
    phoneNumber: "+49 160 445 9821",
    city: "Berlin",
    country: "Germany",
  };

  const defaultEducation = {
    id: crypto.randomUUID(),
    school: "University of Lisbon",
    degree: "Computer Engineering",
    startDate: "2017 September",
    endDate: "2021 June",
  };

  const defaultExperience = {
    id: crypto.randomUUID(),
    company: "Click Link Ring Ltd.",
    position: "Full Stack Developer",
    responsibilities:
      "Designed and deployed scalable web applications, integrating frontend interfaces with secure backend services in a fast-paced team environment.",
    startDate: "2021-10-01",
    endDate: "2025-07-01",
  };

  const [personalInfo, setPersonalInfo] = useState(defaultInfo);
  const [educationInfoList, setEducationInfoList] = useState([
    defaultEducation,
  ]);
  const [practicalExperienceList, setPracticalExperienceList] = useState([
    defaultExperience,
  ]);
  const [skills, setSkills] = useState([
    "Communication Skills",
    "Knowing French",
    "Photoshop",
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.querySelector(".preview-section");
    if (!element) return;

    import("html2pdf.js").then((html2pdf) => {
      html2pdf.default(element, {
        margin: 0.5,
        filename: "My_CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      });
    });
  };

  const handleSkillsSubmit = (newSkills) => {
    setSkills(newSkills);
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

            <Button variant="add" onClick={handleAddEducation}>
              + Add Education
            </Button>
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
            <Button variant="add" onClick={handleAddPracticalExperience}>
              + Add Work Experience
            </Button>
          </section>

          <section className="skills-form">
            <SkillsForm skills={skills} onSubmit={handleSkillsSubmit} />
          </section>

          <div className="cv-actions">
            <Button variant="print" onClick={handlePrint}>
              Print CV
            </Button>
            <Button variant="download" onClick={handleDownload}>
              Download CV
            </Button>
          </div>
        </aside>

        <section className="preview-section">
          <CVPreview
            personalInfo={personalInfo}
            defaultInfo={defaultInfo}
            educationInfo={educationInfoList}
            defaultEducation={defaultEducation}
            experienceInfo={practicalExperienceList}
            defaultExperience={defaultExperience}
            skills={skills}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
