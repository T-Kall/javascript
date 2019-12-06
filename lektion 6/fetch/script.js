$(function () {

});
console.log(0)

//fetch -anrop är ren Javascript och lite nyare än tex Ajax


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

let todos = [];

console.log(1)

fetch('https://jsonplaceholder.typicode.com/todos')
    //.then(res => console.log(res))
    //.then(json => console.log(res.json))
    //.then(data => console.log(data))

    //.then(res => res.json())

    .then(res => {
        if(res.status === 200) {
            console.log(2)
            return res.json()
        }  
    })

    .then(data => {
        console.log(data)
        //todos = defaultStatus
        todos = data
        console.log(3)

        //vid const
        // for (object of data) {
        //     todos.push(object)
        // }

    })

    //.catch(error => console.log('Fel, fel, fel!!!! ' + error))

    .catch(error => {
        document.write('FEL! ' + error)
        todos = [];
    })

  


    //console.log()