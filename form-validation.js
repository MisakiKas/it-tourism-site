function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    if (name === "" || email === "" || phone === "") {
        alert("All fields must be filled out");
        return false;
    }
    
    // Add any other custom validations here
    
    return true; // Submit the form if validation passes
}
