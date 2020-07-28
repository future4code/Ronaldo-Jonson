"use strict";
var alvo = {
    autor: 'Alvo Dumbledore',
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
};
var Severo = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
};
var Hermione = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
};
var Dobby = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
};
var Voldemort = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
};
var posts = [
    alvo, Severo, Hermione, Dobby, Voldemort
];
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(function (post) {
        return post.autor === autorInformado;
    });
}
