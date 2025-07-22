// === Mood-based food spots ===
var moodSpots = {
  sad: [
    { name: "Inside Scoop", image: "assets/images/inside-scoop.jpg" },
    { name: "Dip N Dip", image: "assets/images/dipndip.jpg" }
  ],
  happy: [
    { name: "Tous Les Jours", image: "assets/images/touslesjours.jpg" },
    { name: "myPizzaLab", image: "assets/images/myPizzaLab.jpg" }
  ],
  angry: [
    { name: "Zhang LaLa Mee Tarik", image: "assets/images/zhanglala.jpg" },
    { name: "K Fry Urban Korean", image: "assets/images/kfry.jpg" }
  ],
  stressed: [
    { name: "Noto Cafe & Bakery", image: "assets/images/noto.jpg" },
    { name: "Traffic Bean", image: "assets/images/trafficbean.jpg" }
  ],
  bored: [
    { name: "Fortune Street", image: "assets/images/fortunestreet.jpg" },
    { name: "Ruma Fusion & co", image: "assets/images/ruma.jpg" }
  ]
};

// === Run after page loads ===
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  var resultsContainer = document.getElementById("filteredResults");
  var resultsTitle = document.getElementById("resultsTitle");
  var moodMessage = document.getElementById("moodMessage");

  // === Show spots based on mood ===
  function showMoodSpots(mood) {
    var moodMessages = {
      sad: "Sad day? Let’s drown those feels in ice cream and chocolate 🍦🍫",
      happy: "You’re glowing! Treat yourself to something as awesome as your mood ✨",
      angry: "Need to blow off steam? Grab some spicy food and unleash the fire 🌶️🔥",
      stressed: "Too many assignments? Take a breather with chill vibes and chill bites 🧘🍵",
      bored: "Nothing to do? Let’s go on a mini food adventure 🗺️🍔"
    };

    var spots = moodSpots[mood];
    resultsTitle.textContent = mood.charAt(0).toUpperCase() + mood.slice(1) + " Mood Picks";
    moodMessage.textContent = moodMessages[mood] || "Here are some tasty spots to try!";
    renderSpots(spots);
  }

  // === Show all food spots ===
  function showAllSpots() {
    var allSpots = [].concat.apply([], Object.values(moodSpots)); // flatten all arrays
    resultsTitle.textContent = "All Food Spots";
    moodMessage.textContent = "Explore them all and pick your fave!";
    renderSpots(allSpots);
  }

  // === Display food spot cards ===
  function renderSpots(spots) {
    resultsContainer.innerHTML = "";
    spots.forEach(function (spot) {
      var spotCard = document.createElement("div");
      spotCard.className = "spot-card";
      spotCard.innerHTML = `
        <img src="${spot.image}" alt="${spot.name}">
        <h4>${spot.name}</h4>
      `;
      resultsContainer.appendChild(spotCard);
    });
  }

  // === Mood button clicks ===
  var moodButtons = document.querySelectorAll(".mood-btn");
  moodButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var mood = btn.dataset.mood;
      showMoodSpots(mood);
    });
  });

  // === Reset button ===
  var resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", showAllSpots);

  // === On page load default ===
  resultsTitle.textContent = "We'll match you with the perfect food spot.";
  moodMessage.textContent = "";
  resultsContainer.innerHTML = "";

  // === Hamburger menu toggle ===
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
