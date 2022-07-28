function sayHi() {
    let name = document.getElementById('name').value;
    alert('Hello, ' + name);
}

function signReader() {
    let sign = document.getElementById('sign').value;
    if (sign == 'Capricorn' || sign == 'capricorn') {
        alert(sign + ' is the only right answer¡');
    }
    else {
        alert(sign + ' is the wrong answer¡');
    }
}