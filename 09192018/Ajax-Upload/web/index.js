function showUploadedItem(source) {
    var list = document.getElementById("image-list"), li = document.createElement("li");
    var img = document.createElement("img");
    img.src = source;
    li.appendChild(img);
    list.appendChild(li);
}

function upload() {
    var len = this.files.length, formdata = new FormData();
    console.log("len: " + len);

    for (var i = 0; i < len; i++) {
        var file = this.files[i];
        var tipo = file.type;
        console.log(tipo);

        if (tipo.match(/image.*/)) {
            var reader = new FileReader();
            reader.onloadend = function (e) {
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

    // barra de progresso
    xhr.upload.addEventListener("progress", function (e) {
        console.log("e" + e);
        console.log("Loaded: " + Math.ceil(e.loaded / e.total) * 100);
        document.getElementById("response").display = "none";
        var progress = document.getElementById("progress");
        progress.style.display = "block";
        var j = 0;
        var intervalId = setInterval(function () {
            if (j < 100) {
                progress.value = j++;
            } else {
                progress.value = Math.ceil(e.loaded / e.total) * 100;
                clearInterval(intervalId);
            }
        }, 10);
    });
    xhr.open("post", "Exemplo8", true);
    xhr.send(formdata);
    document.forms[0].reset();
}

onload = function () {
    var input = document.getElementById("images");
    document.getElementById("btn").style.display = "none";
    input.onchange = upload;
};