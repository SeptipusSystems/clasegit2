var i;

function agregar_galeria(galeria, titulo, subtitulo, imagen) {
  var div = document.createElement("div");
  div.className = "imagen";
  var img = document.createElement("div");
  img.className = "img";
  img.style.backgroundImage = "url(" + imagen + ")";
  var tit = document.createElement("p");
  tit.className = "name";
  tit.innerHTML = titulo;
  var sub = document.createElement("p");
  sub.className = "email";
  sub.innerHTML = subtitulo;
  div.appendChild(img);
  div.appendChild(tit);
  div.appendChild(sub);
  galeria.appendChild(div);
}

window.addEventListener("load", function () {
  var galeria = document.getElementById("galeria");

  fetch("../resource/galeria.json", { mode: "no-cors" })
    .then((response) => {
      // Convertir la respuesta a JSON
      return response.json();
    })
    .then((data) => {
      // Trabajar con los datos obtenidos
      i = 0;
      for (var clave in data) {
        if (data.hasOwnProperty(clave)) {
          var valor = data[clave];
          agregar_galeria(
            galeria,
            valor["titulo"],
            valor["subtitulo"],
            valor["imagen"]
          );
          i++;
        }
      }
      galeria.style.gridTemplateColumns = "repeat(" + i + ", 1fr)";
    })
    .catch((error) => {
      // Capturar y manejar errores de la solicitud
      console.error("Error:", error);
    });
});
