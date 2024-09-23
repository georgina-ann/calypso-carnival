//determine if one value is greater than the other value doubled

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let twiceAsOld = (sonYearsOld * 2);
    
    if (dadYearsOld > twiceAsOld){
    return (dadYearsOld - twiceAsOld)
    }
    else{
      return (twiceAsOld - dadYearsOld)
    }
    
  }