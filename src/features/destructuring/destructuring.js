function mostrar() {
  const persona = {
    nombre: "Andrés",
    edad: 20,
    ciudad: "Medellín",
  };

  const { nombre, edad, ciudad } = persona;

  document.getElementById("resultado").innerHTML =
    `Nombre: ${nombre} <br> Edad: ${edad} <br> Ciudad: ${ciudad}`;
}
