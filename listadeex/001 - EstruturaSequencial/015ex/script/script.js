let salarioHora = Number(prompt('Digite o valor do salário hora: '));
let horaMes = Number(prompt('Digite quantas horas trabalhou no mês'));
let salarioBruto = salarioHora * horaMes;
let ir = salarioBruto * (11/100);
let inss = salarioBruto * (8/100);
let sindicato = salarioBruto * (5/100);
let salarioLiquido = salarioBruto - ir - inss - sindicato