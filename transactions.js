const { db } = require("./firebaseService");

async function hacerTransaccion(monto, idEmisor, idReceptor){
    const userEmisorRef = db.collection('usuarios').doc(idEmisor);
    const userReceptorRef = db.collection('usuarios').doc(idReceptor);

    await db.runTransaction(async (t) => {
        const emisorDoc = await t.get(userEmisorRef);
        const receptorDoc = await t.get(userReceptorRef);

        if (!emisorDoc.exists || !receptorDoc.exists) {
            throw new Error("Usuario no existe");
        }

        const saldoEmisor = emisorDoc.data().saldo;
        const saldoReceptor = receptorDoc.data().saldo;

        if (saldoEmisor < monto) {
            throw new Error("Saldo insuficiente");
        }

        t.update(userEmisorRef, { saldo: saldoEmisor - monto });
        t.update(userReceptorRef, { saldo: saldoReceptor + monto });

        t.set(db.collection('transacciones').doc(), {
            monto,
            de: idEmisor,
            para: idReceptor,
            fecha: new Date()
        });
    });

    console.log("Transacción realizada correctamente");
}

// EJEMPLO:
hacerTransaccion(10000, "ID_EMISOR", "ID_RECEPTOR");
