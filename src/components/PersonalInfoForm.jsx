import { useState } from "react";

function PersonalInfoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <>
      <h2>Add Personal Info</h2>
      <form>
        <input
          name="firstName"
          maxLength={60}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstName}
        />

        <input
          name="lastName"
          type="text"
          maxLength={60}
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastName}
        />

        <input
          name="email"
          maxLength={60}
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={handleEmail}
        />

        <input
          name="phoneNumber"
          maxLength={60}
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
      </form>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>E-mail: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
    </>
  );
}

export default PersonalInfoForm;
