var factList = [
  "A leaky faucet can waste 100 gallons a day.",/*0*/
  "It takes about 100 gallons of water to grow and process a single pound of cotton, and the average American goes through about 35 pounds of new cotton material each year.",/*1*/
  "You use about 5 gallons of water if you leave the water running while brushing your teeth.",/*2*/
  "A gallon of gasoline takes nearly 13 gallons of water to produce. Combine your errands, car pool to work, or take public transportation to reduce both your energy and water use.",
"Industries released 197 million pounds of toxic chemicals into waterways in 1990."];/*3*/


var fact = document.getElementById("fact-text");
var myButton = document.getElementById("fact-button");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}