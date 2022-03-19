
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
//selecionar os elementos; criar rotina(função) e puxar evento do usuário 

        var abrirMenu = document.getElementById('abrirMenu');

        function habilitarSidebar() {  

            //alterei a linha 4 (button) para ha(desa)bilitar o "disable" ??
            //*tentar criar o disable pelo JS e não colocando no HTML

            //Condicional
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






[]











//--------------------------
