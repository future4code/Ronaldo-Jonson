type post = {
    autor: String,
    texto: String
}

const alvo: post = {
    autor: 'Alvo Dumbledore',
    texto: "Não vale a pena viver sonhando e se esquecer de viver" 
}

const Severo : post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const Hermione : post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}

const Dobby: post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

const Voldemort: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

const posts:Array<post> = [
    alvo, Severo, Hermione, Dobby, Voldemort
]

function buscarPostsPorAutor(posts: Array<post>, autorInformado:String): Array<post> {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
}