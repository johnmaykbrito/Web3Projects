var xhr = new XMLHttpRequest();
function mostrarResultado(result) {
    if (result) {
        document.getElementById("input").style.display = "none";
        document.getElementById("output").style.display = "block";
    } else {
        document.getElementById("input").style.display = "block";
        document.getElementById("output").style.display = "none";
    }
}
function stateChanged() {
    if (xhr.readyState === 4) {
        var text = xhr.responseText;
        var votos = JSON.parse(text);
        var total = votos.reduce((a, b) => a + b, 0);
        var output = document.getElementById("output");
        for (var i = 0; i < votos.length; i++) {
            var voto = votos[i];
            var li = output.getElementsByTagName("li").item(i);
            var spans = li.getElementsByTagName("span");
            spans[0].innerHTML = (voto === 1) ? voto + " voto" : voto + " votos";
            var barra = li.getElementsByTagName("meter")[0];
            barra.value = (total === 0) ? 0 : (100 * voto / total);
            spans[1].innerHTML = Math.round(10000 * voto / total) / 100 + "%";
        }
        document.getElementById("total").innerHTML = total;
        if (total > 0) {
            mostrarResultado(true);
        } else
            alert("N\u00e3o h\u00e1 votos cadastrados!");
    }
}
function enviarDados() {
    xhr.onreadystatechange = stateChanged;
    var params = new FormData(document.forms[0]);
    xhr.open("post", "Exemplo4", true);
    xhr.send(params);
}
function validar() {
    var input = document.querySelector("input[type='radio']:checked");
    if (input !== null) enviarDados();
    else alert("Voc\u00ea deve escolher uma op\u00e7\u00e3o!");
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
    var total = parseInt(document.getElementById("total").innerHTML);
    if (total > 0) {
        mostrarResultado(true);
    } else {
        xhr.onreadystatechange = stateChanged;
        xhr.open("get", "Exemplo4", true);
        xhr.send(null);
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
