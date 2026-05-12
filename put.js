async function actualizarCelular(id) {

  const nombre = prompt("Nuevo nombre:");
  const precio = prompt("Nuevo precio:");
  const stock = prompt("Nuevo stock:");

  if (!nombre || !precio || !stock) {
    alert("Complete todos los campos");
    return;
  }

  const celularActualizado = {
    nombre: nombre,
    precio: Number(precio),
    stock: Number(stock)
  };

  try {

    const res = await fetch(`http://localhost:3000/celulares/${id}`, {

      method: 'PUT',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(celularActualizado)

    });

    if (!res.ok) {
      throw new Error("Error al actualizar");
    }

    alert("Celular actualizado");

    getCelulares();

  } catch (error) {

    console.error(error);
    alert("No se pudo actualizar");

  }

}