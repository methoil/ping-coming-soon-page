function onEnterEmail() {
  const inputText = document.getElementById("email-form");
  const email = inputText.value;

  const feedbackElement = document.getElementById("email-input-feedback");
  if (validateEmail(email)) {
    feedbackElement.innerHTML =
      "You have successfully signed up for our mailing list!";
    feedbackElement.style.color = "gray";
  } else {
    feedbackElement.innerHTML = "Please ender a valid email address!";
    feedbackElement.style.color = "red";
  }
}

function validateEmail(email) {
  let textParts = email.split("@");
  if (textParts.length !== 2) {
    return false;
  }
  textParts = [textParts[0], ...textParts[1].split(".")];
  if (textParts.length !== 3) {
    return false;
  }
  return true;
}
