

function elaborated(){
    const pkm = 0.21
    let hkm = document.getElementById("how-km").value;
    var hyears = document.getElementById("hm-years").value;
    let biglietto = hkm * pkm
    const minor = biglietto / 100 * 20
    const senior = biglietto / 100 * 40
    if (hyears >=18 && hyears < 65){
        let biglietto = hkm * pkm 
        document.getElementById("load").innerHTML =`${biglietto.toFixed(2)} €`
    }else if (hyears < 18){
        let bigliettoMinor = biglietto - minor
        document.getElementById("load").innerHTML =`${bigliettoMinor.toFixed(2)} €`
    }else if (hyears >= 65 && hyears <= 115){
        let bigliettoSenior = biglietto - senior
        document.getElementById("load").innerHTML =`${bigliettoSenior.toFixed(2)} €`
    }else if (hyears > 115){
        document.getElementById("load").innerHTML =`<span style= "color:red; background-color:black;">ERROR.</span>`
        alert("Your age cannot be calculated")
    }
    
}
