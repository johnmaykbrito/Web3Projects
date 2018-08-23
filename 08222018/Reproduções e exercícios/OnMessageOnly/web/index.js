var ws;

function onMessage(evt) {
    alert(evt.data);
}

function start(){
    wsUri = "ws://" + document.location.host + document.location.pathname + "message";
    ws = new WebSocket(wsUri);
    ws.onmessage = onMessage;
}

function sendIt() {
    ws.send("Ola");
}

function init() {
    var form = document.forms[0];
    form.start.onclick = start;
    form.close.onclick = sendIt;
}

onload = init;