const STORAGE_KEY = 'contador';

  const spanContador = document.getElementById('contador');
  const btnIncrementar = document.getElementById('btnIncrementar');

  // Função para atualizar a tela
  function atualizarTela(valor) {
    spanContador.textContent = valor;
  }

  // Função para buscar o valor salvo
  function getContador() {
    return parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0;
  }

  // Função para salvar o valor
  function setContador(valor) {
    localStorage.setItem(STORAGE_KEY, valor);
    atualizarTela(valor);
  }

  // Valor inicial ao carregar a página
  atualizarTela(getContador());

  // Evento de click para incrementar
  btnIncrementar.addEventListener('click', () => {
    const novoValor = getContador() + 1;
    setContador(novoValor);
  });