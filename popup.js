document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');
  const feedback = document.getElementById('feedback');

  function limparNumeros(texto) {
    return texto.replace(/\D/g, '');
  }

  function mostrarFeedback(mensagem, tipo = 'success') {
    feedback.textContent = mensagem;
    feedback.className = `feedback ${tipo}`;
    feedback.classList.remove('hidden');

    setTimeout(() => {
      feedback.classList.add('hidden');
    }, 2000);
  }

  input.addEventListener('input', () => {
    output.value = limparNumeros(input.value);
  });

  copyBtn.addEventListener('click', async () => {
    if (!output.value) {
      mostrarFeedback('Nada para copiar', 'error');
      return;
    }

    try {
      await navigator.clipboard.writeText(output.value);
      mostrarFeedback('Números copiados com sucesso!');
    } catch (error) {
      console.error(error);
      mostrarFeedback('Erro ao copiar', 'error');
    }
  });
});
