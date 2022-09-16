function sayHello ( ){
    console.log ("Hi!");
}
function plusFive(num) {
    return num + 5;
}

function increaseLargerNumberByFive( num1, num2) {
    var larger;

if ( num1 >= num2) {
    larger = num1;
}
    else {
    larger = num2;
}
    return plusFive( larger);
}

