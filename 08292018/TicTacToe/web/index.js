var ws;
var grid;

function changeCell(msg) {
    var json = JSON.parse(msg.data);
    console.log(json);
    if ((json.counter % 2) === 0) {
        if ($('#' + json.cell)[0].style.cssText === "") {
            $('#' + json.cell).css('background-color', 'red');
        } else {
            ws.send("x");
        }

    } else {
        if ($('#' + json.cell)[0].style.cssText === "") {
            $('#' + json.cell).css('background-color', 'blue');
        } else {
            ws.send("x");
        }
    }
}

function openConn() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "jogodavelha";
    ws = new WebSocket(wsUri);
    ws.onmessage = changeCell;
}

function send() {
    ws.send(this.id);
}

function preparar() {
    for (let i = 0; i <= 8; i++) {
        var item = grid[i];
        item.onclick = send;
    }
}

function init() {
    openConn();
    grid = document.querySelectorAll("tbody tr td");
    preparar();
}

onload = init;