function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
    });
    document.getElementById("myDIV").style.display = "block";
}

function formaterData(billetter) {
    let ut = "<table class='table table-striped'><tr><th>Antall</th><th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";

    for (const billett of billetter){
        ut+= "<tr><td>" +billett.antall+ "</td><td>" +billett.film + "</td><td>" + billett.fornavn + "</td><td>" +
            billett.etternavn + "</td><td>" + billett.telefon + "</td><td>" + billett.epost + "</td><td><button class='btn btn-danger' onclick='slettBillett(" + billett.billettNr + ")'>Slett</button></td><td><button class='btn btn-primary' onclick='oppdaterBillett(" + billett.billettNr + ")'>Oppdater</button></td></tr>";
    }

    $("#ut").html(ut);
}

$("#slett").click(function (){
    $.get( "/slettAlle", function() {
        hentAlle();
    });
});
function slettBillett(billettNr){
    $.ajax({
        url : "slettBillett?billettNr=" + billettNr,
        type : "DELETE"
    });
    document.getElementById("minDiv").style.display = "none";
    setTimeout(() => {hentAlle();}, 10);
}


function oppdaterBillett(billettNr) {
    $.get("http://localhost:8080/hentBilletterFraDB?billettNr=" + billettNr, function (data) {
        document.getElementById("billettNr").innerHTML = billettNr;
        document.getElementById("filmEdit").value = data.film;
        document.getElementById("antallEdit").value = data.antall;
        document.getElementById("fornavnEdit").value = data.fornavn;
        document.getElementById("etternavnEdit").value = data.etternavn;
        document.getElementById("telefonEdit").value = data.telefon;
        document.getElementById("epostEdit").value = data.epost;
    });
    document.getElementById("minDiv").style.display = "block";
}

function oppdaterBillettiDB(){
    const billett = {
        "id": document.getElementById("id").innerHTML,
        "film": document.getElementById("filmEdit").value,
        "antall": document.getElementById("antallEdit").value,
        "fornavn": document.getElementById("fornavnEdit").value,
        "etternavn": document.getElementById("etternavnEdit").value,
        "telefon": document.getElementById("telefonEdit").value,
        "epost": document.getElementById("epostEdit").value
    }

    console.log( document.getElementById("billettNr").value);
    console.log(billett); //cosin ambefalte å console så jeg kan se bilettens tilstand
    $.post("http://localhost:8080/oppdaterBillettiDB",billett, function (data){})
    document.getElementById("minDiv").style.display = "none";
    setTimeout(() => {hentAlle();}, 100);

}