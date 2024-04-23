
const form = document.querySelector(".formulario-fale-conosco")
const mascaraForm = document.querySelector(".mascara-formulario")

function mostrarForulario(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascaraForm.style.visibility = "visible"
 
}

function tirarFormulario(){
    mascaraForm.style.visibility = "hidden"
    form.style.transform = "translateX(0%)"
    form.style.left = "-300px"
    mascaraForm.style.transition = "visibility 1s ease-in-out"
}