

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){

if(toFahrenheit.checked){
    result.textContent = "You selectet Fahrenheit";

}
else if(toCelsius.checked){
    result.textContent = "you selectet Celsius";

}
else{
    result.textContent = "select a unit";
}
}