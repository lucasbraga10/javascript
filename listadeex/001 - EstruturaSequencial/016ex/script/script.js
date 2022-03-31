let area = Number(prompt('digite o quantiade de metros quadrados a ser pintada: '));
let m2porlitro = 3;
let precolata = 80;
let litrolata = 18;
let consumo_litro = area / m2porlitro
let qtd_lata = Math.ceil(consumo_litro / litrolata)
let valor_lata = qtd_lata * precolata