const nome = 'Lucas';
const sobreNome = 'Braga';
const idade = 27;
const peso = 95;
const altura = '1.62'
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos e pesa ${peso}Kg`);
console.log(`tem a altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} ${sobreNome} nasceu em ${anoNascimento}`);