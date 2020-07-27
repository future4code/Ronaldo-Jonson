"use strict";
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
    var soma = 0;
    var num = 0;
    for (num; num < numeros.length; num++) {
        soma += numeros[num];
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
var amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: function (numeros) { }
};
