// var rollDie = function () {
//     return Math.floor(1 + Math.random() * 6);
//   }
  
//   console.log(rollDie());  // 1 (for example)


  function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* your code here */
    rolledDice = -1;
        

    return function() {
      /* your code here */
      
      if (rolledDice < list.length - 1){
          rolledDice ++
        return list[rolledDice];
      } else {
          rolledDice = -1
          rolledDice ++
        return list[rolledDice]
      }
    }
}

  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 6