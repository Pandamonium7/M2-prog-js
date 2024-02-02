class Dino{

    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

   eatFood(foodToEat){
        foodToEat.leeft = false;
        this.honger = false;
        console.log("ik ben een " + this.naam);
        console.log("ik eet nu " + foodToEat.naam);
        console.log("mijn honger: " + this.honger);
      //  brachiosaurus.leeft = false;
    }
}

class Plant{
    constructor(naam,leeft){
        this.naam = naam;
        this.leeft = leeft;
    }

}


class App
{
     runApplication()
    {

        let trex = new Dino("Trex",true,10);
        let allosaurus = new Dino ("Allosaurus",true,8);
        let brachiosaurus = new Dino ("Brachiosaurus",false,30);

        let gras = new Plant("gras",true);
        let struik = new Plant("struik",true);

        brachiosaurus.eatFood(gras,struik);

        console.log("De leeftijd van deze "+ trex.naam + " is: " + trex.leeftijd);
        console.log("En deze " + trex.naam + " eet vlees: " + trex.vleeseter);
        
        trex.eatFood(brachiosaurus);
        console.log("Leeft " + brachiosaurus.naam + "? " + brachiosaurus.leeft);
    }
}

let app = new App();
app.runApplication();