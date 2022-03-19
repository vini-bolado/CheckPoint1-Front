// Johnny - 1 e 1.1
let documento = document.body;
let botao = true

//Eventos do mouse
function mostrar(){
    document.getElementById("side").style.display = "block";
   }


   function Exibir() { // Quando clicar no botão.

    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("side").style.display = "none";//Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("side").style.display = "block";//Exibimos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    }
}


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


document.querySelector(".l-sidebar__btn").addEventListener('click', e =>{
    document.querySelector('.l-app')
})







//!-------------------------------------------------------------------------------------
// 3 Rafael 

    (function() {

        let sidebarMenu = document.getElementById('sidebarMenu');
       let btnAbrirMenu = document.getElementById('btnAbrirMenu');

        e.addEventListener('dblclick', ()=>{
            e.innerText = 'sidebarMenu';

        })

     //1.1. Click
    item.addEventListener("click", (evento) => evento.target.innerText = "Click" );

    // 1.2. Doble click
    item.addEventListener("dblclick", (evento) => evento.target.innerText = "Doble Click" );




[]







    });




//--------------------------
