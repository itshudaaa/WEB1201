document.addEventListener("DOMContentLoaded", function () {
  // Switching between signup and login forms
  var signupBtn = document.getElementById("showSignup");
  var loginBtn = document.getElementById("showLogin");
  var signupForm = document.getElementById("signupForm");
  var loginForm = document.getElementById("loginForm");

  signupBtn.addEventListener("click", function () {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });

  loginBtn.addEventListener("click", function () {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  });

  // Hamburger menu
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  var allLinks = navLinks.querySelectorAll("a");
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", function () {
      navLinks.classList.remove("show");
    });
  }

  // Sign up form submit
  var signupFormElement = document.getElementById("signupFormElement");
  signupFormElement.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim();
    var password = document.getElementById("signupPassword").value;

    if (name === "" || email === "" || password === "") {
      alert("❗ Please fill in all fields.");
      return;
    }

    // Password restrictions: 6+ characters, at least 1 number and 1 letter
    var hasNumber = /\d/.test(password);
    var hasLetter = /[a-zA-Z]/.test(password);
    if (password.length < 6 || !hasNumber || !hasLetter) {
      alert("❗ Password must be at least 6 characters long and include letters and numbers.");
      return;
    }

    alert("Account created successfully, " + name + "!");
    signupFormElement.reset();
  });

  // Login form submit
  var loginFormElement = document.getElementById("loginFormElement");
  loginFormElement.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
      alert("❗ Please enter email and password.");
    } else {
      alert("✅ Login successful!");
      window.location.href = "spots.html"; // Redirect to Spots page
    }
  });
});
