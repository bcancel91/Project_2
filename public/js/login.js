$(document).ready(function () {
  // Getting references to our form and inputs
  let loginForm = $("form.login");
  let emailInput = $("input#email-input");
  let passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the instructors page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(data => {
        // console.log(typeof data.instructor, data.instructor);

        if (data.instructor) {
          window.location.replace("/instructors");
        } else {
          window.location.replace("/students");
        }
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
        $("#alert1 .msg").text("Your username or password is incorrect."); // { msg: 'messge' }.toString() ==> [object Object]
        $("#alert1").fadeIn(500);
      });
  }
});
