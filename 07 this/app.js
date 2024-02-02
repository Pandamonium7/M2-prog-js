class User{
    constructor(name){
       this.name = name;
    }

    wieBenIk(){
        console.log(this.name);
    }
}

class App
{


    runApplication()
    {
        console.log("hello world")
        //code gaat hier!

        let user1 = new User("Ben");
        let user2 = new User("Willem");
        let user3 = new User("John");
        let user4 = new User("Bertrand");
        let user5 = new User("Simon");
        let user6 = new User("David");

        user6.wieBenIk(); //David
        user5.wieBenIk(); //Simon
        user2.wieBenIk(); //Willem
        user3.wieBenIk(); //John
        user1.wieBenIk(); //Ben
        user6.wieBenIk(); //David
        user4.wieBenIk(); //Bertrand
        user2.wieBenIk(); //Willem
        user3.wieBenIk(); //John
        user2.wieBenIk(); //Willem
//alles goed
    }
}

let app = new App();
app.runApplication();