//store the breakpoint Celsius value in a variable
var breakpointCelsius = 20;

//write a Celsius-Fahrenheit converter function
//T(°F) = T(°C) × 1.8 + 32
function convertToFahrenheit(celsius){
  return celsius * 1.8 + 32;

}

//write an image display function for hot or cold images
//to update the #weatherImage in the HTML
function updateImage(celsius){
  var imgScr = "";
  if (celsius >= breakpointCelsius){
    imgScr = "images/hot.jpg";
  }else (celsius >= breakpointCelsius){
      imgScr = "images/cold.jpg";
  }
  $ ("#weatherImage").attr("src")
}

//write a function to update the result message that is displayed below the image
//the message template should be:
// "N°C (N°F). That's (hot OR cold)!"
function updateResultMessage(celsius, fahrenheit){

}

//write a click handler function for the submit button that brings everything together
$("#submit").click(function(){


});
