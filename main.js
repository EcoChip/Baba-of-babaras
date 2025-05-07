const recursos = {
  madera: 100,
  comida: 100,
  piedra: 100,
  babaras: 50,
  gemas: 5
};

function actualizarRecursos() {
  for (let key in recursos) {
    document.getElementById(key).textContent = recursos[key];
  }
}

window.actualizarRecursos = actualizarRecursos;
window.recursos = recursos;

function construir(tipo) {
  const zona = document.getElementById("zona-construccion");
  const x = Math.random() * (zona.clientWidth - 64);
  const y = Math.random() * (zona.clientHeight - 64);

  const evento = new CustomEvent("construir", {
    detail: { tipo, x, y }
  });
  window.dispatchEvent(evento);
}

window.construir = construir;
