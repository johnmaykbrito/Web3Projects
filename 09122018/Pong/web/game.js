var ws;

function onMessage(evt) {
    console.log(evt.data);
}

$(document).ready(function () {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "game/game";
    ws = new WebSocket(wsUri);
    ws.onmessage = onMessage;
    setInterval(function() {
        ws.send("OPA");
    }, 1000);
});