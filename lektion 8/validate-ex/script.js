$(function() {

    function validateCheckBox(name) {
        let all = $(`input[name=${name}`)

        if(all.is(':checked')) {
            all.removeClass('is-invalid')

            for(radio of all) {
                if(radio.checked) {
                    $('#' + radio.id).addClass('is-valid')
                }
                else {
                    $('#' + radio.id).removeClass('is-valid')
                }
            }
        }
        else {
            all.addClass('is-invalid')
            return true
        }
    }


    $('#testForm').on('submit', function(e) {
        e.preventDefault();

        validateCheckBox('gender');

        if(
            validateCheckBox('gender') || validateCheckBox('pets')) {
            console.log('ett fel att uppstått')
        } else {
            console.log('skickar data till databasen')
        }

    })
})