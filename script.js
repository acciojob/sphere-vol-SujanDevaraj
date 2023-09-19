function volume_sphere() {
    //Write your code here
	 const r = document.getElementById("radius").value;

	const v = (4/3) * Math.PI * Math.pow(r, 3);
	document.getElementById("volume").value=v;
	//vol.value=v;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
