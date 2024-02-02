class App {
    runApplication() {


        class Greet {
            constructor() {
                this.greeting = "Greetings!";
            }

            showGreeting() {
                console.log("greeting van binnen: " + this.greeting);
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

            showBye() {
                console.log("Bye Bye van binnen: " + this.farewell);
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

        console.log("Greetings van buiten de class: " + greet.greeting);
        console.log("Bye Bye van buiten de class: " + bye.farewell);

        console.log("Greetings van buiten de class: " + greet.greeting);
        console.log("Bye Bye van buiten de class: " + bye.farewell);

        console.log("Greetings van buiten de class: " + greet.greeting);
        console.log("Bye Bye van buiten de class: " + bye.farewell);

    }
}




let app = new App();
app.runApplication();
