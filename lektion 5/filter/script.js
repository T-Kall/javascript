$(function() {

    let nameArray = ['Tina', 'Tommy', 'Peter'];
    console.log(nameArray);
    

//filter
    //$("ul > li").filter('li').css('color', 'red');
$("ul > li").filter('#2').css('color', 'red');

$("ul > li").filter('#3').remove();
//$("ul > li").filter('#3').html('changed');

$("ul > li").filter(":even").css("background-color", "yellow")



// let nameArray = ['Tina', 'Peter', 'Olle'];
// console.log(nameArray);

// $(nameArray).filter(':contains("Peter")');
// console.log(nameArray);



console.log(nameArray.includes("Tommy"));


});