$(document).ready(function () {
  // Getting references to our form and input
  let signUpForm = $("form.signup");
  let f_name = $("#first-name");
  let l_name = $("#last-name");
  let emailInput = $("input#email-input1");
  let passwordInput = $("input#password-input1");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();

    let radioChoice = $('input[name=studOrInst]:checked',
      '#s').val();

    let userData = {

      name: `${f_name.val().trim()},${l_name.val().trim()}`,
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      instructor: !radioChoice ? null : radioChoice === "instructor"

    };

    console.log("instructor: ", userData.instructor);

    if (!userData.email || !userData.password || userData.instructor === null || !f_name || !l_name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.name, userData.email, userData.password, userData.instructor);

    f_name.val("");
    l_name.val("");
    emailInput.val("");
    passwordInput.val("");
    $('input[name=studOrInst]:checked',
      '#s').val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the instructors page
  // Otherwise we log any errors
  function signUpUser(name, email, password, instructor) {
    $.post("/api/signup", {
      name: name,
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
    let msg = err.responseJSON.errors[0].message;
    console.log(msg)
    if (msg = "users.Users_email_unique must be unique") {
      msg = "Email already taken."
    }
    console.log(err)
    $("#alert .msg").text(msg); // { msg: 'messge' }.toString() ==> [object Object]
    $("#alert").fadeIn(500);
  }
});
