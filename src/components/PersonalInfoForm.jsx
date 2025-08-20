function PersonalInfoForm({ personalInfo, setPersonalInfo, onSubmit }) {
  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Add Personal Info</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          name="firstName"
          maxLength={60}
          type="text"
          placeholder="First Name"
          value={personalInfo.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          type="text"
          maxLength={60}
          placeholder="Last Name"
          value={personalInfo.lastName}
          onChange={handleChange}
        />

        <input
          name="email"
          maxLength={60}
          type="text"
          placeholder="E-mail"
          value={personalInfo.email}
          onChange={handleChange}
        />

        <input
          name="phoneNumber"
          maxLength={60}
          type="text"
          placeholder="Phone Number"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default PersonalInfoForm;
