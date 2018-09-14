$(document).ready(function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(20, 20, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.stroke();

    var r = document.getElementById("myCanvas");
    var ctxr = r.getContext("2d");
    ctxr.rect(20, 20, 150, 100);
    ctxr.stroke();

});