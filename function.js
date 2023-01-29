document.getElementById("boton").onclick= function () {
  console.log("capturamos evento clic");
  document.getElementById("demo").innerHTML = "Soy Felipe, estudiante de primer año de Ingeniería Electromecánica, sé programar, tengo amplios conocimientos en pseudocódigo (pseint) y conocimientos en Pyhton."
  }
document.getElementById("boton_ver_menos").addEventListener("click", function() {
    document.getElementById("demo").style.display = "none";
});