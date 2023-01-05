function toggleMode() {


    const html = document.documentElement

    html.classList.toggle("light")


    // html.classList.contains('ligth') ? html.classList.remove('ligth') : html.classList.add('ligth')

    // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem 
    if (html.classList.contains("light")) {
        // se tiver modo light, adicionar a imagem light
        img.setAttribute("src", "./assets/Avatar-ligth.png")
    } else {
        // se tiver sem o light mode, mantar a imagem normal
        img.setAttribute("src", "./assets/Avatar.png")
    }

}