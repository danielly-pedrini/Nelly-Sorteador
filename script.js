// Efeito de digitação
const titulo = document.getElementById('titulo');
const texto = 'Nelly Sorteador';
let i = 0;

function digitar() {
    if (i < texto.length) {
        titulo.innerHTML = texto.slice(0, i + 1);
        i++;
        setTimeout(digitar, 200);
    }
}

digitar();

// Mapeamento dos elementos
const firstNumberInput = document.getElementById('first-number');
const lastNumberInput = document.getElementById('last-number');
const resultElement = document.getElementById('result');
const drawButton = document.querySelector('.draw-button');

// Funções de input
function inputFirstNumber() {
    const value = firstNumberInput.value;
    console.log(value);
}

function inputLastNumber() {
    const value = lastNumberInput.value;
    console.log(value);
}

// Função para limpar o resultado
function limparResultado() {
    resultElement.textContent = '';
    resultElement.style.backgroundColor = '';
    resultElement.style.color = '';
}

// Função do sorteio
function sortear() {
    const min = Number(firstNumberInput.value);
    const max = Number(lastNumberInput.value);
    
    // Verifica se os campos estão preenchidos
    if (!min || !max) {
        alert('Por favor, preencha os números inicial e final!');
        return;
    }
    
    // Verifica se o número inicial é maior que o número final
    if (min > max) {
        alert('O número inicial não pode ser maior que o número final!');
        return;
    }
    
    // Realiza o sorteio
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = result;
    resultElement.style.backgroundColor = 'black';
    resultElement.style.color = 'red';
}

// Limpar resultado quando os inputs forem modificados
firstNumberInput.addEventListener('input', limparResultado);
lastNumberInput.addEventListener('input', limparResultado);

// Evento do botão
drawButton.addEventListener('click', sortear);