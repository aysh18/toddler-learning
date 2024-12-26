// Text-to-speech function
function speak(text) {
    if ('speechSynthesis' in window) {
      var synthesis = window.speechSynthesis;
      var utterance = new SpeechSynthesisUtterance(text);
      synthesis.speak(utterance);
    } else {
      console.log('Text-to-speech not supported.');
    }
  }
  
  // Attach event listeners to color options
  var colorOptions = document.querySelectorAll(".colorOption");
  colorOptions.forEach(function(option) {
    option.addEventListener("click", function() {
      var selectedColor = this.getAttribute("data-color");
      document.getElementById("colorShape").style.backgroundColor = selectedColor;
      document.getElementById("colorResult").textContent = "You selected " + selectedColor;
      speak(selectedColor); // Speak the selected color
    });
  });
  
  // Attach event listeners to alphabet options
  var alphabetOptions = document.querySelectorAll(".alphabetOption");
  alphabetOptions.forEach(function(option) {
    option.addEventListener("click", function() {
      var selectedAlphabet = this.textContent;
      document.getElementById("alphabetDisplay").textContent = selectedAlphabet;
      document.getElementById("alphabetResult").textContent = "You selected " + selectedAlphabet;
      speak(selectedAlphabet); // Speak the selected alphabet
    });
  });
  
  // Attach event listeners to number options
  var numberOptions = document.querySelectorAll(".numberOption");
  numberOptions.forEach(function(option) {
    option.addEventListener("click", function() {
      var selectedNumber = this.textContent;
      document.getElementById("numberDisplay").textContent = selectedNumber;
      document.getElementById("numberResult").textContent = "You selected " + selectedNumber;
      speak(selectedNumber); // Speak the selected number
    });
  });
  
  // Show next activity when Next button is clicked
  var btnNext = document.getElementById("btnNext");
  var activities = document.querySelectorAll(".activity");
  var currentActivityIndex = 0;
  
  btnNext.addEventListener("click", function() {
    activities[currentActivityIndex].style.display = "none";
    currentActivityIndex = (currentActivityIndex + 1) % activities.length;
    activities[currentActivityIndex].style.display = "block";
  });
  