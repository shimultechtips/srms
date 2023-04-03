function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "shimul@srms.com" && password == "527501") {
        alert("Successfully Logged In.");
        window.open("admin.html");
        window.close();
        return false;
    }
    else {
        alert("Login Failed : Email Or Password Incorrect.");
    }
}