//GET BY ID
async function buscarCelular() {
  const id = document.getElementById("buscarId").value;

  if (!id) {
    alert("Ingrese un ID");
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/celulares/${id}`);

    if (!res.ok) {
      throw new Error("No encontrado");
    }

    const p = await res.json();

    const contenedor = document.getElementById("celulares");
    contenedor.innerHTML = "";

    let col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card shadow-sm mb-4">
        <div class="card-body">
          <h5>${p.nombre}</h5>
          <p> $${p.precio}</p>
          <p> ${p.stock}</p>
        </div>
      </div>
    `;

    contenedor.appendChild(col);

  } catch (error) {
    alert("Celular no encontrado");
  }
}