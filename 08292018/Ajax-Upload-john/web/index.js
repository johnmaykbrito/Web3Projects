function showUploadedItem(source) {
    var list = document.getElementById("image-list"), li = document.createElement("li"),
            img = document.createElement("img");
    img.src = source;
    li.appendChild(img);
    list.appendChild(li);
}

function upload() {
    var len = this.files.length, formdata = new FormData();
    for (var i = 0; i < len; i++) {
        var file = this.files[i];
        var tipo = file.type;
        console.log("file: " + file + " type: " + tipo);
        if (tipo.match(/image.*/)) {
            var reader = new FileReader();
            reader.onloadend = function (e) {
                var progress = document.getElementById("progress");
                progress.value = 100;
                showUploadedItem(e.target.result); // imagem base64
            };
            reader.readAsDataURL(file);
            formdata.append("images[]", file);
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
//            document.getElementById("progress").style.display = "none";
            document.getElementById("response").display = "block";
            document.getElementById("response").innerHTML = xhr.responseText;
        }
    };
    xhr.open("post", "Upload_Servlet", true);
    xhr.send(formdata);
    document.forms[0].reset();
}

onload = function () {
    var input = document.getElementById("images");
    document.getElementById("btn").style.display = "none";
    input.onchange = upload;
};