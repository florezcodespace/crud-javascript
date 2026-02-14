function esperar() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Proceso completado 🚀"), 2000);
  });
}

async function ejecutar() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Cargando...";

  const mensaje = await esperar();
  resultado.innerHTML = mensaje;
}
