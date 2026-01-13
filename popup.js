document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');

  input.addEventListener('input', () => {
      const cleaned = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
      output.value = cleaned;
  });

  copyBtn.addEventListener('click', async () => {
      const textoParaCopiar = output.value;

      try {
          await navigator.clipboard.writeText(textoParaCopiar);
          // Forneça um feedback visual claro ao usuário
          alert('Números copiados para a área de transferência!'); // Ou uma mensagem mais sutil no popup
      } catch (err) {
          console.error('Falha ao copiar para a área de transferência: ', err);
          alert('Erro ao copiar para a área de transferência.');
      }
  });
});