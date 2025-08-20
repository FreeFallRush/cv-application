import { useState } from "react";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Test FirstName",
    lastName: "Test LastName",
    email: "testing@office.com",
    phoneNumber: "+44 768 521 55",
  });

  const [submittedInfo, setSubmittedInfo] = useState(personalInfo);

  const handleSubmit = () => {
    setSubmittedInfo(personalInfo);
  };

  return (
    <>
      <Header />
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        onSubmit={handleSubmit}
      />
      <CVPreview personalInfo={submittedInfo} />
    </>
  );
}

export default App;
