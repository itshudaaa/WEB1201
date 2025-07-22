// === FORM VALIDATION SCRIPT FOR CONTACT PAGE ===
//Validates form input before allowing submission
// Includes length checks, email pattern check, and feedback messages

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Create a space to show messages
  const feedback = document.createElement("p");
  form.appendChild(feedback);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent real submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // === Basic email pattern to check if email is valid ===
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // === Input validation ===
    if (name.length < 2) {
      feedback.textContent = "❌ Please enter your full name.";
      feedback.className = "error";
      return;
    }

    if (!email.match(emailPattern)) {
      feedback.textContent = "❌ Please enter a valid email address.";
      feedback.className = "error";
      return;
    }

    if (message.length < 10) {
      feedback.textContent = "❌ Your message must be at least 10 characters.";
      feedback.className = "error";
      return;
    }

    // === If all is good ===
    feedback.textContent = "✅ Message sent successfully!";
    feedback.className = "success";

    // Optional: clear fields after success
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    // Optional: redirect to thank you page after a delay
    setTimeout(() => {
      window.location.href = "thankyou.html"; // Replace with actual redirect page if any
    }, 2000);
  });
});



  // === HAMBURGER MENU TOGGLE ===
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
