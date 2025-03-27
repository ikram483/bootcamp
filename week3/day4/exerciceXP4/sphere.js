// Wait until the page is fully loaded
window.onload = function () {
    // Get the form
    const form = document.getElementById('MyForm');
  
    form.onsubmit = function (event) {
      event.preventDefault(); // Prevent form from submitting
  
      // Get radius value from the input
      const radius = parseFloat(document.getElementById('radius').value);
  
      if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for radius.");
        return;
      }
  
      // Calculate volume using the formula: (4/3) * π * r^3
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  
      // Display the volume in the volume input field
      document.getElementById('volume').value = volume.toFixed(2);
    };
  };
  