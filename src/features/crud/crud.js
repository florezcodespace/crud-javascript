document.addEventListener("DOMContentLoaded", mostrar);

let editIndex = null;

// Obtener usuarios
function obtener() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

// Guardar usuario
function guardar() {
  const nombreInput = document.getElementById("nombre");
  const correoInput = document.getElementById("correo");
  const documentoInput = document.getElementById("documento");

  const nombre = nombreInput.value.trim();
  const correo = correoInput.value.trim();
  const documento = documentoInput.value.trim();

  if (!nombre || !correo || !documento) {
    alert("Todos los campos son obligatorios");
    return;
  }

  let usuarios = obtener();

  // Validar duplicados
  const existe = usuarios.some(
    (u, i) =>
      (u.correo === correo || u.documento === documento) && i !== editIndex,
  );

  if (existe) {
    alert("Correo o documento ya existen");
    return;
  }

  if (editIndex === null) {
    usuarios.push({ nombre, correo, documento });
  } else {
    usuarios[editIndex] = { nombre, correo, documento };
    editIndex = null;
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  limpiar();
  mostrar();
}

// Mostrar usuarios
function mostrar() {
  const tabla = document.getElementById("tabla");
  tabla.innerHTML = "";

  obtener().forEach((u, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>${u.documento}</td>
        <td>
          <button class="btn btn-warning btn-sm me-2" onclick="editar(${i})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// Eliminar usuario
function eliminar(i) {
  let usuarios = obtener();
  usuarios.splice(i, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrar();
}

// Editar usuario
function editar(i) {
  let u = obtener()[i];

  document.getElementById("nombre").value = u.nombre;
  document.getElementById("correo").value = u.correo;
  document.getElementById("documento").value = u.documento;

  editIndex = i;
}

// Limpiar inputs
function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("documento").value = "";
}
