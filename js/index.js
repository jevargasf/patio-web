const section = document.querySelector("section#intro")
const patio = document.getElementById("tituloIntro")

   
//Función que maneja el evento de scroll
window.onscroll = function() {
    patio.classList = "opacidad"
    document.getElementById("demo").innerHTML = scrollY;
};
