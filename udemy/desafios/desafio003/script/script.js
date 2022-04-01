let n1 = Number(prompt('Digite um número: '));
let seuNumero = document.getElementById('seu-numero');
let texto = document.getElementById('texto');

seuNumero.innerHTML = n1;
texto.innerHTML += `<p>A raiz quadrada é ${n1 ** 0.5}</p>`;
texto.innerHTML += `<p>${n1} é inteiro:  ${Number.isInteger(n1)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(n1)}</p>`;
texto.innerHTML += `<p>Arredondando para cima${Math.ceil(n1)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo${Math.floor(n1)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${n1.toFixed(2)}</p>`;


