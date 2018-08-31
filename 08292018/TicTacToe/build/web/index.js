var ws;
var grid;
var bucket = "";


function jogodavelha(){
    var tabela = document.querySelector("table:first-child");
    console.log(tabela);
}

function sendPlay(e){
//    alert(e.data);
    jogodavelha();
}

function openConn(){
    var wsUri = "ws://"+ document.location.host + document.location.pathname + "jogodavelha";
    ws = new WebSocket(wsUri);
    ws.onmessage = sendPlay;
}

function send() {
    alert(this.id);
}

function preparar(){
    for (let i = 0 ; i <= 8 ; i++) {
        var item = grid[i];
        item.onclick = send;
    }
}

function init(){
    var botao = document.getElementById("botao");
    botao.onclick = openConn;
    
    grid = document.querySelectorAll("tbody tr td");
    preparar();
}

onload = init;