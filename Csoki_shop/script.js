// Alap állapot
let allapot = {
    csokik:[
        {
            nev:"Étcsokik",
            ara: 2500,
            raktaron:true
        },
        {
            nev:"Tej csokik",
            ara: 2800,
            raktaron:false
        },
        {
            nev:"Fehér csokik",
            ara: 2900,
            raktaron:true
        }
    ]
}

//Read
function renderCsokik(){
    //console.log("lefut")
    let csokiHTML = "";
    /*for (const csoki of allapot.csokik) {
        console.log(csoki.nev)
        console.log(csoki.ara)
        console.log(csoki.raktaron)
        if(csoki.raktaron){
            csokiHTML += `
            <div class="card m-2 p-3 text-center text-white bg-success">
            <p><b>${csoki.nev}</b></p>
            <p>${csoki.ara} Ft</p>
            </div>
            `;
        }else{
            csokiHTML += `
            <div class="card m-2 p-3 text-center text-white bg-danger">
            <p><b>${csoki.nev}</b></p>
            <p>${csoki.ara} Ft</p>
            </div>
            `;
        }
    }*/

    allapot.csokik.forEach((csoki) =>{
        csokiHTML +=`
        <div class="col">
            <div class="m-2 p-2 ${csoki.raktaron ? "bg-success" : "bg-danger"}">
            <h2>${csoki.nev}</h2>
            <p>${csoki.ara}</p>
            <button class="btn btn-danger">Törlés</button>
            <button class="btn btn-primary">Módosítás</button>
            </div>
        </div>
        `
    })


    document.getElementById("csoki-lista").innerHTML = csokiHTML;
}

//Create művelet
document.getElementById("ujtermek").onclick = function(){
   // console.log("Szia");
    let newFormHTML = `
    <h4>Áru Hozzáadása</h4>
    <form id="uj-csoki" class="p-5">
        <label  class="w-100">
        <h5>Termék neve</h5>     </label>
        <input class="form-control" type="text" name="nev">
   

        <label class="w-100">
        <h5>Termék ára</h5>  </label>
        <input class="form-control" type="number" name="ara">
      

        <label  class="w-100">
        <h5>Van e raktáron?</h5>  </label>
        <input  type="checkbox" name="raktaron">
      <br>
        <button class="btn btn-primary" type="submit">Küldés</button>
    </form>
    `;
    document.getElementById("uj").innerHTML = newFormHTML;
    document.getElementById("ujtermek").style.display= 'none';

    //az űrlap elemek mentése változókba
    document.getElementById("uj-csoki").onsubmit= function(event){
        event.preventDefault();
        let nev = event.target.elements.nev.value;
        console.log(nev);
        let ara = event.target.elements.ara.value;
        console.log(ara);
        let raktaron = event.target.elements.raktaron.checked;
        console.log(raktaron);

        // a mentett adatok tömbhöz hozzáadása
        allapot.csokik.push(
        {
            nev: nev,
            ara: ara,
            raktaron: raktaron
        });

        document.getElementById("uj").innerHTML = "";
        document.getElementById("ujtermek").style.display= 'block';
        renderCsokik();
    }   
}



window.onload = renderCsokik();