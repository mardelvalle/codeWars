/*Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."*/

var countSheep = function (num){
  //your code here
  let stringing = "";
  for ( let i= 1; i<=num; i++){
   stringing=`${stringing}${i} sheep...`
  }
  return(stringing)
}
