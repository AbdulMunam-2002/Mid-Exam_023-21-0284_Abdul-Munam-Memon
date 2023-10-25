function submitForm() {
    // Retrieve values from form fields
    var firstName = document.getElementById("firstName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;

    // You can now use these values as needed, for example, sending them to a server or performing validation.
    // For demonstration, let's just display an alert with the collected data.
    var formData = {
        "First Name": firstName,
        "Phone": phone,
        "Address": address,
        "Email": email,
        "Description": description
    };

    // Display collected data
    alert("Form Data:\n" + JSON.stringify(formData, null, 2));
}