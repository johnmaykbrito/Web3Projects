function cadastrar(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            var obj = JSON.parse(xhr.responseText);
            console.log(obj);
        }
    };
    
    xhr.open("POST","Servlet", true);
    var formData = new FormData(document.forms["formulario"]);
    xhr.send(formData);
}

function validar(){
    cadastrar();
    return false;
}

function init() {
    var formulario = document.getElementById("formulario");
    formulario.onsubmit = validar;
//    formulario.onsubmit = cadastrar;
}

onload = init;