var ws;

var bHumanos;
var bAliens;
var bSend;
var divResponse;
var room = "";

function onMessage(evt) {
    divResponse.append(evt.data);
    divResponse.show();
}

function onOpen() {
    ws.send(room);
    $('#salas').hide();
}

function run() {
    alert(room);
    var wsUri = "ws://" + document.location.host + document.location.pathname + "sessions/" + room;
    ws = new WebSocket(wsUri);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
}

function send() {
    ws.send("Opa");
}

function init() {
    bHumanos = $('#humanos');
    bAliens = $('#aliens');
    bSend = $('#send');
    divResponse = $('#response');
    
    bHumanos.click(function () {
        room = $(this).val();
        run();
        return false;
    });
    
    bAliens.click(function () {
        room = $(this).val();
        run();
        return false;
    });
        
    bSend.click(function () {
        send();
        return false;
    });
    
    divResponse.hide();
}

onload = init;