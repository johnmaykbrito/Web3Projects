function enviar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var h1 = document.querySelector("h1");
            h1.textContent = xhr.responseXML.firstChild.textContent;
        }
    };
    xhr.open("post", "ServletAjax", true);
    var formData = new FormData(document.forms["formulario"]);
    xhr.send(formData);
}

function  init() {
    var input = document.querySelector("input[type=button]");
    input.onclick = enviar;
}

onload = init;