var idF = 0;
var totalFuncionarios = 0;

function removeFuncionario(idFuncionario) {
    $('#' + idFuncionario).remove();
    $('#legend').text('Funcionários(' + --totalFuncionarios + ')').css("font-weight", "bold");
    semFuncionarios();
}

function cadastrar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var obj = JSON.parse(xhr.responseText);
            if (Object.keys(obj).length === 0) {
                alert("JSON vazio");
            } else {
                var table = $('#funcionarios');
                table.append("<tr class='funcLine' id='" + idF++ + "'>\n\
                <td>" + obj.nome + "</td>\n\
                <td>" + obj.dataNascimento + "</td>\n\
                <td>" + obj.salario + "</td>\n\
                <td><input type='button' value='Editar'/><br/>\n\
                <input type='button' value='Remover' onclick='removeFuncionario(" + (idF - 1) + ")'/></td>\n\
                </tr>");
                $('#legend').text('Funcionários(' + ++totalFuncionarios + ')').css("font-weight", "bold");
                semFuncionarios();
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

function semFuncionarios() {
    if (totalFuncionarios === 0) {
        var table = $('#funcionarios');
        table.append("<p id='noFunc'>Não há funcionários cadastrados</p>");
    } else {
        $('#noFunc').remove();
    }
}

function init() {
    var formulario = document.getElementById("formulario");
    formulario.onsubmit = validar;
    semFuncionarios();
}

onload = init;