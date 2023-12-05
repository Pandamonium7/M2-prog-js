class App
{
    runApplication()
    {
        this.greeting = "Starting up";
        this.appNaam = "Html/JS site";
        this.versieNummer = 0.1;
        this.versieDatum = new Date();
        this.auteur = "Arturo Espinoza";
        this.copyright = "Arturo Corp";
        this.distributeur = "Arturo BV";
        this.darkmode = false;
        this.eenBool = true;
        this.eenString = "String";
        this.eenInteger = 68686869;


        console.log(app.greeting);
        console.log("appNaam: "+ app.appNaam);
        console.log("Versienummer: "+ app.versieNummer);
        console.log("Versiedatum: "+ app.versieDatum);
        console.log("Auteur: "+ app.auteur);
        console.log("Copyright: "+ app.copyright);
        console.log("Distributeur: "+ app.distributeur);
        console.log("Darkmode: "+ app.darkmode);
        console.log("Boolean: "+ app.eenBool);
        console.log("String: "+ app.eenString);
        console.log("Integer: "+ app.eenInteger);
    }
}

let app = new App();
app.runApplication();
