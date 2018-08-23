var ws;

function writeResponse(text) {
    var messages = document.getElementById("results");
    messages.innerHTML += "<br/> " + text;
}

function onClose() {
    writeResponse("Connection closed.");
}

function onOpen() {
    writeResponse("Connection established.");
}

function onMessage(evt) {
    writeResponse(evt.data);
}

function openConnetion() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "hello";
    ws = new WebSocket(wsUri);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
    ws.onclose = onClose;
}

function sendMessage() {
    var txt = document.forms[0].texto.value;
    ws.send(txt);
}

function closeConnection() {
    ws.close();
}

function init() {
    var form = document.forms[0];
    form.open.onclick = openConnetion;
    form.send.onclick = sendMessage;
    form.close.onclick = closeConnection;
}

onload = init;