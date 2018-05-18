unction oddOrEven(array) {
    let answer = 0
   if (array == []||array.length==0){
     return ("even")
   }
   else{
     for (let i =0; i<array.length; i++){
       answer=answer+array[i]
     }
     answer=Math.abs(answer)
     if (answer % 2 == 0) {
       return("even")
     }
     else{
       return("odd")
     }
   }
}
