// Variabel = nåt som kan innehålla information

/*

    JavaScript
    ------------------------------------------------
    String      = Text
    Number      = Tal, decimaltal
    Boolean     = Sant/Falskt  True/False
    null        = null dvs tomt inget alls
    undefined   = ej specifierat, varken string null bool ..
    Object      = ett eller flera olika värden
    Symbol      = symboler kommer vi inte använda



*/

/*

    Deklarera variabler
    ------------------------------------------------
    name = 'Tina'  (Undvik denna - bör ej göra så här)
    var name = 'Tina' (var = global variabel - accessbar överallt i koden - kan råka skriva över)
    let name = 'Tina' (let = lokal variabel - accessbar bara inom det angivna området) - NYTT bra, används mest
    const name = 'Tina' (const = konstant kan inte skrivas över - (undantag finns)) NYTT

    C# 
    string name = 'Tina';
    inta age = 35;

    JS
    let name = 'Tina';
    let age = 35;

    Strings:
    let name = "Tina" - Använd INTE
    let name = 'Tina' - Denna ska du inte använda
    let name = `Tina` - Använd denna när du kör placeholders (shift + ´, mellanslag)

    Avsluta varje rad med ett ; (det behövs ej men det är bra)

*/

let doNotUseThise = "Tina"
let doUseThisOne = 'Tina'
let age = 35;

let withoutPlaceholders = 'Hej mitt namn är ' + doUseThisOne + ' och jag är ' + age + ' år gammal';
let withPlaceholders = `Hej mitt namn är ${doUseThisOne} och jag är ${age} år gammal.`
console.log(withoutPlaceholders)
console.log(withPlaceholders);

var varName = 'var Tina';
let letName = 'let Tina';
const constName = 'const Tina';

console.log(varName);
console.log(letName);
// console.log(constName); -  Kan ej skrivas över, ger felmeddelande

let nullValue = null;
let undefinedValue = undefined;
let Value;
//let Value1, Value2;

let numberValue = 12;
let numberValue1 = 12.1;
let bignumberValue = 13.12321213213513515343121353623232341353


//Value1 = 20;  //ska ej göra så här
//Value2 = '25' //ska ej göra så här

console.log(nullValue);
console.log(undefinedValue);
console.log(Value);
//console.log(Value1);
//console.log(Value2);
console.log(typeof nullValue) //bug - här borde det stå null med det står object
console.log(typeof numberValue);
console.log(typeof typeofumberValue1);
console.log(bignumberValue);

/*
JavaScript: camelCase   firstName (måste)
c# :        Pascal      FirstName (eller båda typ)



*/

let myName = 'Tina Källklint';

//hitta antal tecken
console.log(myName.length);

//KOnvertera till VERSALER
console.log(myName.toUpperCase());

//Konvertera till gemener
console.log(myName.toLowerCase());

// dela upp texten i olika delar
//**** */
//**** */
//**** */
//**** */


/*
    Object = Klasser
    Object = Json (JavaScript Object Notation)

*/

let user = {
    firstName: 'Tina',
    lastName: 'Källklint',
    age: 35,
    address: {
        street: 'Lievägen',
        nr: 2,
        zipCode: '633 69',
        zipCode2: 63369,
        city: 'Eskilstuna',
    },
    phoneNumbers: [
        '070-3787479',
        '070-3127449'
    ],
    isActive: true //Boolean

};

console.log(`Användaren heter ${user.firstName} och så vidare`);




