function CVPreview(personalInfo) {
  return (
    <>
      <p>
        <strong>First Name:</strong>
        {personalInfo.firstName}
      </p>
      <p>
        <strong>Last Name:</strong>
        {personalInfo.lastName}
      </p>
      <p>
        <strong>E-mail:</strong>
        {personalInfo.email}
      </p>
      <p>
        <strong>Phone Number:</strong>
        {personalInfo.phoneNumber}
      </p>
    </>
  );
}

export default CVPreview;
