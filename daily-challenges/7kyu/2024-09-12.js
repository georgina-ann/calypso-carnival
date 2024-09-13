//determine if the first string includes the second string at the end of it

function solution(str, ending){
    // TODO: complete
    if (str.includes(ending,(str.length - ending.length))){
      return true;
    }
    else{
      return false;
    }
  }