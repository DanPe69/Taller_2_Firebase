const db = require("./firebase");

async function crearTransaccion() {
  try {
    const ref = await db.collection("transacciones").add({
      tipo: "ingreso",
      cantidad: 500,
      fecha: new Date()
    });

    console.log("Transacción creada con ID:", ref.id);
  } catch (err) {
    console.error("Error creando la transacción:", err);
  }
}

crearTransaccion();
