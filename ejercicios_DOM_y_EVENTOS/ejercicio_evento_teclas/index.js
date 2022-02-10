// según la tecla que se pulse, un color o otro -- keyCode.info en google, para saber el codigo de cada letra. 

// envento de cuadno presiono una tecla sobre el input, capturarlo. 

var box = document.getElementById('box');
box.addEventListener('keyup', showKey);

// la funcion recibe el evento de pulsar.
function showKey(event) {
    console.log(event);
    console.log(`Has pulsado la tecla ${event.code} y le corresponde el ${event.keyCode}`);
}






