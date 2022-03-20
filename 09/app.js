
// // Johnny - 1 e 1.1


// let btn = true;
// let sidebar = document.querySelector("div.l-sidebar");

// botao.onclick = function(btn) {
//     sidebar.classList.toggle("active");
//     btn.addEventListener.display.classList(".l-sidebar");
// };



//!-------------------------------------------------------------------------------------
//*vinicius



var documento = document.body;
var sideBar = document.querySelector(".l-sidebar");

//! 1 parte

function sideB(){

    sideBar.classList.add('l-sidebar--close')
    
}

sideB()

//! 2 parte
function AbrirFechar(){

    var auxiliar = sideBar.classList[1]

    if (auxiliar == 'l-sidebar--close'){

       sideBar.classList.remove('l-sidebar--close')
       sideBar.classList.add('l-sidebar--open')

    }else {

       sideBar.classList.remove('l-sidebar--open')
       sideBar.classList.add('l-sidebar--close')

    }

   }



document.addEventListener("keydown", (evento) => {

    if(evento.code == "Space"){

        AbrirFechar()

}})


    
   
var menuButton = document.getElementById('l-sidebar__btn');

menuButton.addEventListener("click", (evento) => {
    console.log(evento)
});
 


    






//!-------------------------------------------------------------------------------------
//3 Rafael 
//selecionar os elementos; criar rotina(função) e puxar evento do usuário 

        var abrirMenu = document.getElementById('abrirMenu');

        function habilitarSidebar() {  

            //alterei a linha 4 (button) para ha(desa)bilitar o "disable" ??
            //*tentar criar o disable pelo JS e não colocando no HTML

            if(evento.code = "dbClick")

            sidebar.style.display = "none"; 

                else(evento.code = "dbClick")

            sidebar.style.display == "block"; 

            //Adicionar atributo
            abrirMenu.setAttribute("disable", "false")
        }   
            //Remove atributo
            abrirMenu.setAttribute("disable");


        // util??
        
            e.addEventListener('dblclick', function(evento) {
                e.innerText = 'sidebarMenu';


        })






    











//--------------------------
