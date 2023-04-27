$.validator.addMethod(
    "regex",
    function (value, element, regexp) {
        let check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
);

$("#forma").validate({
    rules: {
        kupacImePrezime: {
            required: true,
            regex: /^[A-Z][a-z]*\s[A-Z][a-z]*$/   /////^[a-zA-Z]+ [a-zA-Z]+$/
        },
        kupacTelefon: {
            required: true,
            regex: /^[0-9]{3} [0-9]{3} [0-9]{3}$/
        },
        kupacAdresa: {
            required: true
        },
        kucniBroj: {
            required: true

        },
        postanskiBroj: {
            required: true
        },
        mjesto: {
            required: true
        },
        emailAdresa: {
            required: true,
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z._]+\.[a-zA-Z]{2,}$/
        }
    },
    messages: {
        kupacImePrezime: {
            required: "Obavezno polje!",
            regex: "Dozvoljen unos samo slova,obavezno unijeti :ime i prezime ,pocetni karakter u imenu i prezimenu se pise velikim slovom!"
        },
        kupacTelefon: {
            required: "Obavezno polje!",
            regex: "Dozvoljen format: 000 111 222 !"
        },
        kupacAdresa: {
            required: "Obavezno polje!"
        },
        kucniBroj: {
            required: "Obavezno polje!"
        },
        postanskiBroj: {
            required: "Obavezno polje!"
        },
        mjesto: {
            required: "Obavezno polje!"
        },
        emailAdresa: {
            required: "Obavezno polje!",
            regex: "Example: example_yourname@gmail.com"
        }
    }
});

function odabraniProizvod(nazivProizvoda, cijenaProizvoda) {

    let proizvodOdabran = document.getElementById("proizvodOdabran");

    proizvodOdabran.innerHTML = "Odabrani proizvod";
    proizvodOdabran.style.fontSize = "1.7em";
    proizvodOdabran.style.borderBottom = "1px solid black";
    proizvodOdabran.style.fontWeight = "bold";


    document.getElementById("nazivProizvoda").innerHTML = "Naziv: " + nazivProizvoda;
    document.getElementById("cijenaProizvoda").innerHTML = "Cijena: " + cijenaProizvoda + " KM";
}

function printValue() {

    let pomocna;

    const kupacImePrezime = document.getElementById("kupacImePrezime");
    const kupacTelefon = document.getElementById("kupacTelefon");
    const kupacAdresa = document.getElementById("kupacAdresa");
    const kucniBroj = document.getElementById("kucniBroj");
    const postanskiBroj = document.getElementById("postanskiBroj");
    const mjesto = document.getElementById("mjesto");
    const emailAdresa = document.getElementById("emailAdresa");
    const napomena = document.getElementById("napomena");

    if (!kupacImePrezime.checkValidity() || !kupacTelefon.checkValidity() || !kupacAdresa.checkValidity() || !kucniBroj.checkValidity()
        || !postanskiBroj.checkValidity() || !mjesto.checkValidity() || !emailAdresa.checkValidity()) {
        console.log("Form is not valid!");
        pomocna = false;
    }
    else {
        pomocna = true;
        console.log("Ime i Prezime: " + kupacImePrezime.value);
        console.log("Telefon: " + kupacTelefon.value);
        console.log("Adresa stanovanja: " + kupacAdresa.value);
        console.log("Kucni broj: " + kucniBroj.value);
        console.log("Postanski broj: " + postanskiBroj.value);
        console.log("Mjesto: " + mjesto.value);
        console.log("Email Adresa: " + emailAdresa.value);
        console.log("Napomena: " + napomena.value);
    }

    if (pomocna) {
        alert("Poruka\n\nProizvod uspješno naručen");
    } else {
        alert("Poruka\n\nPopunite podatke u formi!");
    }
}

