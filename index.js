const respostas = [
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

const perguntaElement = document.querySelector("#pergunta");
const fazerPerguntaElement = document.querySelector("#fazer-pergunta");
const respostaElement = document.querySelector("#resposta");

function fazerPergunta() {
  if (perguntaElement.value === "") {
    alert("Digite sua pergunta!");
    return;
  }

  const resposta = respostas[Math.floor(Math.random() * respostas.length)];

  respostaElement.style.opacity = 1;
  respostaElement.innerHTML = `<p>${perguntaElement.value}</p><h3>${resposta}</h3>`;

  fazerPerguntaElement.setAttribute("disabled", true);

  setTimeout(() => {
    respostaElement.style.opacity = 0;
    perguntaElement.value = "";
    fazerPerguntaElement.setAttribute("disabled", false);
  }, 3000);
}
