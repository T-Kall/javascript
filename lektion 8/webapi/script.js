function getFullName(firstname, lastname) {
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then(res => res.text())
    .then(data => console.log(data))
}

function getTotalSales() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
    .then(res => res.text()) //eller text vid localstorage/json
    then(data =>{ 

         // här gör jag det jag vill göra
        //console.log(data)
        //localStorage.setItem('totalSales', data)
    })
    
    
}

//läs på om fetch using fetch på Mozilla tex



async function  getData(url) {
    const res = await (await fetch(url)).json();
    return res;
}

let totalSalesAmount = getData('https://inlupp-fa.azurewebsites.net/api/total-sales').then();
console.log(totalSalesAmount);

// let totalSalesAmount;

// const asyncFunc = async () => {
//     let p = await fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
//     let data = await p.json()
    
//     return data.amount
// }


// totalSalesAmount = asyncFunc()
// console.log(totalSalesAmount)

// getFullName('Kalle', 'Larsson')
// getTotalSales()


// const totalSales = async () => {
//     await (await fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')).json()
// }

// totalSales().then(data => console.log(data))











// function getFullName() {
//     fetch(`https://inlupp-fa.azurewebsites.net/api/users?fistname=Kalle&lastname=Larsson`)
    
//     //return
// }