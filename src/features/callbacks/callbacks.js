function obtenerCapital(pais, callback) {
  const datos = {
    colombia: "Bogotá",
    mexico: "Ciudad de México",
    argentina: "Buenos Aires",
  };

  setTimeout(() => {
    callback(datos[pais.toLowerCase()] || "No encontrado");
  }, 1000);
}

function buscarPais() {
  const pais = document.getElementById("pais").value;
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "Buscando...";

  obtenerCapital(pais, function (capital) {
    resultado.innerHTML =
      capital === "No encontrado"
        ? "❌ País no registrado"
        : `Capital: ${capital}`;
  });
}
