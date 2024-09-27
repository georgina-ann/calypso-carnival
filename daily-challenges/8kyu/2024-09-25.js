//create conditional to check if name input is the owner

function greet (name, owner) {
    // Add code here
    if (name == owner){
      return ('Hello boss')
    }
    else{
      return('Hello guest')
    }
  }