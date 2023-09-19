function agregar_item(menu, texto, icon, link) {
  var item = document.createElement("li");
  var a = document.createElement("a");
  var icono = document.createElement("span");
  var span = document.createElement("span");
  icono.className = "icon " + icon;
  span.innerHTML = texto;
  a.appendChild(icono);
  a.appendChild(span);
  a.href = link;
  item.appendChild(a);
  item.className = "item";
  menu.appendChild(item);
}

window.addEventListener("load", function () {
  var menu = document.getElementById("menu");

  fetch("../resource/menu.json", { mode: "no-cors" })
    .then((response) => {
      // Convertir la respuesta a JSON
      return response.json();
    })
    .then((data) => {
      // Trabajar con los datos obtenidos
      for (var clave in data) {
        if (data.hasOwnProperty(clave)) {
          var valor = data[clave];
          agregar_item(menu, valor["texto"], valor["icono"], valor["link"]);
        }
      }
    })
    .catch((error) => {
      // Capturar y manejar errores de la solicitud
      console.error("Error:", error);
    });
});
