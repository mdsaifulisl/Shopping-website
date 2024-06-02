let nave = document.querySelector('#ul');

document.querySelector(".mmn").onclick = () =>{
    nave.classList.toggle('active');
}

window.onscroll = () =>{
    nave.classList.remove('active');
}