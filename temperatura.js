window.onload = function() {
    var computeButton = document.getElementById("calculo");
    computeButton.onclick = c2f;
  }
function c2f() {
    var celsius = document.getElementById("temp").value;   
  
    var answer = document.getElementById("calcular");
  
    var fahr = celsius*9./5. + 32.;   
  
    var estado;
    
    if (fahr < 41. )
       estado = "hace fr&iacute;o.";
    else if (fahr > 77. )
       estado = " hace calor.";
    else 
       estado = " la temperatura es normal.";
  
    answer.innerHTML = "La temperatura en grados Fahrenheit es de " + fahr.toFixed(2) + " grados, " + estado;
  }

  var hTemp = ((cTemp * 9) /5 ) + 32;
  document.write("Temperature in Celsius: " + cTemp + " degrees<br/>");
  document.write("Temperature in Fahrenheit: " + hTemp + " degrees")