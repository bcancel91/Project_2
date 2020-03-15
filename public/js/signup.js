$(document).ready(function () {
  // Getting references to our form and input
  let signUpForm = $("form.signup");
  let emailInput = $("input#email-input1");
  let passwordInput = $("input#password-input1");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();

    let radioChoice = $('input[name=studOrInst]:checked',
      '#s').val();

    let userData = {

      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      instructor: !radioChoice ? null : radioChoice === "instructor"

    };

    console.log("instructor: ", userData.instructor);

    if (!userData.email || !userData.password || userData.instructor === null) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.instructor);
    emailInput.val("");
    passwordInput.val("");
    $('input[name=studOrInst]:checked',
      '#s').val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the instructors page
  // Otherwise we log any errors
  function signUpUser(email, password, instructor) {
    $.post("/api/signup", {
      email: email,
      password: password,
      instructor: instructor
    })
      .then(data => {
        console.log(data);

        if (data.instructor) {
          window.location.replace("/instructors");
        } else {
          window.location.replace("/students");
        }

        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
