function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "shimul@srms.com" && password == "527501") {
        window.location.replace("admin.html");
        return false;
    }
    else {
        alert("Login Failed : Email Or Password Incorrect.");
    }
}