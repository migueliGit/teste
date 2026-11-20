// Declara a função 'mostrarTabuada' que será responsável por calcular e exibir a tabuada
function mostrarTabuada() {
  // cria referência aos elementos da página 
  // Obtém o elemento HTML (input) com o ID "inNumero" e o armazena na variável 'inNumero'
  let inNumero = document.getElementById("inNumero");
  // Obtém o elemento HTML (geralmente um <pre>) com o ID "outTabuada" e o armazena na variável 'outTabuada'
  let outTabuada = document.getElementById("outTabuada");
  
  // converte conteúdo do campo inNumero
  // Obtém o valor digitado no campo 'inNumero', converte para um número e armazena na variável 'numero'
  let numero = Number(inNumero.value);

  // valida o número
  // Verifica se o 'numero' é igual a 0 ou se o valor digitado não é um número válido (isNaN - Not a Number)
  if (numero == 0 || isNaN(numero)) {
    // Se a condição for verdadeira, exibe um alerta na tela pedindo um número válido
    alert("Informe um número válido...");
    // Coloca o cursor de volta (foco) no campo de entrada 'inNumero' para o usuário digitar novamente
    inNumero.focus();
    // Interrompe a execução da função neste ponto (retorna vazio)
    return;
  // Fecha o bloco da condição 'if'
  }

  // cria uma variável do tipo String, que irá concatenar a resposta
  // Declara a variável 'resposta' iniciando-a com uma string (texto) vazia. Ela acumulará as linhas da tabuada
  let resposta = "";

  // cria um laço de repetição
  // Inicia um laço 'for' com contador 'i' em 1, repetindo enquanto 'i' for menor ou igual a 10, e somando 1 a 'i' a cada passo
  for (let i = 1; i <= 10; i++) {
    // a variável resposta vai acumulando os novos conteúdos
    // Pega o valor atual de 'resposta', junta com a linha da tabuada (ex: '2 x 1 = 2') e adiciona uma quebra de linha ('\n')
    resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
  // Fecha o bloco do laço de repetição 'for'
  }

  // o conteúdo da tag pre é alterado para exibir a tabuada do num
  // Atualiza o texto exibido no elemento da página HTML ('outTabuada') com todo o texto acumulado na variável 'resposta'
  outTabuada.textContent = resposta;
// Fecha o bloco da função 'mostrarTabuada'
}
// cria referência ao botão e após associa function ao evento click
// Obtém o elemento HTML do botão com o ID "btMostrar" e o armazena na variável 'btMostrar'
let btMostrar = document.getElementById("btMostrar");
// Adiciona um "ouvinte de evento" ao botão, dizendo para executar a função 'mostrarTabuada' quando ele receber um "click"
btMostrar.addEventListener("click", mostrarTabuada);
