//make a new list of friends from an array, based on the length of their names

function friend(friends){
    //your code here
  let friendList = friends.filter((name) => name.length === 4);
    return friendList;
      }