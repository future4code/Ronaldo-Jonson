// 1 a) [] vazio
// 1 b) [0, 1, 0, 1, 2, 3]
// 1 c) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

// 2 a) 0, 2, undefined

// 2 b) funciona sim pois os tipos ainda seriam iguais numero com numero ou inves de string com string,

// 3 SomarMultiplicarTodos()

//======================================================================/

function CalculaIdadeCanina(idadeHumana)
{
	return idadeHumana * 7;
}

//======================================================================/

function AgrupaInformacaoPessoal(nome, idade, endereço, estudante)
{
	if(estudante)
		estudante = "Sou Estudante";
	else
	estudante = "Nao sou Estudante";

	return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + " e " + estudante + ".";
}

//======================================================================/

function convertNumberToRoman(ano)
{
	let romano = "";

	if(ano >= 10)
	{
		romano += "X";
	}

	if(ano >= 20)
	{
		romano += "X";
	}

	if(ano >= 5 && ano < 10 || ano >= 15 && ano < 20)
		romano += "V";

	if(ano % 5 !== 0)
	{
		let texto;

		switch(ano % 5)
		{
			case 1:
				texto = "I";
			break;
			case 2:
				texto = "II";
			break;
			case 3:
				texto = "III";
			break;
			case 4:
				texto = "IV";
			break;
			case 6:
				texto = "VI";
			break;
			case 7:
				texto = "VII";
			break;
			case 8:
				texto = "VIII";
			break;
			case 9:
				texto = "IX";
			break;
		}

		romano += texto;
	}

	console.log(romano);
}

function CalculaSeculo(ano)
{
	seculo = ano / 1000;

	if(ano % 1000 !== 0)
		seculo++;

	seculo = (parseInt(seculo));
	console.log(seculo);

	return "O ano " + ano + " pertence ao século " +  convertNumberToRoman(seculo);
}

//======================================================================/

const defaultArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

function GetArrayLength(array){

	let length = 0;

	for(let x in array)
	{
		length++;
	}

	return length;
}

console.log(GetArrayLength(defaultArray));

//======================================================================/

function GetNumberParity(number){
	return(number % 0 === 0);
}

//======================================================================/

function GetArrayParity(array){

	let pairAmount = 0;

	for(let x in array)
	{
		if(x  % 0 === 0)
			pairAmount++;
	}

	return pairAmount;
}

//======================================================================/

function GetArrayParity(array){

	let pairAmount = 0;

	for(let x in array)
	{
		if(GetNumberParity(x))
			pairAmount++;
	}

	return pairAmount;
}