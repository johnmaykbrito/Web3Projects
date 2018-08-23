var ws;
function onOpen() {
    writeResponse("Connection opened.");
}
function onMessage(evt) {
    writeResponse("received: " + evt.data);
}
function onClose() {
    writeResponse("Connection closed.");
}
function onError(evt) {
    writeResponse("error: " + evt.data);
}
function writeResponse(text) {
    var messages = document.getElementById("results");
    messages.innerHTML += "<br />" + text;
}
function openConnection() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "echo";
    ws = new WebSocket(wsUri);
    ws.binaryType = "arraybuffer";
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
    ws.onerror = onError;
    ws.onclose = onClose;
}
function sendMessage() {
    var form = document.forms[0];
    var msg = form.message.value;
    ws.send(msg);
}
function closeConnection() {
    ws.close();
}
function init() {
    var form = document.forms[0];
    form.open.onclick = openConnection;
    form.send.onclick = sendMessage;
    form.close.onclick = closeConnection;
}
onload = init;