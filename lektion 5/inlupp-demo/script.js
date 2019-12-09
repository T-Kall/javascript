$(function() {

    //med jquery
    function valdiateJqueryFirstName() {
        let value = $('#firstName').val()
        let error = $('#firstName_error')       

        if(value.length < 2) {
            error.html('You must enter valid first name')
        }
        else {
            error.html('Rätt') //eller tom
        }
    }

    // med vanlig javascript
    function validateLastName() {
        let value = document.getElementById('lastName').value
        let error = document.getElementById('lastName_error')

        if(value.length < 2) {
            error.innerHTML = 'You must enter valid last name'
        }
        else {
            error.innerHTML = 'Rätt' //eller tom
        }
    }


    $('input').blur(function(e) { //eller keyup istället för blur
        switch(e.target.id) {
            case 'firstName' :
                valdiateJqueryFirstName();
                break;
            case 'lastName' :
                validateLastName();
                break;        
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();
    })


})