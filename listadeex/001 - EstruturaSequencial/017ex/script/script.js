let m2 = Number(prompt('informe a quantidade de METRO QUADRADO (m²) a ser pintado: '));
let M2_POR_LITRO = 6;
let PRECO_GALAO = 80;
let LITROS_GALAO = 18;
let PRECO_LATA = 25;
let LITROS_LATA = 3.6;
let MARGEM_SEGURANCA = 1.1;

let consumo_litro = (m2 / M2_POR_LITRO) * MARGEM_SEGURANCA;

let qtd_galao_apenas = Math.ceil(consumo_litro / LITROS_GALAO);
let valor_galao_apenas = qtd_galao_apenas * PRECO_GALAO;

let qtd_lata_apenas = Math.ceil(consumo_litro / LITROS_LATA);
let valor_lata_apenas = qtd_lata_apenas * PRECO_LATA;

let qtd_galao_misto = Math.floor(consumo_litro / LITROS_GALAO);
let qtd_lata_misto = Math.ceil((consumo_litro - qtd_galao_misto * LITROS_GALAO) / LITROS_LATA);
let valor_galao_misto = qtd_galao_misto * PRECO_GALAO;
let valor_lata_misto = qtd_lata_misto * PRECO_LATA;
