class App
{
    runApplication()
    {
     //   console.log("Hello World");

        let canvas = document.getElementById("canvasId");
        console.log(canvas);
       
        let g = canvas.getContext("2d");
        // rood dak
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);     
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill()
        // rood dak
        
        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.stroke();
        g.fill()


        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(800,300);
        g.lineTo(800,500)
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.stroke();
        g.fill()


        g.beginPath();
        g.fillStyle = "#A29593"
        g.moveTo(200,300);
        g.lineTo(600,400)
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.stroke();
        g.fill()
       
        /* klein huis 
        let g = canvas.getContext("2d");
        // rood dak
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);     
        g.lineTo(70,20);
        g.lineTo(30,10);
        g.closePath();
        g.stroke();
        g.fill()
        // rood dak
        
        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(70,20);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.stroke();
        g.fill()


        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(80,30);
        g.lineTo(80,50)
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.stroke();
        g.fill()


        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(20,30);
        g.lineTo(60,40)
        g.lineTo(60,60);
        g.lineTo(20,50);
        g.lineTo(20,30);
        g.stroke();
        g.fill()
*/




    }
}

let app = new App();
app.runApplication();
