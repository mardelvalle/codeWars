//Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n){
  let inString= n.toString();
  let i;
  let startArray=[];
  var newThing;
  for(i=0; i<inString.length; i++){
    // newThing = parseInt(inString[i]);
      startArray[i]=inString[i];
  }
  console.log(parseInt(startArray.sort().reverse().join("")))
  return parseInt(startArray.sort().reverse().join(""));
  }
descendingOrder(283940)
