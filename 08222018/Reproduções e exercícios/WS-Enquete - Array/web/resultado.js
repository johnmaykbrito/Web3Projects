var xhr = new XMLHttpRequest();
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
            spans[1].innerHTML = (total === 0) ? "0%" : Math.round(10000 * voto / total) / 100 + "%";
        }
        document.getElementById("total").innerHTML = total;
        verResultado();
    }
}
function verResultado() {
    xhr.onreadystatechange = stateChanged;
    xhr.open("get", "Exemplo4", true);
    xhr.send(null);
}
function registerEvents() {
    setInterval("verResultado()", 1000);
}
onload = registerEvents;