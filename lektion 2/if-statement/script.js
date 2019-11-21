// if jämför olika saker

if (true) {
    console.log('Gör det som står här');
}

if (false) {
    console.log('Gör det som står här');
}


/*
==  om nåt är lika med
=== om nåt är lika med och har samma datatyp  //Använd detta
*/

var string = '13';
var number = 13;

if (string == number) {
    console.log('Dessa är lika 1');
    console.log(string + number);
}

if (string === number) {
    console.log('Dessa är lika 2');
    console.log(string + number);
}

// console.log();


/*

!= om det inte är lika med
!== om det inte är lika med och inte har samma datatyp //Använd detta

*/

if (string != number) {
    console.log('!= Dessa är inte lika');
    console.log(string + number);
}

if (string !== number) {
    console.log('!== Dessa är inte lika. Påståendet är sant');
    console.log(string + number);
}

/*
< mindre än
> större än
<= mindre eller lika med
>= störe eller lika med


*/

/*
&& och
||    eller
! inte
typeof  vilken datatyp

*/

var string = '10';
var number = 13;

if(string < number) {
console.log('string är mindre än number');
}



var string = '15';
var number = 13;

if (!(string > number && typeof string == typeof number)) {
  //  console.log('string är mindre än number');
}

if (string > number && typeof string == typeof number) {
   // console.log('string är mindre än number');
}


// IF, ELSEIF och ELSE

let name = 'Tommy'

if(name.toLowerCase() == 'tommy') {
    console.log('Hej Tommy');

} else if (name == 'Hans') {
    console.log('Hej Hans');

} else if (name == 'Hans') {
    console.log('Hej Hans');

} else if (name == 'Hans') {
    console.log('Hej Hans');
}
else {
    console.log('Okänd person!');
}