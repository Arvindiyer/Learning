// Get all the keys from calculator div
var keys = document.querySelectorAll('#calc span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Get the input and button values
    var input = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
    
    // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
    // If clear key is pressed, erase everything
    if(btnVal == 'C') {
      input.innerHTML = '';
      decimalAdded = false;
    }
    
    // If eval key is pressed, calculate and display the result
    else if(btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];
      
      // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
      
      // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
      if(operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');
      
      if(equation)
        input.innerHTML = eval(equation);
        
      decimalAdded = false;
    }
    
    else if(btnVal == '.') {
      if(!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }
    
    // if any other key is pressed, just append it
    else {
      input.innerHTML += btnVal;
    }
    
    // prevent page jumps
    e.preventDefault();
  } 
}
          