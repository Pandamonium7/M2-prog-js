class App
{
    runApplication()
    {
        // JS get html elementby id and class
        let newsTitle = document.getElementById("newstitle");
        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        let newsitem2 = document.getElementsByClassName("gamenews")[1];
    
      //  console.log("Hello World\n")
        let random = Math.random();
        console.log(random);

        if(random < 0.2)
        {
            newsTitle.style.backgroundColor = "#FF0000";
        }

        if(random < 0.2 )
        {
            newsitem1.style.backgroundColor = "#76b5c5";
        }
        else
        {
            newsitem2.style.backgroundColor = "#e28743";
        }
    }
}

let app = new App();
app.runApplication();