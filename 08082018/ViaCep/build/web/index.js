function enviar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var h1 = document.querySelector("h1");
            h1.textContent = xhr.responseXML.querySelector("logradouro").textContent;
        }
    };
    xhr.open("post", "https://viacep.com.br/ws/"+document.querySelector("input[type=text]").value+"/xml", true);
    var formData = new FormData(document.forms["formulario"]);
    xhr.send(formData);
}

function  init() {
    var input = document.querySelector("input[type=button]");
    input.onclick = enviar;
}

onload = init;