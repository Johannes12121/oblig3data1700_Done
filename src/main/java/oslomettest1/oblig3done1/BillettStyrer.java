package oslomettest1.oblig3done1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BillettStyrer {
    @Autowired
    private BillettRepository rep;
    //lagerer de på db
    @PostMapping("/lagre")
    public void lagre(Billett billett){
        rep.lagreBillett(billett);
    }//henter de fra db
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentAlle();
    }

    //tar en bilett fra DB
    @GetMapping("/hentBilletterFraDB")
    public Billett hentBilletterFraDB(@RequestParam Long billettNr){
        return rep.findById(billettNr);}

    @PostMapping("/oppdaterBillettiDB")
    public String oppdaterBillettiDB(Billett billett){
        rep.oppdaterBillettiDB(billett);
        return "Oppdatert";
    }


    //sletter en og sletter alle
    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }

    @DeleteMapping("/slettBillett")
    public void slettBillett(@RequestParam Long billettNr){
        rep.slettBillett(billettNr);
    }
}