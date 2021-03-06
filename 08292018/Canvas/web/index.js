var canvas;
function run() {
    canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // var c stands for context
    var c = canvas.getContext('2d');
    console.log(canvas);

    var mouse = {
        x: undefined,
        y: undefined
    };

    var maxRadius = 40;

    window.addEventListener("mousemove", function (event) {
        console.log(event);
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    });

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

//    c.fillStyle = "rgba(255, 0, 0, 0.5)";
//    c.fillRect(100, 100, 100, 100);// args: (x, y, width, height)
//    c.fillStyle = "rgba(0, 0, 255, 0.5)";
//    c.fillRect(300, 300, 300, 300);
//    c.fillStyle = "rgba(0, 255, 0, 0.5)";
//    c.fillRect(200, 200, 200, 200);

    // line
//    c.beginPath();
//    c.moveTo(50, 300);
//    c.lineTo(300, 100);
//    c.lineTo(400, 300);
//    c.strokeStyle = "#ff2211";
//    c.stroke();

    // Arc / Circle
//    for (var i = 0; i < 30; i++) {
//        var x = Math.random() * window.innerWidth;
//        var y = Math.random() * window.innerHeight;
//        var r = Math.random() * (255 - 0) + 0;
//        var g = Math.random() * (255 - 0) + 0;
//        var b = Math.random() * (255 - 0) + 0;
//        c.beginPath();
//        c.arc(x, y, 30, 0, Math.PI * 2, false); // args: (x, y, radius, start, end, CW/CCW)
//        c.strokeStyle = "rgba("+r+", "+g+", "+b+", 0.5)";
//        c.stroke();
//    }

    function barPiece(x, y, dx, dy, width, length) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.length = length;

        this.draw = function () {
            c.beginPath();
            c.fillStyle = "rgba(255, 0, 0, 0.5)";
            c.fillRect(this.x, this.y, this.width, this.length);// args: (x, y, width, height)
        };

        this.update = function () {
            if (this.x > innerWidth - this.length || this.x < 0) {
                this.dx = this.dx * -1;
            }

            if (this.y > innerHeight - this.length || this.y < 0) {
                this.dy = this.dy * -1;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        };

    }

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.dx = dx;
        this.y = y;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.r = Math.random() * (255 - 0) + 0;
        this.g = Math.random() * (255 - 0) + 0;
        this.b = Math.random() * (255 - 0) + 0;

        this.draw = function () {

            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // args: (x, y, radius, start, end, CW/CCW)
            c.strokeStyle = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", 1)";
            c.fillStyle = "rgba(" + this.r + ", " + this.g + ", " + this.b + ", 1)";
            c.fill();
            c.stroke();
        };

        this.update = function () {
            if (this.x > innerWidth - this.radius || this.x - this.radius < 0) {
                this.dx = this.dx * -1;
            }

            if (this.y > innerHeight - this.radius || this.y - this.radius < 0) {
                this.dy = this.dy * -1;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();

            // interactivity
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50
                    && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }
        };
    }

    var circleArray = [];
    
    function init() {
        circleArray = [];
        for (var i = 0; i < 800; i++) {
            var x = Math.random() * ((innerWidth - 0) - 0) + 0;
            var dx = (Math.floor(Math.random() * ((innerWidth - 300) - 300) + 300)) % 2 ? -2 : 2;
            var y = Math.random() * ((innerHeight - 0) - 0) + 0;
            var dy = (Math.floor(Math.random() * ((innerHeight - 300) - 300) + 300)) % 2 ? -2 : 2;
            var radius = Math.random() * ((40 - 10) - 10) + 10;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }
    }

    init();

    var piece = new barPiece(50, 50, 2, 2, 15, 20);

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight); // args: (x, y, X, Y)
        circleArray.forEach(function (item) {
            item.update();
        });
        piece.update();
    }

    animate();
}
onload = run;