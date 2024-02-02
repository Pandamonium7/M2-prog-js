class App {
    runApplication() {

           this.tekenCirkel();
    };  

    tekenCirkel(){
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");


        for (let i = 0; i < 200; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;


        g.beginPath();
        g.arc(x, y, 20, 0, Math.PI * 2);
        g.stroke();
        g.fillStyle = "red";
        g.fill();
        g.closePath();
        };
    };
};

let app = new App();
app.runApplication();
