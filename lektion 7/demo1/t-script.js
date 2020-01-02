
// $(function () {

//     // 1 deklarera variabler - gör alltid detta i början
//     // const ändras aldrig
//     // Blanda inte jquery och javascript

//     const formById = document.getElementById('demoform') //javascript - 
//     const formByQS = document.querySelector('#demoform') //javascript - 
//     const formByJQ = $('demoform') //jquery - måste ligga innanför första function

//     // formById.value;
//     // formByQS.value;
//     // formByJQ.val();

// })


const form = document.querySelector('#demo-form');
const input = document.querySelector('#demo-input');
//const input = document.querySelector('#demo-input2');
const results = document.querySelector('#demo-result');


// en funktion för varje grej

// function validateInput(inputValue) {
//     if(inputValue !== '') {
//     return true;
// }
// else {
//     return false;
// }





// function validateInput(inputValue) {
//     if(inputValue !== '') {
//         return true;
// }  if (inputvalue < 8) {
//     return false
// }


function validateInput(inputValue) {
    if(inputValue !== '') {
        return true;
       
}
 console.log('Nu finns ett värde')
    return false;
}

//ska bara ske
function sendRequest() {
    // console.log(validateInput(input.value));
    // console.log(validateInput1(input.value));
    // console.log(validateInput2(input.value));  
}

// function sendRequest(inputValue) {

// //function sendRequest() {
//     // let result = validateInput(input.value)
//     // console.log(result)



//     //console.log(result)

// //     // if(validateInput(inputValue)) {
// //    //     console.error('Nåt gick fel')
// //    // }

// }

// function validateFirstName(inputValue) {
    // const inputValue
    
    // }




// trigger eventet

//form.addEventListener('submit', sendRequest) //blur, focus, submit, click //sendRequest om det bara är en 


form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(e.target[0].value)
   // console.log(e.target)
    //sendRequest();
    //sendRequest(input1.value);

// for(input of e.target) {
//     const item = document.querySelector('input')
    // console.log(item)

    //console.log(e.target[0]);
        //console.log(e);


// for(let i=0; i< e.target.length; i++) {
//  if(e.target[i].type === "text")

//     //console.log(validateInput(e.target[i].value));
//     validateInput(e.target[i].value);
// }

})