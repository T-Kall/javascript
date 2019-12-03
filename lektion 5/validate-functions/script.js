$(function () {


    function validateField(input) {
        let value = $(input).val();

        let fieldName = $(input).attr('data-fieldName')

        if (value.length < 1) {
            //console.log(value);
            //console.log(`${input} field is required`)
            //$('error_message').html(`${input} field is required`)
            //$('error_message').css('display', 'block')
            //console.log($(input).attr('data-fieldText'))
            $('error_message').append(`<li>You must enter your ${fieldName}</li>`)
        }

    }

    // //validera bara förnamn - ett fält i taget...

    // function validateFirstName() {
    //     let value = $('#firstName').val();

    //     if (value === '') {
    //         $('#firstName_Error').text('Du måste ange ett förnamn')
    //     }
    //     else if (value.lengt < 2) {
    //         $('#firstName_Error').text('Du måste ange misnst 2 tecken')
    //     }
    //     else {
    //         $('#firstName_Error').text('')
    //     }
    // }


    
    // //Onödigt - skriv ihop istället
    // function validateFirstName() {
    //     let firstname_Value = $('#firstName').val();
    //     console.log(firstname_Value);

    // }

    // function validateLastName() {
    //     let firstname_Value = $('#lastName').val();
    //     console.log(lastname_Value);
    // }



    $('#oneForm').on('submit', function (e) {
        //förindra att den skickar iväg data och ladda om sidan
        e.preventDefault();

        validateField('#firstName')
        //validateField('#lastName')

        // validateField('#firstName', 'Du måste ange ett förnamn')
        // validateField('#lastName', 'Du måste ange ett efternamn')

    });



});