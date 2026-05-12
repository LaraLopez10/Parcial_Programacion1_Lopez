//POST 
async function cargarCelular(event) {
  event.preventDefault();

  const celulares = {
    nombre: document.getElementById("nombre").value,
    precio: parseFloat(document.getElementById("precio").value),
    stock: document.getElementById("stock").value || null
  };

  try {
    await fetch('http://localhost:3000/celulares', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(celulares)
    });

    alert("Celular agregado");

    document.querySelector("form").reset();

    //recargar lista
    getCelulares();

  } catch (error) {
    console.error(error);
  }
}