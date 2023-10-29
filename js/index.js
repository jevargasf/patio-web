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

   window.onscroll = function() {
    if (scrollY > 100) {
        patioTitulo.classList = "opacidad"
        patioSubtitulo.classList = "opacidad"
    } else if (scrollY <= 100) {
        patioTitulo.classList.remove("opacidad")
        patioSubtitulo.classList.remove("opacidad")
    }
};
