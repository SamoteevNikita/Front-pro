const userForm = document.querySelector(".registrationForm");


userForm.addEventListener('submit', function(event) {
    event.preventDefault()


    const formData = new FormData(userForm);
    const values = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    gender: formData.get("gender") || "Not selected",
    birthday: formData.get("birthday"),
    city: formData.get("city"),
    address: formData.get("adress"), 
    languages: formData.getAll("languages").join(", ") || "Not selected",
    email: formData.get("email"),
  };

  const tableHTML = `
    <h2>Registration Data</h2>
    <table border="1">
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>Name</td><td>${values.name}</td></tr>
        <tr><td>Surname</td><td>${values.surname}</td></tr>
        <tr><td>Gender</td><td>${values.gender}</td></tr>
        <tr><td>Birthday</td><td>${values.birthday}</td></tr>
        <tr><td>City</td><td>${values.city}</td></tr>
        <tr><td>Address</td><td>${values.address}</td></tr>
        <tr><td>Languages</td><td>${values.languages}</td></tr>
        <tr><td>Email</td><td>${values.email}</td></tr>
    </table>
    <button onclick="location.reload()">Back</button>
  `;


  document.querySelector(".container").innerHTML = tableHTML;

})