The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine){
  // ...
  let change =[];
  for (let a = 0; a < peopleInLine.length; a++) { 
    if(peopleInLine[a] == 50){
      if(change.length > 0) {
        if(change[0] == 25) {
        change.push(50);
          change.shift()
        }
        else {
        
          return "NO"
        }
      }
      else {
        return "NO"
      }
    }
    else if(peopleInLine[a] == 100) {
      if(change.length > 1){
        if((change[change.length - 1] == 50) && (change[0] == 25)) {
          change.pop();
          change.shift()
        }
        else if((change[0] && change[1] && change[2] == 25)) {
          change.shift()
          change.shift()
          change.shift()
        }
        else {
          return "NO";
        }
      }
      else {
      console.log("no?")
        return "NO";
      }
  }
    else {
      change.splice(0, 0, 25);
    }
  }
  return "YES"
}
