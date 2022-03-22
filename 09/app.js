// 1 - Johnny
var documento = document.body
var Button = document.getElementById('l-sidebar__btn');
var sideBar = document.getElementById('l-sidebar');
var botao = document.querySelector(".l-sidebar__btn");
botao.setAttribute("disabled", true);


//1.1 - Johnny

document.addEventListener("click", AbrirFechar);
document.addEventListener("click", AbrirFechar);

// 2 parte - Vinicius ------------------------------------------------------------

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


var caixaTexto = document.querySelector('.cursor');

document.addEventListener('mousemove', function(m){

    var xPos = m.pageX - 15;
    var yPos = m.pageY - 15;

    caixaTexto.style.left = xPos + 'px';
    caixaTexto.style.top = yPos + 'px';

});


caixaTexto.addEventListener('mouseover', function (contatos){ 
    

    caixaTexto.target.innerText = "Sobre mim";
    
});


var sobreMim = document.querySelector("#sobre-mim");


