//Som
let x = 9;
let a = 3;
let b = 4;
let c = 89;

let y  = (a*(x*x))+(b*x)+c;

console.log(y);

//Wiskunde formule function return
function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x))+(b*x)+c;
    return y;
}

// Nog een wiskunde function

function kommaGetalen(u,h,l)
{
    let logY = Math.log(l)+ h + Math.pow(u,2);
    console.log(logY);
}

kommaGetalen(9,8,15);

kommaGetalen(64,94,63);

kommaGetalen(31,42,49);

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2)

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

// Return function

function heeftEenResultaat()
{
    let resultaat = 1;
    return resultaat;
}
 
let hetResultaat = heeftEenResultaat(); //opvangen
console.log(hetResultaat); // en gebruiken via de variable
console.log(heeftEenResultaat()); // direct gebruiken

heeftEenResultaat();


// argument function
function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout");
    console.log(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("Yo, ik ben een call functie");



// global function

function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}


superMooieGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world");
        superMooieGlobalFunction();

        this.newClassFunction();
        this.anotherFunctionWithArguments("ander argument");
        this.marioFunctie();

        let lachVariable = this.rarelachFunctie();
        console.log(lachVariable);

        let getallenVariable = this.getallenFunctie(3,8);
        console.log(getallenVariable);

    }

    newClassFunction()
    {
        console.log("hello world in de nieuwClassFunction");
    }

    anotherFunctionWithArguments(Argument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(Argument);
    }

    // Mario functie
    marioFunctie()
    {
        console.log("MARIO!!");
    }

    //  Bwahahah functie
    rarelachFunctie()
    {
        let lach = "BWAHAHAHAH";
        return lach;
    }

    // 2 Getallen
    getallenFunctie(x,y)
    {
       let z = x + y;
        return z;
    } 

}

let app = new App();

    app.runApplication();

    app.newClassFunction();

    app.anotherFunctionWithArguments("Mijn argument is iets...");

    app.marioFunctie();

    console.log(app.rarelachFunctie());

    console.log(app.getallenFunctie(4,5));

