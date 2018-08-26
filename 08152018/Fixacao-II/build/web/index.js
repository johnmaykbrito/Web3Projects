var idF = 0;

function cadastrar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var obj = JSON.parse(xhr.responseText);
            if (Object.keys(obj).length === 0) {
                alert("JSON vazio");
            } else {
                var div = $('#funcionarios');
                div.append("<tr id='" + idF + "'>\n\
                <td>" + idF++ + " - " + obj.nome + "</td>\n\
                <td>" + obj.dataNascimento + "</td>\n\
                <td>" + obj.salario + "</td>\n\
                <td><input type='button' value='Editar'/><br/>\n\
                <input type='button' value='Remover'/></td>\n\
                </tr>");
            }
        }
    };

    xhr.open("POST", "Servlet", true);
    var formData = new FormData(document.forms["formulario"]);
    xhr.send(formData);
}

function validar() {
    cadastrar();
    return false;
}

function init() {
    var formulario = document.getElementById("formulario");
    formulario.onsubmit = validar;
}

onload = init;