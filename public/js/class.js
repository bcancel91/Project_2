$(document).ready(function () {
  // Getting references to our form and input
  let classForm = $(".option-add");
  let topicInput = $("input#topic-input");
  let descriptInput = $("input#description-input");
  let dateInput = $("input#datepicker");
  let timeInput = $("input#time");
  let capacityInput = $("input#capacity-input");
  let priceInput = $("input#price-input");

  // When the signup button is clicked, we validate the email and password are not blank
  classForm.on("submit", function (event) {
    event.preventDefault();

    let classData = {
      topic: topicInput.val().trim(),
      description: descriptInput.val().trim(),
      date: dateInput.val().trim(),
      time: timeInput.val().trim(),
      capacity: capacityInput.val().trim(),
      price: priceInput.val().trim(),
    };

    console.log("class: ", classData);

    if (!classData.topic || !classData.description || !classData.date ||
      !classData.time || !classData.capacity || !classData.price === null) {
      return;
    }
    createClass(classData.topic, classData.description, classData.date, classData.time, classData.capacity, classData.price);
    //   topicInput.val("");
    //   descriptInput.val("");
    //   $('input[name=studOrInst]:checked',
    //     '#s').val("");
  });

  function createClass(topic, description, date, time, capacity, price) {
    $.post("/classes", {
        topic: topic,
        description: description,
        date: date,
        time: time,
        capacity: capacity,
        price: price
      })
      .then(data => {
        console.log(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(error => console.log(error));
  }
});