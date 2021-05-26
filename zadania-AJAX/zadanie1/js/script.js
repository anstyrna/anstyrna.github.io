$(document).ready(function() {
    $('#get-data').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data) {
            let pName = $('<p></p>').text(`Imię: ${data.imie}`);
            let pSurname = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
            let pProfession = $('<p></p>').text(`Zawód: ${data.zawod}`);
            let pFirm = $('<p></p>').text(`Firma: ${data.firma}`);
            let hr = $('<hr />');
            let divData = $('#dane-programisty');

            divData.append(pName);
            divData.append(pSurname);
            divData.append(pProfession);
            divData.append(pFirm);
            divData.append(hr);

            console.log(data);
            console.log(data.name);
        })

        .fail(function(error) {
            console.log(error);
        });
    });
});