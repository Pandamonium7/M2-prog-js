class App
{
    runApplication()
    {

        let canvas = document.getElementById("canvasId");
        console.log(canvas);
       
        let g = canvas.getContext("2d");
        this.tekenHuis(g,100,100);
        this.tekenHuis(g,400,400);

    }
        // rood dak
       
    
        /* klein huis 
        

        // let g = canvas.getContext("2d");
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

    }

    */

      tekenHuis(g,x,y)
      {


        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(300+x,100+y);
        g.lineTo(200+x,300+y);
        g.lineTo(600+x,400+y);     
        g.lineTo(700+x,200+y);
        g.lineTo(300+x,100+y);
        g.closePath();
        g.stroke();
        g.fill()
        // rood dak
        
        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(700+x,200+y);
        g.lineTo(800+x,300+y);
        g.lineTo(600+x,400+y);
        g.stroke();
        g.fill()


        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(800+x,300+y);
        g.lineTo(800+x,500+y);
        g.lineTo(600+x,600+y);
        g.lineTo(600+x,400+y);
        g.stroke();
        g.fill()


        g.beginPath();
        g.fillStyle = "#A29593"
        g.moveTo(200+x,300+y);
        g.lineTo(600+x,400+y);
        g.lineTo(600+x,600+y);
        g.lineTo(200+x,500+y);
        g.lineTo(200+x,300+y);
        g.stroke();
        g.fill()
        
        //raam


        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(400+x,480+y);
        g.lineTo(500+x,500+y);
        g.lineTo(500+x,450+y);
        g.lineTo(400+x,430+y);
        g.closePath();
        g.stroke();
        g.fill()
         }
      }



let app = new App();
app.runApplication();
