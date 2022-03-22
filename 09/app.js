// 1 - Johnny
documento = document.body;
var Button = document.getElementById('l-sidebar__btn');
var sideBar = document.getElementById('l-sidebar');
var botao = document.querySelector(".l-sidebar__btn");
botao.setAttribute("disabled", true);


//1.1 - Johnny

Button.addEventListener("click", AbrirFechar);
sideBar.addEventListener("click", AbrirFechar);

// 2 parte - Vinicius

function sideB(){

sideBar.classList.add('l-sidebar--close')

}

sideB()

function AbrirFechar(){

var auxiliar = sideBar.classList[1]

    if (auxiliar == 'l-sidebar--close'){

sideBar.classList.remove('l-sidebar--close')
sideBar.classList.add('l-sidebar--open')
    
    }else{

sideBar.classList.remove('l-sidebar--open')
sideBar.classList.add('l-sidebar--close')

}

};

document.addEventListener("keydown", (key) => { 
    if (key.code == "Space") {
        AbrirFechar()
    }
})


//!-------------------------------------------------------------------------------------
//3 - Johnny

document.addEventListener("dblclick", AbrirFechar);

// 4 - Todos ---------------------------------------------------------------------------

let bemVindo = document.querySelector("#sobre-mim");

function exibirbemVindo() {
    bemVindo.setAttribute("title", "Bem vindo");
  }
  
  bemVindo.addEventListener("mousemove", exibirbemVindo);
  
  function exibirTooltipSobreMim() {
    sobre.setAttribute("title", "Sobre mim");
  }

