
// Document Object Model
// DOM är HTML + CSS + JS
// javaScript Injection ska man akta sig för


//document.getElementById('div2').innerText = 'Hejsan';

/*
document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('div2').innerText = 'Detta är resultatet'
});

*/

let btn = document.getElementById('btn')
let res = document.getElementById('div2')

function changeContent() {
    res.innerText = 'Uppdaterad via clickEvent'
}

//lägger till event på en knapp

btn.addEventListener('click', function() {
    res.innerText = 'Uppdaterad via EventListener';
});


btn.addEventListener('click', function() {
    btn.style.backgroundColor = '#ff0000';
});
