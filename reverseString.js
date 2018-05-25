/*Complete the solution so that it reverses the string value passed into it.*/ 
function solution(str){
  let newer = Array.from(str)
  let o = []
  for (let i = 0; i < newer.length; i++){
    o.unshift(newer[i])
  }
  return o.join("")
}
