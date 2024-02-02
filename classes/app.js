

class App {
    runApplication() {


        class Greet {
            constructor() {
                this.greeting = "Greetings!";
            }

            showGreeting(){
                console.log("greeting van binnen: "+ this.greeting);
            }
        }


        let greet = new Greet()
        greet.showGreeting();

        new Greet();
        new Greet();
        new Greet();


        class GoodBye {
            constructor() {
                this.farewell = "Bye bye!"
            }

            showBye(){
                console.log("Bye Bye van binnen: "+this.farewell);
            }
        }

        let bye = new GoodBye();
        bye.showBye();

        greet.showGreeting();
        bye.showBye();

        greet.showGreeting();
        bye.showBye();

        greet.showGreeting();
        bye.showBye();

    // call buiten de class

    console.log("Greetings van buiten de class: "+ greet.greeting);







        /* let trex = new Dino("Trex", true, 10);
        let allosaurus = new Dino("Allosaurus", true, 8);
        let brachiosaurus = new Dino("Brachiosaurus", false, 30);

        console.log(trex, allosaurus, brachiosaurus);*/


    }
}



/*
class Dino {

    constructor(naam, vleeseter, leeftijd) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

    eetDino(brachiosaurus) {
        brachiosaurus.leeft = false;
    }
}

class Plant {
    constructor(naam) {
        this.naam = naam;
    }

}
*/

let app = new App();
app.runApplication();
