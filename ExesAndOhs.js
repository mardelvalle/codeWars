//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//  make it into an array - each character will be separate index
//  use each method
//  track the x nd o if else statement
//  after for loop check to see if the two variables are the same in value
//  make a boolean
function XO(str) {

  var lowerCase = str.toLowerCase();
  var checkString = lowerCase.split('')
  var x = 0
  var o = 0

  for(var i=0; i <checkString.length; i++){
    if (checkString[i]=='x'){
      x = x + 1;
    }
    else if (checkString[i]=='o'){
        o = o + 1;
      }
    else{
    }
  }
  if (x == o){
    return (true)
  }
  else{
    return (false)
  }
}
