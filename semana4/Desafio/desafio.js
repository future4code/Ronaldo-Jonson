/*
    1   a) retorna um valor de real em dolar
         o codigo pega o numero recebido como parametro e multiplica pela cotação que deve ser inputada pelo prompt
        com o dolar a 4,5 retornaria 450

        b) retorna um valor multiplicado por um tipo de investimento
            o codigo recebe uma string e um number, faz o switch da string procurando um par e faz a multiplicação relacionada a string
            165 e 100 pois o segundo numero não foi investido em lugar nenhum


        c) separa todos os numeros de um array entre pares e impares
        para cada numero no array ele checka se ele é par ou nao e o envia pro array correto

        14 6 8

        d) Compara todos os numeros do array para encrontrar o menor e o maior numero
        ele faz um for para cada elemento no array e compara se ele é maio que o maior numero encontrado e o mesmo respectivamente para o menor

        -10 1598
*/


// 2 a) for foreach while


let array = [1, 2, 3, 4];

array.forEach(element => {
    //console.log(element);
});

for(let i = 0; i < array.length; i++)
{
    //console.log(array[i]);
}

let loop = 0;

while(loop < array.length)
{
    //console.log(array[loop]);
    loop++;
}


//   b) false, false, true, true, false, 


//   c)

const quantidadeDeNumerosPares = 5;
let i = 0;
let n = 0;

while(i <= quantidadeDeNumerosPares) {
    i++;
    //console.log(n);
    n+=2;
}

//   d)

function GetTriangleType(a, b, c)
{
    let type;

    if(GetEqualNumberAmount(a, b, c) == 0){
        type = "Escaleno";
    }

    if(GetEqualNumberAmount(a, b, c) == 1){
        type = "Isoceles"
    }

    if(GetEqualNumberAmount(a, b, c) > 1){
        type = "Equilatero"
    }

}

function GetEqualNumberAmount(a, b, c)
{
    let pairs = 0;

    if(a == b)
        pairs++;

    if(a == c)
        pairs++

    if(c == b)
        pairs++

    return pairs;
}

//  e)

function GetResults(a, b)
{
    let results = "";
    
    results = GetLargestNumber(a, b);
    results += " ";
    results += GetIsDivisible(a, b);
    results += " ";
    results += GetIsDivisible(b, a);
    results += " ";
    results += GetDiference(a, b);

    return results;
}

function GetLargestNumber(a, b)
{
    let result = 0;

    if(a > b){
        result = 1;
    }else if(a < b){
        result = 2;
    }
 
    switch(result)
    {
        case 0:
            return "Os numeros são iguais ";
        case 1:
            return `O numero ${a} é maior que ${b} `;
        case 2:
            return `O numero ${b} é maior que ${a} `;
    }
}

function GetIsDivisible(a, b)
{   
    if(a % b == 0)
        return `${a} é divisivel por ${b}`;

    return `${a} não é divisivel por ${b}`;
}

function GetDiference(a, b)
{
    let result = "A diferença entre elas é ";

    if(a < b)
        result += (b - a).toString();
    else if(a > b)
        result += (a - b).toString();
    else
        result += "0";    
    
    return result;
}

// 3 a)

let array_ex3 = [1, 1, 3 ,4 ,16 ,15];

function GetSeconds(array)
{ 
    if(array.length > 2)
    {
        array.sort(function(a, b){return a-b});
        console.log(array[1]);
        console.log(array[array.length - 2]);
    }

}

//GetSeconds(array_ex3);

(function() {
    //alert('Hello Labenu');
  }());


// são estruturas para guardar dados, podemos usar isso para salvar classes de forma mais organizada e para enviar dados


function CriaTriangulo(ladoA, ladoB)
{
    let triangle = {
        lado1 : ladoA,
        lado2 : ladoB,
        perimetro : 2 * (lado1 + lado2),
        area : lado1 * lado2,
    };

    return triangle;
}

///--------------------------------------------------------

let SpiritedAway = {
    name :  "Spirited Away",
    year :  "2003",
    director :  "Hayao Miyazaki",
    Ator1 :  "Daveigh Chase (A mina do Chamado)",
    Ator2 :  "Jason Marsden",
}

function GetMovieHeadLine(movieInfo)
{
    return `Venha assistir ao filme ${movieInfo.name}, de ${movieInfo.year}, dirigido por ${movieInfo.director} e estrelado por ${movieInfo.Ator1}, ${movieInfo.Ator2}`; 
}

///--------------------------------------------------------

let person = {
    nome : "José",
    idade : 65,
    email : "jose@yahoo.com",
    endereco : "rua lisboa, 80"
}

function Anonymizer(receivedPerson){
    receivedPerson.name = "ANNONYMOUS";
    return receivedPerson;
}

///--------------------------------------------------------

const peopleArray = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

function GetAdults(receivedArray){
    return receivedArray.filter((element) => {
        return element.idade >= 20;
    });
}

function GetUnderAged(receivedArray){
    return receivedArray.filter((element) => {
        return element.idade < 20;
    });
}

///--------------------------------------------------------

const array_ex_5_2 = [1, 2, 3, 4, 5, 6]

function GetMultipliedByTwo(receivedArray){
    let newArray = [];

    receivedArray.forEach(element => {
        newArray.push(element * 2);
    });

    return newArray;
}

function GetMultipliedByThree(receivedArray){
    let newArray = [];

    receivedArray.forEach(element => {
        newArray.push(element * 3).toString();
    });

    return newArray;
}

function GetPairity(receivedArray){
    let newArray = [];

    receivedArray.forEach(element => {
        if(element % 2 == 0)
            newArray.push(`${element} é par`);
        else
            newArray.push(`${element} é impar`);
    });

    return newArray;
}



///--------------------------------------------------------

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]


function CheckIfCanEnter(receivedArray){
    return receivedArray.filter((element) => {
        return element.idade > 14 && element.idade < 80 && element.altura >= 1.5;
    });
}

function CheckIfCantEnter(receivedArray){
    return receivedArray.filter((element) => {
        return !(element.idade > 14 && element.idade < 80 && element.altura >= 1.5);
    });
}

///--------------------------------------------------------

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function SendEmail(receivedArray){
    let emails = [];

    receivedArray.forEach(element => {
        emails.push(CreateEmail(element)).toString();
    });

    return emails;
}

function CreateEmail(consulta)
{
    let email = "";
    let greeting = (consulta.genero == "masculino")? "Sr" : "Srs";
    let reminder = (consulta.genero == "masculino")? "lembrá-lo" : "lembrá-la" ;

    if(consulta.cancelada)
    {
        email = `Olá, ${greeting} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${ consulta.dataDaConsulta } foi cancelada. Se quiser, pode entrar em  contato conosco para remarcá-la`
    }
    else{
        email = `Olá, ${greeting} ${consulta.nome}. Estamos enviando esta mensagem para ${reminder} da sua consulta no dia ${ consulta.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`
    }

    return email;  
}

///--------------------------------------------------------

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((element) => {
    element = UpdateValues(element);
});

function UpdateValues(account)
{
    account.compras.forEach((element) =>{
        account.saldoTotal -= element;
    })
    
    return account;
}