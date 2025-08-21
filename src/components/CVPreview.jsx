function CVPreview({ personalInfo, defaultInfo }) {
  return (
    <>
      <p>
        <strong>First Name: </strong>
        {personalInfo.firstName || defaultInfo.firstName}
      </p>
      <p>
        <strong>Last Name: </strong>
        {personalInfo.lastName || defaultInfo.lastName}
      </p>
      <p>
        <strong>E-mail: </strong>
        {personalInfo.email || defaultInfo.email}
      </p>
      <p>
        <strong>Phone Number: </strong>
        {personalInfo.phoneNumber || defaultInfo.phoneNumber}
      </p>
      <p>
        <strong>City: </strong>
        {personalInfo.city || defaultInfo.city}
      </p>
      <p>
        <strong>Country: </strong>
        {personalInfo.country || defaultInfo.country}
      </p>
    </>
  );
}

export default CVPreview;
