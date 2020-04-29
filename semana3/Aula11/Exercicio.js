// 1) somando todos numeros de 1 a 15
//        150

// 2) a- adiciona um item a um array 
//      b- 10 12 18 30
//          c- 12 15 18 21 27 30
//            d- 12 

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let menorNumero = array[0];
let maiorNumero = array[0];

for(let i = 0;  i < array.length; i++)
{
  if(array[i] < menorNumero){
    menorNumero = array[i];
  }

  if(array[i] > maiorNumero){
    maiorNumero = array[i];
  }
}

console.log("o maior numero é: " + maiorNumero + " Menor numero: " + menorNumero);

//*-----

const arrayPorDez = [];

for(let i = 0; i < array.length; i++) 
{
    arrayPorDez.push(array[i] / 10);
}

console.log(arrayPorDez);

//*-----

const arrayPar = [];

for(let i = 0; i < array.length; i++) 
{
    if(array[i] % 2 == 0)
        arrayPar.push(array[i]);
}

console.log(arrayPar);

//*-----

const arrayString = [];

for(let i = 0; i < array.length; i++) 
{
    arrayString.push("O elemento do índex " + i + " é: numero" + array[i]);
}

console.log(arrayString);

//*------

let number = Number(prompt("Em que numero está pensando?"));
let guess = Number(prompt("Que numero vc acha que é?"));

let tentativas = 0;

while(guess != number)
{
    if(guess < number)
        console.log("Errou!! É maior");
    if(guess > number)
        console.log("Errou!! É menor");

    tentativas++;
}

console.log("Acertou O número de tentativas foi: " + tentativas);


