Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
String.prototype.camelCase=function(){
  //your code here
  let array = Array.from(this)
  let newArray = []
  for (let i = 0; i<array.length; i ++) {
    if ((array[i] == " ") && array[i+1] !== undefined ){
      array[i+1]=array[i+1].toUpperCase()
    }
    else if (i == 0) {
      newArray.push(array[i].toUpperCase())
    }
    else if ((array[i] == " ") ){
      
    }
    else if (array[i] == array[i].toLowerCase()){
      newArray.push(array[i])
    }
    else {
      newArray.push(array[i].toUpperCase())
    }
  }
  return(newArray.join(""))
}
