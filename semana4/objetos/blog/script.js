const post = {
    'titulo': 'Titulo',
    'Autor': 'Ronaldo',
    'Conteudo': 'texto',
}

function SendPost(){
    post.titulo = GetElementTextAndClear("Titulo");
    post.Autor = GetElementTextAndClear("Autor");
    post.Conteudo = GetElementTextAndClear("Conteudo");
    
    console.log(post);

    CreatePost(post);
}

function CreatePost(newPost)
{
    var post = document.createElement("ARTICLE");
    post.innerHTML = `<h3>${newPost.titulo}</h3>`
    post.innerHTML += `<p>${newPost.Conteudo}</p>`
    post.innerHTML += `<p>${newPost.Autor}</p>`

    document.getElementById("Timeline").appendChild(post);
}

function GetElementTextAndClear(origin){
    let deltaString = document.getElementById(origin).value;
    document.getElementById(origin).value = "";
    return deltaString;
}