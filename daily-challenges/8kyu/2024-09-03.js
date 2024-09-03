//determine if number is even or odd

function evenOrOdd(number) {
    // divide number by 2, if it divides evenly and remainer is 0, number is even
    if (number % 2 === 0){
      return('Even')
    }
    else{
      return('Odd')
    }
  }

or
function evenOrOdd(number) {
    return (number % 2 === 0) ? 'Even' : 'Odd';
  }

or
function evenOrOdd(number) {
    if (number % 2 === 0){
      return ("Even")
      }
    else return ("Odd");
    }