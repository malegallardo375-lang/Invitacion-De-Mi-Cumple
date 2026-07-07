const formulario = document.getElementById("formulario");

const URL = "https://script.google.com/macros/s/AKfycbwsHxWN4WUKu32LeTV08t2ohHbc0AeB2eLceVUqGl0U21US2ovTxDvbGK2Tr723oZ1mvw/exec";

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    try {
        await fetch(URL, {
            method: "POST",
            mode: "no-cors",   // 👈 ESTA ES LA CLAVE
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                nombre: nombre
            })
        });

        document.getElementById("mensaje").innerHTML =
            `¡Gracias ${nombre}! 💗 Tu asistencia fue confirmada.`;

        formulario.reset();

    } catch (error) {
        console.error(error);
        alert("No se pudo enviar la confirmación.");
    }
});