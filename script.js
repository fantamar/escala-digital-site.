const form = document.getElementById('quizForm');
const resultado = document.getElementById('resultado');
const resumo = document.getElementById('resumo');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const procura = form.procura.value;
    const trabalha = form.trabalha.value;

    resumo.innerHTML = `
      Você está procurando: <strong>${procura}</strong><br>
      Você trabalha com: <strong>${trabalha}</strong>
    `;

    form.style.display = 'none';
    resultado.classList.remove('hidden');
  });
}
