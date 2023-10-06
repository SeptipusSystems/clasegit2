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
  return item;
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
          item = agregar_item(
            menu,
            valor["texto"],
            valor["icono"],
            valor["link"]
          );
          if ("submenu" in valor) {
            var submenu = document.createElement("ul");
            submenu.className = "submenu";
            submenu.style.display = "none";
            submenu.style.height = 0;
            item.appendChild(submenu);
            var w = 0;
            for (var clave in valor["submenu"]) {
              var v2 = valor["submenu"][clave];
              agregar_item(submenu, v2["texto"], v2["icono"], v2["link"]);
              w++;
            }
            item.addEventListener("click", function (e) {
              if (submenu.style.display == "none") {
                submenu.style.display = "grid";
                submenu.style.height = w * 32 + "px";
              } else {
                submenu.style.display = "none";
                submenu.style.height = 0;
              }
              e.preventDefault();
            });

            item.addEventListener("mouseover", function (e) {
              submenu.style.display = "block";
              submenu.style.height = w * 32 + "px";
            });

            item.addEventListener("mouseout", function (e) {
              submenu.style.display = "none";
              submenu.style.height = 0;
            });
          }
        }
      }
    })
    .catch((error) => {
      // Capturar y manejar errores de la solicitud
      console.error("Error:", error);
    });
});
