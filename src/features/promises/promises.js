function validarNumero(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num > 10
        ? resolve("Número mayor a 10 ✅")
        : reject("Número menor o igual a 10 ❌");
    }, 1000);
  });
}

function evaluar() {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "Procesando...";

  validarNumero(Number(numero))
    .then((res) => (resultado.innerHTML = res))
    .catch((err) => (resultado.innerHTML = err));
}
