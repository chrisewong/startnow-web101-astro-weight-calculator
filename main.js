// Write your JavaScript code here!

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];



// dynamically populate the select dropdown
var dropDown = document.getElementById("planets");
planets.forEach(function(planets) {
  var life = document.createElement("option"); 
  life.text = planets[0];
  dropDown.appendChild(life);
  
});

function calculatedWeight(userWeight, planetName) {
  for(var i = 0; i < planets.length; i++) {
     if(planetName === planets[i][0]) {
       var gravity = planets[i][1];
       break;
     }
  }
  return userWeight * gravity;
}
//   // create an <option> element using document.createElement
//   // append an <option> element to your <select> element
// });
$("#calculate-button").on("click",(handleClickElement));
function handleClickElement() {

  var userWeight = document.getElementById("user-weight").value;
    
    var planetName = document.getElementById("planets").value;
   
    var results = calculatedWeight(userWeight, planetName);
    
    console.log(results);
    
    document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + results + "lbs!";
    

};
