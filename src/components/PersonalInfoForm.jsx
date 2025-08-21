import "../styles/PersonalInfoForm.css";

function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Add / Edit Personal Info</h2>
      <form>
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

        <input
          name="city"
          maxLength={60}
          type="text"
          placeholder="City"
          value={personalInfo.city}
          onChange={handleChange}
        />

        <input
          name="country"
          maxLength={60}
          type="text"
          placeholder="Country"
          value={personalInfo.country}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default PersonalInfoForm;
