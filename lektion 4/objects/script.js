
$(function() {

        let object = {};
        let objectArray = []

        const person = {
            firstName: 'Tina',
            lastName: 'Källklint',
            fullName: function() {
                return this.firstName + ' ' + this.lastName;
            },
            adresses: 
                {
                    street: 'Pilgatan 2',
                    zipcode: '12345',
                    city: 'Västerås',
                    fullAdress: function() {
                        this.street + ', ' + this.zipcode + ', '  + this.city
                        //return `${this.street}, ${this.zipcode} ${this.city}`
                    }
                },
           

            phoneNumbers: [
                '070-1234567',
                '070-9034567',
            ],

            emailAdress: 'tina@domain.se',
            description: 'Här är världens bästa person'

        };

        // document.write(person.firstName);
        // document.write(person.lastName);

        // person.Name = 'hej, hej'
        // document.write(person.Name)

        // Skriv denna
        //document.write(person.fullName());

        //document.write(person.address.fullAddress())
    

        //JSON //Gör om javascript till Json //(tar bort funtionen) 

        let json = JSON.stringify(person);
        document.write(json);
    

        //gör om till javascript från JSON

        let javascriptObj = JSON.parse(json);
        document.write(javascriptObj.address.street)
        // console.log(person);


   
    });




