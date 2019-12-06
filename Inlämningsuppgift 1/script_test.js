$(function() {

    //kollar om det är tomt
    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid') //show

            $(id).focus(); 
        } else {
            $(id).removeClass('is-invalid') //ta bort röd
            $(id).addClass('is-valid') //grön
          
        }
    }

    //anropar ovan tror jag

    $('input').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        isEmpty(id);
    });

//focus är när man är i fältet
//blur är när man lämnar fältet





 

  



    $('#regForm').submit(function(e){

        //prevent default
        e.preventDefault();
    
        //do something here
        isEmpty('#firstName');
       

        //submitta formuläret
        //form.submit();

        //document.getElementById('#regForm').submit();
        
    
    });

});