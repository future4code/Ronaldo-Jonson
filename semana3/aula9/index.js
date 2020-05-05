// 1)   a. false
//      b. false
//      c. true
//      d. false
//      e. bool

/*
    2) a. arrays sao estruturas feitas para alocar mais de uma variavel em um só local na memoria
       b. 0
       c. é a quantidade de elementos no array que pode ser consultado atravez da comando array.lenght
       d. 
            I. undefined
            II. null
            III. 11
            IV. 3 e 4
            V. 19 e 9
            VI. 3
            VII. 1

*/

console.log("a) " + (77 - 32)*5/9 + 273.15);
console.log("b) " + (80)*9/5 + 32);
let trintaCelsiusEmFahrenheit = (30)*9/5 + 32;
console.log("c)  °F:" + trintaCelsiusEmFahrenheit + "    K: " + (trintaCelsiusEmFahrenheit - 32)*5/9 + 273.15);

let inputCelsiusParaConversao = (prompt("Insira valor em Celsius para conversao"))*9/5 + 32;
console.log("d)  °F:" + inputCelsiusParaConversao + "    K: " + (inputCelsiusParaConversao - 32)*5/9 + 273.15);

resposta = new Array(prompt("Qual seu pokemon favorito?"), prompt("Uma mae divide 30 reais igualmente entre suas duas filhas, que horas são?"), prompt("Partindo de um certo ponto da Terra, um caçador andou 10 Km para Sul, 10 Km para Leste e 10 Km para Norte, voltando assim ao ponto de partida. Aí encontrou um Urso. Qual a Cor do Urso?"), prompt("01100011 01101111 01101101 01101111 00100000 01100110 01101111 01101001 00100000 01110011 01100101 01110101 00100000 01100100 01101001 01100001?"), prompt("eeqzra fuzjgu iellb?"));
console.log(resposta[0]);
console.log(resposta[1]);
console.log(resposta[2]);
console.log(resposta[3]);
console.log(resposta[4]);

console.log(280 * 0,05)
console.log((280 * 0,05) * 0.15)