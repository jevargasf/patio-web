const section = document.querySelector("section#intro")
const patioTitulo = document.getElementById("tituloIntro")
const patioSubtitulo = document.getElementById("subtituloIntro")

   
//Función que maneja el evento de scroll
window.onscroll = function() {
    if (scrollY > 100) {
        patioTitulo.classList = "opacidad"
        patioSubtitulo.classList = "opacidad"
    } else if (scrollY <= 100) {
        patioTitulo.classList.remove("opacidad")
        patioSubtitulo.classList.remove("opacidad")
    }
};
