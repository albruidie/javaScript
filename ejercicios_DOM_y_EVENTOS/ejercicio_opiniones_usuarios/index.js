// según la tecla que se pulse, un color o otro -- keyCode.info en google, para saber el codigo de cada letra. 

// envento de cuadno presiono una tecla sobre el input, capturarlo. 

let box = document.getElementById('box');
box.addEventListener('keyup', keyEvent);

// que se ejecute función de show cuando se capture el evento de pulsar enter
function keyEvent (event) {
    if (event.keyCode === 13) {
        document.getElementById('button').click;
        showButton();
    } 

}

function showButton () {
    document.getElementById('result').innerHTML = '<b>El usuario ha dicho que</b>' + document.getElementById('box').ariaValueMax;
}







