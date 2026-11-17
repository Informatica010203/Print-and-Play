// Eenvoudige check om te testen of het script goed geladen is
console.log("tests.js is succesvol geladen!");

function testKnopBestaat() {
    const knop = document.getElementById('info-knop');
    if (knop) {
        console.log("Test geslaagd: De informatieknop is gevonden.");
    } else {
        console.error("Test mislukt: De informatieknop ontbreekt in index.html.");
    }
}

testKnopBestaat();