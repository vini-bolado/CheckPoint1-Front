//*vinicius


var documento = document.body;
var sideBar = document.querySelector(".l-sidebar");

//! 1 parte

function sideB(){

    sideBar.classList.add('l-sidebar--close')
    
}

sideB()

//1.1 - Johnny
var btn = document.querySelectorAll("button#l-sidebar__btn");

document.addEventListener("click", (evento) => {

   evento = AbrirFechar('btn');

});



//! 2 parte

function AbrirFechar(){

    var auxiliar = sideBar.classList[1]

    if (auxiliar == 'l-sidebar--close'){

       sideBar.classList.remove('l-sidebar--close')
       sideBar.classList.add('l-sidebar--open')

    }else{

       sideBar.classList.remove('l-sidebar--open')
       sideBar.classList.add('l-sidebar--close')

    }

   }


document.addEventListener("keydown", (evento) => {

    if(evento.code == "Space"){

        AbrirFechar()

}})


    



    

//!-------------------------------------------------------------------------------------
//3 Rafael 
//selecionar os elementos; criar rotina(função) e puxar evento do usuário 

        var abrirMenu = document.getElementById('abrirMenu');

        function habilitarSidebar() {  

        
            //*tentar criar o disable pelo JS e não colocando no HTML

            if(evento.code = "dbClick")

            sidebar.style.display = "none"; 

                else(evento.code = "dbClick")

            sidebar.style.display == "block"; 

            //Adicionar atributo
            abrirMenu.setAttribute("disable", "false")
        }   
            //Remove atributo
            //abrirMenu.setAttribute("disable");


        // util??
        
            //e.addEventListener('dblclick', function(evento) {
                //e.innerText = 'sidebarMenu';


