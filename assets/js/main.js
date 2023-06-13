const btnEmail = document.getElementById('sendEmail');
const inputEmail = document.getElementById('email');
const openMenu = document.getElementById('openMenu');
const menuMobile = document.getElementById('menu')

function ativaMenu() {
    menuMobile.classList.contains('menuMobile') ?
        openMenu.innerText = 'X' :
        openMenu.innerText = '☰';
    menuMobile.classList.toggle('menuMobile');
}

function sendEmail() {
    alert('Cadastrado com sucesso! (MENSAGEM FICTICIA)');
}

openMenu.addEventListener('click', ativaMenu);

let inputEmailLength = inputEmail.addEventListener('change', () => {
    if (inputEmail.value.length > 0) {
        btnEmail.addEventListener('click', sendEmail);
    }
})



