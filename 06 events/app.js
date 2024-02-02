class App {
    runApplication() {
        console.log("hello world")

        let uiButton = document.getElementById("btn");
        let mijnKnop = document.getElementById("btn-2");
        let clickDiv = document.getElementById("divClick");

        let btnIncrement = document.createElement("button");
        btnIncrement.innerText = "IM A MULTIPLYING BUTTON";

        document.body.appendChild(btnIncrement);

        function repeatFunc() {
            let btnIncrement = document.createElement("button");
            btnIncrement.innerText = "IM A MULTIPLYING BUTTON";
            btnIncrement.onclick = repeatFunc;
            
            document.body.appendChild(btnIncrement);
        }

        /*      Lange versie
        
                let localeFunction = function (e)
                {
                    console.log("click!")
                }
        
        
                // Kortere versie
                uiButton.addEventListener("click", function(e)
                {
                    console.log("click!");
                });
        */

        uiButton.addEventListener("click", (e) => {
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        mijnKnop.addEventListener("click", (e) => {

            // Yoshi Header
            const header = document.createElement("H1");
            const charName = document.createTextNode("Yoshi");
            header.appendChild(charName);
            document.body.appendChild(header);

            // Yoshi paragraaf
            const para = document.createElement("p");
            const node = document.createTextNode("can gobble enemies with his long tongue, and lay eggs.");
            para.appendChild(node);
            document.body.appendChild(para);

            // Yoshi Image
        //  let img = new Image();
        //  img.src = 'yoshi-img.png';

            const yoshi = document.createElement("img");   
            yoshi.src = 'yoshi-img.png';
            document.body.appendChild(yoshi);
        });

        clickDiv.addEventListener("click", (e)=>{
            
            //Create a header with |clicked a div| text
            let header = document.createElement("h1");
            let textNode = document.createTextNode("CliCked A dIV")
            header.appendChild(textNode);
            document.body.appendChild(header);

            // Create an image on click to a div
            let count = 1;

            let img = document.createElement("img");
            img.src = "woman-yelling.jpg";
            img.id = 'girl';
            img.style = "display: block;";
            clickDiv.style = "width:100px; height: 100px;";
            document.body.appendChild(img);


            let audio = document.createElement("audio");
            let source = document.createElement("source");
            //audio.setAttribute("autoplay","controls");

            audio.autoplay = 1;
            audio.controls = 1;

            source.src="sound.mp3";
            audio.appendChild(source);
            document.body.appendChild(audio);

            document.getElementById("girl").scrollIntoView({block:"center"});

        });

        btnIncrement.addEventListener("click",(e)=> {

            let btnIncrement = document.createElement("button");
            btnIncrement.innerText = "IM A MULTIPLYING BUTTON";
            btnIncrement.onclick = repeatFunc;
    
            document.body.appendChild(btnIncrement);
        });
    };
};

let app = new App();
app.runApplication();