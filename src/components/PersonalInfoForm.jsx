import { useState } from "react";

function PersonalInfoForm() {
  const [firstName, setFirstName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  return (
    <>
      <h2>Add Personal Info</h2>
      <form>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstName}
        />
      </form>
      <p>First Name: {firstName}</p>
    </>
  );
}

export default PersonalInfoForm;
