const popup = document.querySelector('.popup');
const container = document.querySelector('.container');
const submit = document.getElementById('boton');
const numberSelected = document.getElementsByClassName('number-btn');
const arrow = document.getElementById('arrow');

validator = false;

for (let i = 0; i < numberSelected.length; i++) {
    numberSelected[i].onclick = () => {
        const ratingValue = numberSelected[i].value;
        console.log(ratingValue);
        console.log(numberSelected);
        document.getElementById('rating').innerHTML = ratingValue;
        validator = true;

    }
}

submit.onclick = () => {

    if (validator) {
        container.style.display = 'none';
        popup.style.display = 'flex';
    } else {
        document.getElementById('alerta').style.display = 'block';
    }
}

arrow.onclick = () => {
    container.style.display = 'block';
    popup.style.display = 'none';
    document.getElementById('alerta').style.display = 'none';
    validator = false;
}
