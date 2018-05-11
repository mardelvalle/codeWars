/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)*/

function stray(numbers) {
  for (let i=0; i<numbers.length; i++){
    if ((numbers[0]==numbers[i]) && ((numbers[i] !== numbers[1]) && (numbers[i] !== numbers[2]))){
      return (numbers[0])
    }
    else if (numbers[i]==numbers[0]){
    }
    else
      return numbers[i]
    }
  }
