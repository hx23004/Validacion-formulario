document
  .getElementById("miFormulario")
  .addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const check1 = document.getElementById("check1").checked;
    const check2 = document.getElementById("check2").checked;
    const pais = document.getElementById("pais").value;
    const fechaInicioInput = document.getElementById("fechaInicio").value;
    const fechaTerminoInput = document.getElementById("fechaCierre").value;
    let errores = [];

    if (nombre === "") {
      errores.push("El campo nombre es obligatorio");
    }
    if (apellido === "") {
      errores.push("El campo apellido es obligatorio");
    }
    if (!check1 || !check2) {
      errores.push("Ambos checkboxes son obligatorios");
    }
    if (pais === "") {
      errores.push("Seleccionar un país es obligatorio");
    }

    if (fechaInicioInput === "" || fechaTerminoInput === "") {
      errores.push("Los campos fechas son obligatorios");
    } else if (Date.parse(fechaInicioInput) > Date.parse(fechaTerminoInput)) {
      errores.push("La fecha de inicio es mayor a la de cierre");
    }

    if (errores.length > 0) {
      e.preventDefault();
      for (const error of errores) {
        window.alert(error);
      }
    }
  });

document
  .getElementById("btnverificador")
  .addEventListener("click", function () {
    const fechaInicioInput = document.getElementById("fechaInicio").value;
    const fechaTerminoInput = document.getElementById("fechaCierre").value;
    if (fechaInicioInput === "" || fechaTerminoInput === "") {
      window.alert("Los campos fechas son obligatorios");
    } else {
      if (Date.parse(fechaInicioInput) > Date.parse(fechaTerminoInput)) {
        window.alert("La fecha de inicio es mayor a la de cierre");
      } else {
        var opciones =
          "left=100, top=100, width=650, height=450, toolbar=yes, menubar=yes";
        var ventana = window.open("", "Nueva", opciones);
        ventana.document.write(`
          <html>
            <head>
              <title>Verificación exitosa</title>
              <link rel="stylesheet" href="css/style.css">
            </head>
            <body>
              <h1>Fechas correctas</h1>
              <p>Fecha inicio: ${fechaInicioInput}</p>
              <p>Fecha de cierre: ${fechaTerminoInput}</p>
            </body>
          </html>
        `);
        ventana.document.close();
      }
    }
  });

document.getElementById("btnEstilo").addEventListener("click", function () {
  const caja = document.getElementById("caja");
  caja.style.backgroundColor = "#ffc";
  caja.style.border = "2px solid green";
  caja.style.padding = "20px";
});
