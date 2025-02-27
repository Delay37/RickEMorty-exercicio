async function MostraPersonagem(){
    let inputPersonagemjs = document.getElementById("inputPersonagem").value
    
    const id = inputPersonagemjs
    
    const personagem = await buscarPersonagemById(id)
    if (personagem.image == null){
        alert("Personagem não encontrado")
        return
    }

    const img = document.getElementById("imagem").setAttribute("src", personagem.image)
    const texto = document.getElementById("texto").innerHTML = personagem.name
    let divPersonagem = document.getElementById("divPersonagem").style.display = "block"
    divPersonagem = document.getElementById("divPersonagem").style.border = "3px solid black"
    console.log("fim")
}

async function buscarPersonagemById(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)

    return response.json()
}
