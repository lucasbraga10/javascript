let arquivo_MB = Number(prompt('Digite o tamanho do arquivo em MB: '));
let velocidade = Number(prompt('Digite a velocidade de download em Mb/s'));
let velocidade_mBps = velocidade / 8;
let tempo_em_segundos = arquivo_MB / velocidade_mBps;
