$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $.get("/api/user_data").then(data => {
    $(".student-name").text(data.name);
  });

  $(".add-class-btn").on("click", function () {
    let classid = $(this).data("class-id");
    console.log("before $.post", classid);
    $.post("/api/students/add", {
        id: classid
      })
      .then(response => {
        // console.log(response);
        if (response === "OK") {
          $(".add-class-btn").removeData("class-id");
          $(`#class-${classid}`).hide();
          window.location.href = "/students/";
        };
      });
  });


  $(".delete-class").on("click", function () {
    let classid = $(this).data("class-id");
    $.ajax("/api/removeclass/" + classid, {
        method: "DELETE",
      })
      .then(response => {
        console.log("response!", response);
        if (response === "OK") {
          $(".delete-class").removeData("class-id");
          window.location.href = "/students/";
        }
      });
  });
});