var ws;

function onMessage(evt) {
    $('#response').append(evt.data);
    $('#response').show();
}

function onOpen() {
    ws.send("msg");
    $('#salas').hide();
}

function run() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "sessions/" + this.value;
    ws = new WebSocket(wsUri);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
}

function send() {
    alert(this.value);
    ws.send(this.value);
}

function init() {
    $('#humanos')[0].onclick = run;
    $('#aliens')[0].onclick = run;
    $('#send')[0].onclick = send;
    $('#response').hide();
}

onload = init;