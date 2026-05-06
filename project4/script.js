document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("radiantForm");
   const nameInput = document.getElementById("visitorName");
   const messageArea = document.getElementById("messageArea");

   form.addEventListener("submit", function (event) {
      event.preventDefault();

      const visitorName = nameInput.value.trim();

      if (visitorName === "") {
         messageArea.textContent = "Please enter your name.";
      } else {
         messageArea.textContent = 
            "Welcome, " + visitorName + "! You have taken the first step toward becoming a Knight Radiant.";
      }
   });
});
