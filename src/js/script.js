const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

let input = document.querySelector(".input");
let button = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}

function alertEmailSent (){
  Toastify({
    text: "Email enviado!",
    duration: 3000,
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(190deg, rgba(0,0,0,1) 35%, rgba(11,50,221,1) 100%);",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}