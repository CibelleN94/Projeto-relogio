function atualizarHora() {
    var display = document.querySelector('.display');
    var agora = new Date();
    var hora =  agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds();

    display.textContent = hora
}

setInterval(atualizarHora)