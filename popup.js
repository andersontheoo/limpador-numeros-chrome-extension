/*
 * Projeto: Limpador de Números (Chrome Extension)
 * Autor: AndersonTheo
 * Contato: andersontheoo@gmail.com
 * GitHub: https://github.com/andersontheoo/limpador-numeros-chrome-extension
 *
 * Descrição:
 * Extensão para remover caracteres não numéricos de listas de números,
 * limpando automaticamente ao colar ou digitar.
 *
 * Criado para fins educacionais e uso pessoal.
 */

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');
  const feedback = document.getElementById('feedback');

  if (!input || !output || !copyBtn || !feedback) {
    console.error('Erro: elementos do DOM não encontrados');
    return;
  }

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

  // Limpa automaticamente ao colar/digitar
  input.addEventListener('input', () => {
    output.value = limparNumeros(input.value);
  });

  // Copiar resultado
  copyBtn.addEventListener('click', async () => {
    if (!output.value) {
      mostrarFeedback('Nada para copiar', 'error');
      return;
    }

    try {
      await navigator.clipboard.writeText(output.value);
      mostrarFeedback('Números copiados com sucesso!');
    } catch (err) {
      console.error(err);
      mostrarFeedback('Erro ao copiar', 'error');
    }
  });
});
