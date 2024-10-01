

//alterar os valores do formulário ao clicar no botão do site 

const formulario = document.querySelector(".fale") //procurar o formulário pela sua classe usando o "."
const mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao () {
    formulario.style.left ="50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    
}


//function cliqueiNaMascara () {
   // mascara.style.visibility= "hidden"
   // formulario.style.transform = "translateX(-402%)"
//}


//essa função faz com que ao ser clicado na área de sombra ao redor do fmulário ele volte para a posição inicial.
function esconderForm () {
    formulario.style.left ="-300px"
    formulario.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
    
}

