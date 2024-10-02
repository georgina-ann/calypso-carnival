//find the min and max values in an array

function minMax(arr){
    //use three dot operator to access elements in array
    let min = Math.min(...arr)
    let max = Math.max(...arr)
      
      return[min,max]
    }