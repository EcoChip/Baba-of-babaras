const PRECIO_NIVEL = nivel => ({
  madera: 20 * nivel,
  comida: 15 * nivel,
  piedra: 10 * nivel,
  babaras: 5 * nivel
});

function crearGranja(x, y) {
  const img = document.createElement("img");
  img.src = "img/granja_mendi.png";
  img.className = "estructura";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  let nivel = 1;
  let produccion = () => 1 * nivel;
  let intervalo = setInterval(() => {
    window.recursos.babaras += produccion();
    window.actualizarRecursos();
  }, 5000);

  img.onclick = () => {
    const precio = PRECIO_NIVEL(nivel + 1);
    const puedePagar = Object.keys(precio).every(
      r => window.recursos[r] >= precio[r]
    );

    if (nivel >= 14) {
      alert("Nivel máximo alcanzado");
      return;
    }

    if (puedePagar) {
      Object.keys(precio).forEach(r => window.recursos[r] -= precio[r]);
      nivel++;
      alert("Granja mejorada a nivel " + nivel);
      window.actualizarRecursos();
    } else {
      alert("No tienes suficientes recursos para mejorar");
    }
  };

  document.getElementById("zona-construccion").appendChild(img);
}

window.addEventListener("construir", e => {
  if (e.detail.tipo === "granjaMendi") {
    crearGranja(e.detail.x, e.detail.y);
  }
});
