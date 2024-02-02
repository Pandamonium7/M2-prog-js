class App
{
    runApplication()
    {
        //this functie
        this.greeting = "Starting up";
        let appNaam = "Html/JS site";
        let versieNummer = 0.1;
        let versieDatum = new Date();
        let auteur = "Arturo Espinoza";
        let copyright = "Arturo Corp";
        let distributeur = "Arturo BV";
        let darkmode = false;

        console.log(app.greeting);

        console.log("Hello World\n")
        
        console.log(" Appnaam: ", appNaam, "\n",
                    "Versienummer: ", versieNummer, "\n", 
                    "Versiedatum: ", versieDatum,  "\n",
                    "Auteur: ", auteur, "\n",
                    "Copyright: ",copyright, "\n", 
                    "Distributeur: ",distributeur, "\n", 
                    "Darkmode: ",darkmode, "\n");
    }
}

let app = new App();
app.runApplication();
