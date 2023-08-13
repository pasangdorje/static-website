// function to validate contact form
function validateForm() {
  var name = $("#name").val();
  var email = $("#email").val();
  var feedback = $("#feedback").val();
  var isFormValid = false;
  if (!name.trim()) {
    $("#nameErrorMsg").text("*Please enter your name");
    isFormValid = false;
  } else {
    $("#nameErrorMsg").text("");
    isFormValid = true;
  }

  if (!email.trim()) {
    $("#emailErrorMsg").text("*Please enter your email");
    isFormValid = false;
  } else {
    $("#emailErrorMsg").text("");
    isFormValid = true;
  }

  if (!feedback.trim()) {
    $("#feedbackErrorMsg").text("*Please enter your feedback");
    isFormValid = false;
  } else {
    $("#feedbackErrorMsg").text("");
    isFormValid = true;
  }

  return isFormValid;
}
