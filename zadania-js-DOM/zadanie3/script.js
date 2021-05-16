const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');

    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';
}

let btnSetBackground = document.getElementById('change-background');

btnSetBackground.addEventListener('click', setBackground);
