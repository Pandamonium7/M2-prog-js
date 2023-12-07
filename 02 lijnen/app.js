class App
{
    runApplication()
    {
     //   console.log("Hello World");

        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
/*
        g.fillStyle = "red";
        g.fillRect(0,0,canvas.width,canvas.height);     
        g.fillStyle = "black";
        g.fillRect(0,0,10,10);
*/
        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runApplication();
