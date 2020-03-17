$(document).ready(function () {
  // Getting references to our form and input
  let classForm = $(".option-add");
  let topicInput = $("input#topic-input");
  let descriptInput = $("input#description-input");
  let dateInput = $("input#datetime");
  let timeInput = $("input#time");
  let capacityInput = $("input#capacity-input");
  let priceInput = $("input#price-input");

  // When the signup button is clicked, we validate the email and password are not blank
  classForm.on("submit", function (event) {
    event.preventDefault();

    let classData = {
      topic: topicInput.val().trim(),
      description: descriptInput.val().trim(),
      datetime: dateInput.val().trim(),
      duration: timeInput.val().trim(),
      capacity: capacityInput.val().trim(),
      price: priceInput.val().trim(),
    };

    console.log("class: ", classData);

    if (!classData.topic || !classData.description || !classData.datetime ||
      !classData.duration || !classData.capacity || !classData.price === null) {
      return;
    }
    createClass(classData.topic, classData.description, classData.datetime, classData.duration, classData.capacity, classData.price);
    //   topicInput.val("");
    //   descriptInput.val("");
    //   $('input[name=studOrInst]:checked',
    //     '#s').val("");
  });

  function createClass(topic, description, datetime, duration, capacity, price) {
    $.post("/classes/add", {
        topic: topic,
        description: description,
        datetime: datetime,
        duration: duration,
        capacity: capacity,
        price: price
      })
      .then(addedClass => {
        res.render ("/classes/all")
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(error => console.log(error));
  };
});