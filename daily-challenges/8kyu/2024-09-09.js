//create array containing the numbers between the two values given

function between(a, b,) {
    // your code here
    
    return Array.from({length : b - a + 1},(_, index) => a + index) 
  }