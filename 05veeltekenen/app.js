class App
{
    runApplication()
    {
     //   console.log("Hello World");

        let canvas = document.getElementById("canvasId");

        let g = canvas.getContext("2d");
        
        this.tekenCirkel(g);
        
    }


    tekenCirkel(){
        for (let i = 0; i < 200; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

        g.beginPath();
        g.arc(x,y,20,0,Math.PI*2);
        g.stroke();
        g.fillStyle = "red";
        g.fill();
        g.closePath();
        }
    }
}

let app = new App();
app.runApplication();
