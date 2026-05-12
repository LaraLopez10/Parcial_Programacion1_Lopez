//GET ALL
async function getCelulares() {
  try {
    const res = await fetch('http://localhost:3000/celulares');
    const celulares = await res.json();

    const contenedor = document.getElementById("celulares");
    contenedor.innerHTML = "";

    celulares.forEach(c => {
      let col = document.createElement("div");
      col.className = "col-md-4";

col.innerHTML = `
  <div class="card shadow-sm mb-4">
    <div class="card-body">

      <span class="badge bg-secondary mb-2">
        ID: ${c.id}
      </span>

      <h5 class="card-title">${c.nombre}</h5>

      <p class="card-text">
        Precio: $${c.precio}
      </p>

      <p class="card-text">
        Stock: ${c.stock}
      </p>

      <button class="btn btn-warning btn-sm"
      onclick="actualizarCelular(${c.id})">
        Editar
      </button>

      <button class="btn btn-danger btn-sm"
      onclick="eliminarCelular(${c.id})">
        Eliminar
      </button>

    </div>
  </div>
`;

      contenedor.appendChild(col);
    });

  } catch (error) {
    console.error(error);
  }
}


//  CLAVE: ejecutar cuando carga la página
window.onload = getCelulares;