// Array para armazenar o histórico de cálculos
let history = [];

// Função para adicionar valorao display
function appendToDisplay(value) {
  const result = document.getElementById('result');
  result.value += value; // Adiciona o valor ao campo de exibição
}

// Função para limpar display
function clearDisplay() {
  document.getElementById('result').value = ''; //Limpa o campo de exibição
}

// Função para deletar o último caractere do display
function deleteLast() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1); // Remove o último caractere do campo de exibição
}

// Função para calcular o resultado da expressão
function calculatorResult() {
  const result = document.getElementById('result');
  const expression = result.value;

  if (isValidExpression(expression)) {
    const evaluatedResult = evaluateExpression(expression);
    addToHistory(expression, evaluatedResult);
    result.value = evaluatedResult;
  }
  else {
    alert('Expressão inválida');
  }
}

function isValidExpression(expression) {
  // regex para verificar se a expressao é válida
  const regex = /^[0-9+\-*/^.()]*$/;
  return regex.test(expression);
}

function evaluateExpression(expression) {
  let formattedExpression = expression.replace(/\^/9,'**');

  return Function(`"use strict"; return(${(formattedExpression)})`)();
}

function addToHistory(expression, result) {
  history.push({ expression, result});

  updateHistory();
}

function updateHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = "";

  history.forEach(entry => {
    
  })
}