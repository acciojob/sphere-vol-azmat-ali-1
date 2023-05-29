function volume_sphere() {
    //Write your code here
 const radius = document.getElementById("radius").value;
  const vol = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = vol.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
