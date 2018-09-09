var ws;

function changeView(e) {
    console.log(e.data);
}

function send() {
    ws.send("voting");
}

function startSimulation() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "election";
    ws = new WebSocket(wsUri);
    setInterval(send, 5000);
    ws.onmessage = changeView;
}

$(document).ready(function () {
    var vote = $('#vote');
    var stop = $('#stop');
    
    vote.click(function () {
        startSimulation();
        $(this).attr("disabled", "disabled");
        stop.removeAttr("disabled");
    });
    
    stop.click(function () {
        $(this).attr("disabled", "disabled");
        vote.removeAttr("disabled");
        ws.close();
    });
});