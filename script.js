document.addEventListener("DOMContentLoaded", function() {
    var resultsDiv = document.getElementById("results");
  
    var planets = {
      "The Sun": { gravity: 27.01, image: "images/sun.jpg" },
      "Mercury": { gravity: 0.38, image: "images/Mercury.jpg" },
      "Venus": { gravity: 0.91, image: "images/venus.jpg" },
      "Earth": { gravity: 1, image: "images/earth.jpg" },
      "The Moon": { gravity: 0.166, image: "images/moon.jpg" },
      "Mars": { gravity: 0.38, image: "images/mars.jpg" },
      "Jupiter": { gravity: 2.34, image: "images/jupiter.jpg" },
      "Saturn": { gravity: 1.06, image: "images/saturn.jpg" },
      "Uranus": { gravity: 0.92, image: "images/uranus.jpg" },
      "Neptune": { gravity: 1.19, image: "images/neptune.jpg" },
      "Pluto": { gravity: 0.06, image: "images/pluto.jpg" }
    };
  
    // Display planet divs with images and weight placeholders
    for (var planet in planets) {
      var planetImage = planets[planet].image;
      resultsDiv.innerHTML += '<div class="planet-div"><img src="' + planetImage + '" alt="' + planet + '"><p>' + planet + '</p><p>Your weight: <span id="' + planet + '-weight">--</span> kg</p></div>';
    }
  
    var calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", function() {
      var weightInput = document.getElementById("weight");
      var weight = parseFloat(weightInput.value);
  
      if (!isNaN(weight)) {
        // Calculate weights
        for (var planet in planets) {
          var planetWeight = weight * planets[planet].gravity;
          var planetWeightElement = document.getElementById(planet + "-weight");
          planetWeightElement.textContent = planetWeight.toFixed(2);
        }
      } else {
        // Display error message
        for (var planet in planets) {
          var planetWeightElement = document.getElementById(planet + "-weight");
          planetWeightElement.textContent = "Please enter a valid weight";
        }
      }
    });
  });
  
  
  