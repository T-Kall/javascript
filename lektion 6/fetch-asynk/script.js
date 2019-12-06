
 //Hämtar data från API

$(function() {
    $('body').click(function() {
       
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {

            document.getElementById('results').innerHTML = data[0].title
            localStorage.setItem('results', data);

        })       
    })

    console.log(localStorage.getItem('results'));

})