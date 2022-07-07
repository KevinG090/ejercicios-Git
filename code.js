const titulo = document.querySelector(".titulo1");
const texto_e_imagen_inicio = document.querySelector("#texto-e-imagen-inicio");
const imagen_inicio = document.querySelector("#imagen-inicio");

const nav_bar = document.querySelector("#nav-bar");
const ul = document.querySelector("#ul")

const menu = document.querySelector(".button")
const contenedor_sideBar = document.querySelector(".contenedor-sideBar")
const sideBar = document.querySelector(".sideBar")

/*
   const menu = document.createElement("button");
   menu.classList.add("menu")
   nav_bar.appendChild(menu)

   const div = document.createElement("div");
   div.classList.add("div-menu")
   menu.insertAdjacentElement('afterend',div)

   for ( i = 0 ; i < 4 ; i++ ){
      const p = document.createElement("P")
      p.classList.add(`texto-menu`,`item${i+1}`)
      div.appendChild(p)
   }
*/

const start = () => {
   value = false ;
   if (screen.width < 801) {
      titulo.insertAdjacentElement("afterend",imagen_inicio);
   }
   else if (screen.width > 801) {
      texto_e_imagen_inicio.insertAdjacentElement("beforeEnd",imagen_inicio);
   }
}
const navBar = () => {
   if (screen.width < 600 ){
      // ul.style='display:none';
      sideBar.insertAdjacentElement("afterend",ul)
      menu.style='display:flex';
   }
   else if (screen.width >= 600 ){
      ul.style='display:flex';
      menu.style='display:none';
   }
}
start();
window.addEventListener('resize', start);
navBar();
window.addEventListener('resize', navBar);

let valor = false ;
menu.addEventListener('click',()=>{
   if (valor == false){
      valor = true;
      contenedor_sideBar.style='left:0';
      menu.style='background-color: var(--secondary-color)';
   }
   else if (valor == true){
      valor = false;
      contenedor_sideBar.style='left:-300px';
      menu.style='background-color: var(--main-color)';
      
   }
})
ul.addEventListener('click',()=>{
   if (valor == true){
      valor = false;
      contenedor_sideBar.style='left:-300px';
   }
})