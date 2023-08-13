/** Captura a ID */
let idadeCV = document.getElementById("idade");

/**  Criando um objeto Date com a data e hora atuais */
const dataAtual = new Date();

/**  Obtendo informações da data e hora atual */
const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth();
const diaAtual = dataAtual.getDate();

/* Criando um objeto Date para a Data de Nascimento */
let dataNascimento = new Date(1996, 4, 24);

/** Calcula a Idade */
const anoNascimento = dataNascimento.getFullYear();
const mesNascimento = dataNascimento.getMonth();
const diaNascimento = dataNascimento.getDate();
let idade = anoAtual - anoNascimento;

/** Condicional para pegar a idade */
if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
  idade--;
}

/** Deixa o texto em negrito */
let strongElement = document.createElement("strong");
strongElement.textContent = "Idade: ";
idadeCV.appendChild(strongElement);

/** Adiciona a idade */
let idadeHTML = document.createTextNode(idade + " Anos");
idadeCV.appendChild(idadeHTML);
