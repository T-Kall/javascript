
$(function() {

    $('#regForm').submit((e) => {
        e.preventDefault();

        //console.log(e);

        //alternativ 1:
        let firstName = $('#firstName').val();
        let lastName  = $('#lastName').val();

        console.log(firstName);

        //alternativ 2
        let address = e.currentTarget[2].value;
        console.log(address);

        //alternativ 4


    })


});

