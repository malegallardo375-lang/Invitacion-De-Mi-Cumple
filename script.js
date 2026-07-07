const formulario = document.getElementById("formulario");

const URL = "https://script.google.com/macros/s/AKfycbwsHxWN4WUKu32LeTV08t2ohHbc0AeB2eLceVUqGl0U21US2ovTxDvbGK2Tr723oZ1mvw/exec";

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

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

        document.querySelector(".formulario").innerHTML = `
            <div class="gracias">
                <div class="emoji">🐰💖</div>

                <h2>¡Gracias por confirmar!</h2>

                <p>
                    <strong>${nombre}</strong>, tu asistencia quedó registrada.
                </p>

                <p class="texto">
                    ¡Los esperamos el <b>25 de julio</b><br>
                    para celebrar los <b>2 añitos de Amparo</b> 🎉
                </p>

                <div class="corazon">💕</div>
            </div>
        `;

    } catch (error) {
        alert("No se pudo enviar la confirmación.");
    }
});