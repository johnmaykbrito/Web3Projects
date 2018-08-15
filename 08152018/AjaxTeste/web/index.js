function enviar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var obj =JSON.parse(xhr.responseText);
            alert(obj.name);
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