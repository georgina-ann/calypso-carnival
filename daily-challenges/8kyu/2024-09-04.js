//determine if there is enough space
function enough(cap, on, wait) {
    // your code here
    if (on < cap  && (wait + on) < cap){
      return 0;
    }
    else{
    return (wait - (cap - on))  
  }}