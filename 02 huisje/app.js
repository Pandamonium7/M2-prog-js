class App
{
    runApplication()
    {
     //   console.log("Hello World");

        let canvas = document.getElementById("canvasId");
        console.log(canvas);

        let g = canvas.getContext("2d");
        g.beginPath();
        g.moveTo(400,450);
        g.moveTo()
        g.lineTo(300,200);
        g.stroke();
    
        /*
        g.moveTo(600,600);
        g.lineTo(400,500);
        g.stroke();
        g.moveTo(800,400);
        g.lineTo(200,300);
        g.stroke();
        */
    }
}

let app = new App();
app.runApplication();
