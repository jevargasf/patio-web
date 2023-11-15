// Fetch data
async function dataAPI() {
    const res = await fetch("https://patio-api.onrender.com/")
    const data = await res.json()
    document.getElementById("subtituloIntro").innerHTML = data.hola
}

dataAPI()

// Animación Título Principal con scroll

const patioTitulo = document.getElementById("tituloIntro")
const patioSubtitulo = document.getElementById("subtituloIntro")
const nav = document.getElementById("nav")

   window.onscroll = function() {
    if (scrollY > 50) {
        patioTitulo.classList = "opacidad"
        patioSubtitulo.classList = "opacidad"
    } else if (scrollY <= 50) {
        patioTitulo.classList.remove("opacidad")
        patioSubtitulo.classList.remove("opacidad")
    } if (scrollY > 750) {
        nav.classList = "general"
    } else if (scrollY <= 750) {
        nav.classList.remove("general")
    }
};
