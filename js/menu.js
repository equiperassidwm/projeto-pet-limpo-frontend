var menu = document.getElementById('menu');

menu.addEventListener('click', abrirMenu)

menu.addEventListener('click', trocarIcone)

function abrirMenu(){
    let itensMenu = document.querySelector('.itens-menu');
    $(itensMenu).slideToggle()
}

function trocarIcone(){
    let icone = document.getElementById('menu')

    if(icone.classList.contains('fa-bars')){
        icone.classList.remove('fa-bars')
        icone.classList.add('fa-xmark')
    }else{
        icone.classList.remove('fa-xmark')
        icone.classList.add('fa-bars')
    }

}