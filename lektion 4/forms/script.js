
$(function() {

    //hindrar sidan att ladda om
    $('#regform').submit((e) => {
        e.preventDefault();

        //dumt sätt men funkar att validera
        // if($('#firstName').val() === '') {
        //     console.log('Värdet är tomt')
        // }


        // if($('#firstName').val() === '') {
        //     $('#firstName').addClass('is-invalid');
        //     $('#firstName').focus();
        // } else {
        //     $('#firstName').removeClass('is-valid');  
        //     $('#firstName').addClass('is-valid');  
        // }

        function validateInput(id) {
            if($(id).val() === '')
            
       
        if($('#firstName').val() === '') {
            $('#firstName').addClass('is-invalid');
           // $('#firstName').focus();
        } else {
            $('#firstName').removeClass('is-valid');  
            $('#firstName').addClass('is-valid');  
        }
    }
    
    //stoppa in this nånstans
    //eller event
    $('input').keyup(function() {
        console.log(e)
    });



        $('#regform').submit((e) => {
            e.preventDefault();

            validateInput('#firstName');
            validateInput('#lastName');

    })
   
});