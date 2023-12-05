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

        console.log(app.greeting);
        console.log("appNaam: "+ app.appNaam);
        console.log("Versienummer: "+ app.versieNummer);
        console.log("Versiedatum: "+ app.versieDatum);
        console.log("Auteur: "+ app.auteur);
        console.log("Copyright: "+ app.copyright);
        console.log("Distributeur: "+ app.distributeur);
        console.log("Darkmode: "+ app.darkmode);
    }
}

let app = new App();
app.runApplication();
