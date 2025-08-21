import { useState } from "react";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
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
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    country: "",
  });

  return (
    <>
      <Header />
      <main className="content">
        <aside className="sidebar">
          <section className="personalInfo-form">
            <PersonalInfoForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          </section>
        </aside>
        <section className="preview-section">
          <CVPreview personalInfo={personalInfo} defaultInfo={defaultInfo} />
        </section>
      </main>
    </>
  );
}

export default App;
