var ws;
var total = 0;
function mostrarResultado(result) {
    if (result) {
        document.getElementById("input").style.display = "none";
        document.getElementById("output").style.display = "block";
    } else {
        document.getElementById("input").style.display = "block";
        document.getElementById("output").style.display = "none";
    }
}

function sendVoto() {
    var input = document.querySelector("input[type='radio']:checked").value;
    ws.send(String(input));
}

function updateScreen(evt) {
    var responseJSON = JSON.parse(evt.data);
    
    var arrayVotos = [];
    for (var data in responseJSON) {
        arrayVotos.push(responseJSON[data]);
    }

    total = arrayVotos.reduce((a, b) => a + b, 0);
    $('#total').text(total);

    var output = $('#output');
    for (var i = 0; i < arrayVotos.length; i++) {
        var voto = arrayVotos[i];
        var li = output.getElementsByTagName("li").item(i);
        var spans = li.getElementsByTagName("span");
        spans[0].innerHTML = (voto === 1) ? voto + " voto" : voto + " votos";
        var barra = li.getElementsByTagName("meter")[0];
        barra.value = (total === 0) ? 0 : (100 * voto / total);
        spans[1].innerHTML = Math.round(10000 * voto / total) / 100 + "%";
    }

    if (total > 0) {
        mostrarResultado(true);
    } else
        alert("N\u00e3o h\u00e1 votos cadastrados!");
}

function enviarDados() {
    var wsUri = "ws://" + document.location.host + document.location.pathname + "enquete";
    ws = new WebSocket(wsUri);
    ws.onopen = sendVoto;
    ws.onmessage = updateScreen;
}

function validar() {
    var input = document.querySelector("input[type='radio']:checked");
    if (input !== null)
        enviarDados();
    else
        alert("Voc\u00ea deve escolher uma op\u00e7\u00e3o!");
    return false;
}
function votarNovamente() {
    var radios = document.forms[0].disciplina;
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    mostrarResultado(false);
}
function verResultado() {
    total = parseInt(document.getElementById("total").innerHTML);
    if (total => 0) {
        mostrarResultado(true);
    } else {
        console.log("erro a");
    }
}
function registerEvents() {
    var formulario = document.getElementById("formulario");
    formulario.onsubmit = validar;
    var revotar = document.getElementById("revotar");
    revotar.onclick = votarNovamente;
    var resultado = document.getElementById("resultado");
    resultado.onclick = verResultado;
}
onload = registerEvents;
