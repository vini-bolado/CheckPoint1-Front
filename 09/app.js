// Johnny - 1 e 1.1
let documento = document.body;
let botao = document.querySelector("button");
let menu = document.querySelector("#side");

//Eventos do mouse
function clicar(evento){
    evento.style.display = "#side"
   }

botao.addEventListener("click", () => clicar );
botao.classList.add('.l-sidebar--open');


//!-------------------------------------------------------------------------------------
//*vinicius


documento.addEventListener("keypress" , function(evento){ 

    
    //! Condicional pra saber se a tecla space foi pressionada
    
    
        if(evento.code == "Space"){
    
    
        //! Ocultar a tela
    
        sidebar.style.display = "none"
    
        }
    
        if(evento.code == ""){
    
        sidebar.style.display = "block"
    
        } 
    });









//!-------------------------------------------------------------------------------------
// 3 Rafael 

(function() {

    let sidebarMenu = document.getElementById('sidebarMenu');
    let btnAbrirMenu = document.getElementById('btnAbrirMenu');

    e.addEventListener('dblclick', ()=>{
        e.innerText = 'sidebarMenu';

    })

// 1.1. Click
item.addEventListener("click", (evento) => evento.target.innerText = "Click" );

// 1.2. Doble click
item.addEventListener("dblclick", (evento) => evento.target.innerText = "Doble Click" );
















});

//--------------------------
