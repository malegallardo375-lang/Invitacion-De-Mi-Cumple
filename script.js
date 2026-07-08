const formulario = document.getElementById("formulario");
const boton = formulario.querySelector("button");

const URL = "https://script.google.com/macros/s/AKfycbwsHxWN4WUKu32LeTV08t2ohHbc0AeB2eLceVUqGl0U21US2ovTxDvbGK2Tr723oZ1mvw/exec";

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    // Deshabilitar el botón apenas lo tocan
    boton.disabled = true;
    boton.textContent = "Enviando...";

    try {
       await fetch(URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
        nombre: nombre
    })
});


        


const caja = document.querySelector(".formulario");

caja.innerHTML = `
<div class="gracias">
    <div class="emoji">🐰💖</div>

    <h2> <strong>${nombre}</strong>, <br>¡Gracias por confirmar tu asistencia!.</h2>
    ¡Gracias por confirmar!
    <p class="texto">
        ¡Te espero el <b>25 de julio</b><br>
        para celebrar mis <b>2 añitos!</b> 🎉
    </p>

    <div class="corazon">💕</div>
</div>
`;

    } catch (error) {
        boton.disabled = false;
        boton.textContent = "Confirmar";

        alert("No se pudo enviar la confirmación. Intentá nuevamente.");
    }
});