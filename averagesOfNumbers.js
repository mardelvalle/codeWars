function averages(numbers) {
let total=[]
if (numbers==null || numbers==0 || numbers=='undefined'){
return ([])
}
else {
  for (let i = 1; i<numbers.length; i++){
    total.push((numbers[i-1]+numbers[i])/2)
  }
  return(total)
}
}
