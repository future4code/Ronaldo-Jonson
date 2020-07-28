type estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros:Array<number>): estatisticas{

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    );

    let soma:number = 0;
    let num:number = 0;

    for (num; num < numeros.length; num++) {
        soma += numeros[num];
    }

    const estatisticas:estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades = {

    numeros:[21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros: number) => {}
}