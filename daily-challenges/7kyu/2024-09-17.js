//determine if the sum of numbers in the array is odd or even

function oddOrEven(array) {
    //enter code here
 initialVal = 0;
 let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue,initialVal,);
   if (sum % 2 == 0){
     return('even')
   }
   else{
     return('odd')
   }
 }