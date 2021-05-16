const submit = (event) => {
    event.preventDefault();

    let fName = document.querySelector('[name="fname"]');
    let lName = document.querySelector('[name="lname"]');

    console.log('Imię: ' + fName.value);
    console.log('Nazwisko: ' + lName.value)
}

let form = document.getElementById('form');

form.addEventListener('submit', submit);