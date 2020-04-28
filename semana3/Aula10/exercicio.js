// 1-    a função checa se o numero digitado no prompt é par ou impar, 
//       numeros pares, 
//       numeros impares

// 2-    a) para printar o preço de uma fruta
//       b) O preço da fruta Maçã é R$ 2.25
//       c) 24,55‬
//       D) Seria uma menssagem de erro pois nao podemos tirar o break do switch

// 3-    erro, estamos comparando strings com > 
//       para resolver isso retiamos que converter as strings em number

let numero1 = Number(prompt("digite um numero"));
let numero2 = Number(prompt("digite outro numero"));

if(numero1 >= numero2)
    console.log(numero2 + " " + numero1);
else{
    console.log(numero1 + " " + numero2);
}

// ele é printado na ordem de quem foi digitado por ultimo

let ex2Numeros = new Array(Number(prompt("digite outro numero")), Number(prompt("digite outro numero")), Number(prompt("digite outro numero")))

if(ex2Numeros[0] === ex2Numeros[1] && ex2Numeros[0] === ex2Numeros[2])
{
    console.log("Ao menos um numero precisa ser diferente");
}else{
    ex2Numeros.sort(function(a, b){return b - a});
    console.log(ex2Numeros[0], ex2Numeros[1], ex2Numeros[2]);        
}

