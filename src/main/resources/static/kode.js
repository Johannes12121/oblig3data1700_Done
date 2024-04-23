
$("#kjop").click(function() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#telefon").val();
    const epost = $("#epost").val();
    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    let feil = true;
    if (antall <=0){
        $("#antallError").html("du må skrive inn et posetift antall");
        feil = false;
    }
    else {
        $("#antallError").html("");
    }
    if (!film){
        $("#filmError").html("du må velge en film");
        feil = false;    }
    else {
        $("#filmError").html("");
    }
    if (!fornavn){
        $("#fornavnError").html("feil ved fornavn");
        feil = false;    }
    else {
        $("#fornavnError").html("");
    }
    if (!etternavn){
        $("#etternavnError").html("Feil ved etternavn");
        feil = false;    }
    else {
        $("#etternavnError").html("");
    }
    if (telefon <=0){
        $("#telefonError").html("du må skrive inn et posetift antall");
        feil = false;    }
    else {
        $("#telefonError").html("");
    }
    if (!epost){
        $("#epostError").html("Feil ved epost");
        feil = false;    }
    else {
        $("#epostError").html("");
    }
    if(feil === false){


    }
    else{
        console.log(billett)//cosin ambefalte å console så jeg kan se bilettens tilstand
        $.post("/lagre", billett, function (data) {
        });

        $("#film").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefon").val("");
        $("#epost").val("");
    }
});