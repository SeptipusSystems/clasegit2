window.addEventListener("load", function () {
  var btn_siguiente = document.getElementById("siguiente");
  var galeria = document.getElementById("galeria");
  btn_siguiente.addEventListener("click", function (e) {
    var variable_magica = i * 220 - 560;
    var right = 0;
    var anterior = galeria.style.right.match(/-?\d+/);
    if (anterior !== null) {
      right = parseInt(anterior[0], 10) + 220;
    } else {
      right = 220;
    }
    if (right >= variable_magica) {
      right = 0;
    }
    galeria.style.right = right + "px";
    console.log(galeria.style.right);
  });
  var btn_anterior = document.getElementById("anterior");
  btn_anterior.addEventListener("click", function (e) {
    var variable_magica = i * 220 - 560;
    var right = 0;
    var anterior = galeria.style.right.match(/-?\d+/);
    if (anterior !== null) {
      right = parseInt(anterior[0], 10) - 220;
    } else {
      right = variable_magica;
    }
    if (right <= 0) {
      right = variable_magica;
    }
    galeria.style.right = right + "px";
    console.log(galeria.style.right);
  });
});
