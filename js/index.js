const section = document.querySelector("section#intro")
const patio = document.querySelector("h1#zoomscroll")
const botonToggle = document.getElementById("botonToggle")
const scrolledClass = "nuevo-estilo"

// toggle class patio con evento scroll
/* const scrolledClass = "nuevo-estilo"
const tituloId = "tituloId"

const onScroll = () => {
    const scroll = document.documentElement.scrollTop

    if (scroll > 0){
        patio.classList.add(scrolledClass)
    } else {
        patio.classList.remove(scrolledClass)
    }
}

window.addEventListener('scroll', onScroll, true) */

// toggle class patio con evento click
botonToggle.addEventListener('click', ()=>{
    patio.classList.add(scrolledClass)
})

document.addEventListener("scroll", funcionScroll)
/* document.getElementById("intro").onscroll = funcionScroll()
 */

function funcionScroll() {
    document.getElementById("demo").innerHTML = "escroleaste la weá";
}

/* window.addEventListener('scroll', (ev)=>{
    console.log(ev)
}) */