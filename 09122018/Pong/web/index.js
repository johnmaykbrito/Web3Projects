var ws;
var playButton;
var room;

function onMessage(evt) {
    console.log(evt.data);
    if (evt.data === "2") {
        window.location.replace("http://localhost:8080/Pong/game.html");
    }
}

function onOpen() {
    ws.send(room);
}

function run() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "sessions/" + room;
    ws = new WebSocket(wsUri);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
}


$(document).ready(function () {
    playButton = $('#play');

    playButton.click(function () {
        var excerpt = ("<h2 id='excerpt'>Esperando jogador</h2>");
        $(this).replaceWith(excerpt);
        room = $(this).val();
        run();
    });
});