class App
{
    runApplication()
    {
     //   console.log("Hello World");

        let canvas = document.getElementById("canvasId");
        console.log(canvas);


        let g = canvas.getContext("2d");

        //canvas met rood achtergrond
        g.fillStyle = "red";
        g.fillRect(0,0,canvas.width,canvas.height);     

        //zwart vierkant
        g.fillStyle = "black";
        g.fillRect(0,0,10,10);
    }
}

let app = new App();
app.runApplication();
