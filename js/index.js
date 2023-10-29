const section = document.querySelector("section#intro")
const patio = document.getElementById("tituloIntro")

   
//Función que maneja el evento de scroll
window.onscroll = function() {
    if (scrollY > 100) {
        patio.classList = "opacidad"
    } else if (scrollY <= 100) {
        patio.classList.remove("opacidad")
    }
//    document.getElementById("demo").innerHTML = scrollY;
};
