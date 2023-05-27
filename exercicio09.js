// Tempo total do jogo em segundos
const tempoTotal = 10;

// Pontuação inicial
let pontuacao = 0;

// Variáveis de controle do jogo
let tempoRestante = tempoTotal;
let jogoEmAndamento = false;

// Referências aos elementos HTML
const scoreElement = document.getElementById("score");
const buttonElement = document.getElementById("clickButton");

// Função chamada quando o botão é clicado
function aumentarPontuacao() {
  if (jogoEmAndamento) {
    pontuacao++;
    scoreElement.innerText = pontuacao;
  }
}

// Função que inicia o jogo
function iniciarJogo() {
  pontuacao = 0;
  tempoRestante = tempoTotal;
  jogoEmAndamento = true;
  scoreElement.innerText = pontuacao;

  // Atualiza a contagem regressiva a cada segundo
  const timer = setInterval(() => {
    tempoRestante--;
    if (tempoRestante <= 0) {
      clearInterval(timer);
      jogoEmAndamento = false;
      alert("Tempo esgotado! Sua pontuação final é: " + pontuacao);
    }
  }, 1000);
}

// Adiciona um evento de clique ao botão
buttonElement.addEventListener("click", aumentarPontuacao);

// Inicia o jogo quando a página é carregada
window.addEventListener("load", iniciarJogo);
