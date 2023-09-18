function volume_sphere() {
    //Write your code here
	var radius = document.getElementById("radius").value;
	let f=4/3;
	let v=f*Math.PI*Math.pow(radius, 3);
    document.getElementById("volume").innerHTML =  v.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
