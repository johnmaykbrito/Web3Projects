var ws;
var grid;

function insertExcerpt() {
    var excerpt
            = "<tbody id='tb'>" +
            "<tr><td id='a'></td><td id='b'></td><td id='c'></td></tr>" +
            "<tr><td id='d'></td><td id='e'></td><td id='f'></td></tr>" +
            "<tr><td id='g'></td><td id='h'></td><td id='i'></td></tr>" +
            "</tbody>";

    $('#tb').replaceWith(excerpt);
    getGrid();
    prepare();
}

function changeCell(msg) {
    var json = JSON.parse(msg.data);
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

function prepare() {
    for (let i = 0; i <= 8; i++) {
        var item = grid[i];
        item.onclick = send;
    }
}

function getGrid() {
    grid = document.querySelectorAll("tbody tr td");
}

function init() {
    openConn();
    getGrid();
    prepare();
}

onload = init;