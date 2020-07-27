"use strict";
var minhaString = "";
var meuNumero = 0;
var cor;
(function (cor) {
    cor["vermelho"] = "vermelho";
    cor["laranja"] = "laranja";
    cor["amarelo"] = "amarelo";
    cor["verde"] = "verde";
    cor["ciano"] = "ciano";
    cor["azul"] = "azul";
    cor["roxo"] = "roxo";
})(cor || (cor = {}));
var odair = {
    name: "odair",
    idade: 30,
    corfavorita: cor.amarelo,
};
var samara = {
    name: "samara",
    idade: 25,
    corfavorita: cor.ciano,
};
var noah = {
    name: "noah",
    idade: 12,
    corfavorita: cor.roxo,
};
