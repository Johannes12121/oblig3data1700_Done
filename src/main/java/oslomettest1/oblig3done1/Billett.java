package oslomettest1.oblig3done1;

import lombok.*;//bruker lombok så jeg slipper overflødig kode

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor



public class Billett {

    private Long billettNr;
    private String film;
    private Integer antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;

    public Billett(String film, Integer antall, String fornavn, String etternavn, String telefon, String epost){
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn =etternavn;
        this.telefon = telefon;
        this.epost = epost;
    }
}
