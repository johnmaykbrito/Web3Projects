var xhr = new XMLHttpRequest();
var dot = 0;
var t;
function votando() {	
    var opcao = document.getElementById("opcao").value;
    if(opcao === "Parar") {
        var mensagem = document.getElementById("mensagem");
        var str = "Votando";
        str += (dot % 3 === 0) ? "." : (dot % 3 === 1) ? ".." : "...";
        mensagem.innerHTML = str;
        dot++;
    } else {
        dot = 0;
        document.getElementById("mensagem").innerHTML = "";
    }
}
function votar() {
    var opcao = document.getElementById("opcao").value;
    if(opcao !== "Votar") {
        var voto = Math.floor(Math.random()*8);
        var params = "disciplina=" + voto;
        xhr.open("post", "Exemplo4", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-length", params.length);
        xhr.send(params);
    }
}
function executar() {
    var opcao = document.getElementById("opcao").value;
    if(opcao === "Parar") {
        document.getElementById("opcao").value = "Votar";		
        clearInterval(t);
    }
    else {
        document.getElementById("opcao").value = "Parar";
        votar();
        var voto = document.getElementById("voto").value;
        t = setInterval("votar()", parseInt(voto)*1000);
    }
}
function registerEvents() {
    var opcao = document.getElementById("opcao");
    opcao.onclick = executar;
    setInterval("votando()", 1000);
}
onload = registerEvents;