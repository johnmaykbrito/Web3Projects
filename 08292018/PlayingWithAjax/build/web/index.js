var xhr = new XMLHttpRequest();
function init() {
    var form = document.forms["myform"];
    var formdata = new FormData(form);
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
    };
    xhr.open("post", "Servlet");
    xhr.send(formdata);
    
}

onload = init;