/* const section = document.querySelector("section#intro")
const patio = document.querySelector("h1#zoomscroll")
const botonToggle = document.getElementById("botonToggle")
const scrolledClass = "nuevo-estilo"


// toggle class patio con evento click
botonToggle.addEventListener('click', ()=>{
    patio.classList.add(scrolledClass)
})
    */ 
   
    //Función que maneja el evento de scroll
    window.onscroll = function() {
      console.log("¡Se ha desplazado la página!");
      document.getElementById("demo").innerHTML = "escroleaste la weá";
    };
