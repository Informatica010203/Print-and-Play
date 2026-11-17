// Zoek de knop en het informatieblok op in de HTML
const infoKnop = document.getElementById('info-knop');
const extraInfo = document.getElementById('extra-info');

// Voeg een klik-gebeurtenis toe aan de knop
infoKnop.addEventListener('click', function() {
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
        extraInfo.style.display = 'block';
        infoKnop.textContent = 'Verberg informatie';
    } else {
        extraInfo.style.display = 'none';
        infoKnop.textContent = 'Bekijk meer informatie';
    }
});