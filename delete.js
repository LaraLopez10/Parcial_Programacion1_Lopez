// DELETE
async function eliminarCelular(id) {
  if (!confirm("¿Seguro que querés eliminar este celular?")) return;

  try {
    const res = await fetch(`http://localhost:3000/celulares/${id}`, {
      method: 'DELETE'
    });

    if (!res.ok) {
      throw new Error("Error al eliminar");
    }

    alert("Celular eliminado");

    // 🔥 refrescar lista
    getCelulares();

  } catch (error) {
    console.error(error);
    alert("No se pudo eliminar");
  }
}