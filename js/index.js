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
    } if (scrollY > 608) {
        nav.classList = "general"
    } else if (scrollY <= 608) {
        nav.classList.remove("general")
    }
};

// Controlador menú fundamentación del proyecto

const navFundamentacion = document.getElementById("nav-fundam")
const divFundamentacion = document.getElementsByClassName("porque")

navFundamentacion.addEventListener('click', (e)=>{
    const elementosNav = e.target.parentElement.children
    for(let i=0; i<elementosNav.length; i++){
        if(elementosNav[i].classList == "nav-select"){
            elementosNav[i].classList.remove("nav-select")
        }
    }
    e.target.classList = "nav-select"

    // if classList de los div == id del target, entonces agregar class div-select
})
