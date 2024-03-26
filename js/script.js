// Captura a ID 
let idadeCV = document.getElementById("idade");

// Criando um objeto Date com a data e hora atuais
const date = new Date();

// Criando um objeto Date para a Data de Nascimento
const dataNascimento = new Date(1996, 3, 24);

// Calcula a Idade 
let idade = date.getFullYear() - dataNascimento.getFullYear();

// Condicional para pegar a idade 
if (date.getMonth() > dataNascimento.getMonth() || date.getDate() > dataNascimento.getDate()) {
  idade--;
}
console.log(idade)

//Cria um Elemento Strong 
let strongElement = document.createElement("strong");
strongElement.textContent = "Idade: ";
idadeCV.appendChild(strongElement);

// Adiciona a idade
let idadeHTML = document.createTextNode(`${idade} Anos`);
idadeCV.appendChild(idadeHTML);
