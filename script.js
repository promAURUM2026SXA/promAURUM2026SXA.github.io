document.addEventListener("DOMContentLoaded",function(){

const dropdown=document.querySelector(".dropdown")

dropdown.addEventListener("click",function(){

dropdown.classList.toggle("active")

})


const eventos=document.querySelectorAll(".evento")

eventos.forEach(function(evento){

evento.addEventListener("click",function(){

let destino=evento.dataset.destino

document.getElementById(destino).scrollIntoView({

behavior:"smooth"

})

})

})

})
// seleccionar elementos
const imagenes = document.querySelectorAll("img");
const lightbox = document.getElementById("lightbox");
const imgAmpliada = document.getElementById("imgAmpliada");
const cerrar = document.querySelector(".cerrar");

// abrir imagen
imagenes.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imgAmpliada.src = img.src;
    });
});

// cerrar con X
cerrar.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// cerrar haciendo click afuera
lightbox.addEventListener("click", (e) => {
    if(e.target !== imgAmpliada){
        lightbox.style.display = "none";
    }
});
