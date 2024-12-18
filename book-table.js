document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");
  const loadingDiv = document.getElementById("loading");
  const submitButton = document.getElementById("submit_btn");

  form.addEventListener("submit", function (event) {
    loadingDiv.style.display = "block";
    submitButton.style.display = "none";
  });
});
