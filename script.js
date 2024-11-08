
document.addEventListener("DOMContentLoaded", function() {
  const textInput = document.getElementById("textInput");
  const keys = document.querySelectorAll(".keyboard button");
    // Prevent default keyboard from opening on mobile by removing focus
    textInput.addEventListener("focus", function(e) {
      this.blur(); // Remove focus to prevent default keyboard from opening
    });
  

  if (textInput.value.length >= 4) {
      textInput.value = textInput.value.slice(0, -4);
  }

  keys.forEach(key => {
      key.addEventListener("click", () => {
          const char = key.getAttribute("data-char");
          // Focus textInput to enable updates with custom keyboard
          textInput.focus(); 

          if (char === "←") {
              // Backspace functionality
              textInput.value = textInput.value.slice(0, -1);
              textInput.value = textInput.value.slice(0, -1);
          }else if (char === "←←") {
            textInput.value = textInput.value.slice(0, -1);
          }else if (char === "space") {
              // Space functionality
              console.log("Space is pressed");
              textInput.value += ' ';
          }else if (char === "↩") {
            // Enter functionality (new line)
            textInput.value += '\n';  // Adds a new line
          }else {
              // Insert character
              textInput.value += char;
          }
      });
  });
});

// Prevent default keyboard from opening if possible
document.getElementById('textInput').addEventListener('focus', function(e) {
  e.preventDefault(); // Attempt to prevent the default keyboard from opening
  this.blur(); // Blurring here, assuming custom keyboard will manage focus
});

// Focus back to simulate the custom keyboard input (optional)
document.querySelector('.keyboard').addEventListener('click', function() {
  document.getElementById('textInput').focus(); // Bring focus back for custom input
});


// Function to toggle the display of keyboards
function toggleKeyboard(keyboardId) {
  // Hide all keyboards
  const keyboards = document.querySelectorAll('.keyboard');
  keyboards.forEach(keyboard => {
      keyboard.style.display = 'none'; // Hide all keyboards
  });

  // Show the selected keyboard
  const selectedKeyboard = document.getElementById(keyboardId);
  hideAllKeyboards();
  if (selectedKeyboard) {
      selectedKeyboard.style.display = 'flex'; // Show the selected keyboard
      selectedKeyboard.style.flexDirection = 'row'; // Ensure it's in row layout
  }
}

// Function to hide all keyboard elements (if needed in future extensions)
function hideAllKeyboards() {
  const keyboards = document.querySelectorAll(".keyboard");
  keyboards.forEach(keyboard => {
      keyboard.style.display = "none";
  });
}

function hideAllKeyboards() {
  for (let i = 1; i <= 12; i++) {
    const keyboard = document.getElementById(`keyboard${i}`);
    if (keyboard) {
      keyboard.style.display = "none";
    }
  }
}

// // Function to show a specific alternate keyboard
// function showOtherKeyboard() {
//   hideAllKeyboards(); // Hide all keyboards
//   document.getElementById("otherKeyboard").style.display = "flex"; // Display the specific alternate keyboard
// }

// Function to show the second alternate keyboard (signs) and hide all others
function showOtherKeyboards() {
  hideAllKeyboards(); // Hide all keyboards
  document.getElementById("otherKeyboard").style.display = "none";
  document.getElementById("otherKeyboardsigns").style.display = "flex"; // Show the second alternate keyboard
}

// Function to show the main keyboard (keyboard1) only
function showMainKeyboard() {
  hideAllKeyboards(); // Ensure all keyboards are hidden first
  document.getElementById("otherKeyboard").style.display = "none";
  document.getElementById("otherKeyboardsigns").style.display = "none"; 
  document.getElementById("keyboard1").style.display = "flex"; // Display the main keyboard
}
