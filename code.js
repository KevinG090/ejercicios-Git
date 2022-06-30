const titulo = document.querySelector(".titulo1");
const texto_e_imagen_inicio = document.querySelector("#texto-e-imagen-inicio");
const imagen_inicio = document.querySelector("#imagen-inicio");

const nav_bar = document.querySelector("#nav-bar");
const ul = document.querySelector("#ul")
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
      ul.style='display:none';
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
      div.style='left:0'
   }
   else if (valor == true){
      div.style='left:-300px'
      valor = false;
   }
})
