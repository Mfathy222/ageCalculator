var yearInput = document.getElementById("yearInput")
var ageElement = document.getElementById("age")
var typeElement = document.getElementById("type")
var asteriskElement = document.getElementById("asterisk")

function calcAge() {


    var date = new Date();


    var currentYear = date.getFullYear()

    var age = currentYear - yearInput.value;
    ageElement.innerHTML = age;
    if(age > 18 ){
        typeElement.innerHTML = "You are Young"
    }else{
        typeElement.innerHTML = "You are Kid"
    }
    
    var asterisk = "";
    for(var i = 0 ; i < age ; i++){
        asterisk += "*"
    }
    asteriskElement.innerHTML = asterisk;
}