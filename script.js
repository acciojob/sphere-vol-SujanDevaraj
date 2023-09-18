function volume_sphere() {
    //Write your code here
	 var radius = parseFloat(document.getElementById("radius").value);

            // Check if the input is a valid number
            if (isNaN(radius)) {
                document.getElementById("volume").textContent = "Please enter a valid number for the radius.";
            } else {
                // Calculate the volume of the sphere
                var volume = (4/3) * Math.PI * Math.pow(radius, 3);

                // Display the result in the "volume" paragraph
                document.getElementById("volume").textContent = "The volume of the sphere is " + volume.toFixed(2);
            }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
