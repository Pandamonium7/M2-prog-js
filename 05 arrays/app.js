class App
{
    runApplication()
    {
        let headersByCssClass = document.getElementsByClassName("bandName");
        
        for (let i = 0; i < headersByCssClass.length; i++) {
            headersByCssClass[i].innerText = "huh???";
        }
        
        headersByCssClass[0].innerText = "nieuws";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar";
        headersByCssClass[3].innerText = "beste forum posts";
        headersByCssClass[4].innerText = "pricewatch";
        
        let mijnH1 = document.getElementById("headerId")
        console.log(mijnH1.innerText);

        mijnH1.innerText = "nieuw text";

        // Data array 

        let data = ["nieuws","reviews","commentaar","beste forum posts","pricewatch"]
  
        for (let i = 0; i < data.length; i++) {
            let tekst  = data[i];
            headersByCssClass[i].innerText = i + ": " +data[i];
        }



        //console.log("Hello World\n")

        let artiesten = ["Tame Impala", "System of a Down", "Polyphia"]


        // Forloop artiesten
            for(let i= 0; i < artiesten.length; i++){
            const artiest =  artiesten[i];
            console.log(i + ": " + artiest);
            }

        // Push Bob Dylan, Prince (toevoegen)
        artiesten.push("Bob Dylan", "Prince");

            for(let i= 0; i < artiesten.length; i++){
                const artiest =  artiesten[i];
                console.log(i + ": " + artiest);
            }

        // Splice Bob Dylan, Prince (verwijderen)
        let deleteBob = artiesten.indexOf("Bob Dylan");
        artiesten.splice(deleteBob, 1);
        let deletePrince = artiesten.indexOf("Prince");
        artiesten.splice(deletePrince, 1);

            for(let i= 0; i < artiesten.length; i++){
                const artiest =  artiesten[i];
                console.log(i + ": " + artiest);
            }

        // Nummers
        let nummers = [2,5,7]


            for(let i=0; i < nummers.length; i++){
            const nummer = nummers[i]+1;
            console.log(nummer);
            }
    }
}

let app = new App();
app.runApplication();
