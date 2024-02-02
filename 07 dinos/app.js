class Dino{

    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

   eetDino(brachiosaurus){
        brachiosaurus.leeft = false;
    }
}

class Plant{
    constructor(naam){
        this.naam = naam;
    }

}


class App
{
     runApplication()
    {

        let trex = new Dino("Trex",true,10);
        let allosaurus = new Dino ("Allosaurus",true,8);
        let brachiosaurus = new Dino ("Brachiosaurus",false,30);

        console.log(trex,allosaurus,brachiosaurus);

        
    }
}

let app = new App();
app.runApplication();