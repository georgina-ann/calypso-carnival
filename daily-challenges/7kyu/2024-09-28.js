//convert string of numbers to be in descending order

function descendingOrder(n){
    //split string and sort ascending(default) and reverse and join again for descending string of numbers
    return parseInt(String(n).split('').sort().reverse().join(''))
    
  }