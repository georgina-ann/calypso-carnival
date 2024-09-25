//create conditional to determine if name given is playing banjo

function areYouPlayingBanjo(name) {
    // Implement me
    if (name.startsWith('R')||name.startsWith('r')){
    return `${name} plays banjo`;
    }
    else{
      return `${name} does not play banjo`
    }
  }