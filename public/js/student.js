$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".student-name").text(data.email);
  });

  $(".add-class-btn").on("click", function () {
    let classid = $(this).data("class-id");
    // let studentId = req.user.id;
    // how to get studentId?
    console.log("before $.post", classid);
    $.post("/api/students/add", { id: classid })
      .then(response => {
        // console.log(response);
        if (response === "OK") {
          $(".add-class-btn").removeData("class-id");
          $(`#class-${classid}`).hide();
          window.location.href = "/students";
        }
      });
  });
});