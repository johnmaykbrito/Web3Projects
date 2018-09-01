var ws;

function run() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "coders";
    ws = new WebSocket(wsUri);
    alert("Enviando ao WebSocket...\n" + this.value);
    ws.send(this.value);
    ws.onmessage = function(evt) {
        console.log("Modificado e recebido do WebSocket...\n" + evt.data);
    };
}

function init() {
    $('#button')[0].onclick = run;
}
onload = init;