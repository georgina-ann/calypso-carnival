//find the position in the alphabet of the given letter

function position(letter){
    //creat alphabet string
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //find index of letter in the alphabet, and add 1
    return (`Position of alphabet: ${alphabet.indexOf(letter)+ 1}`)
  }