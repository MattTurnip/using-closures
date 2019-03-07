var countdownGenerator = function (x) {
    var count = x;

        return function (){
        if (count < 0) {
            count-- 
            console.log ("Rockets already gone, bub!")
        } else if (count == 0){
            count --
            console.log("Blast Off!")
        } else {
            console.log("T-Minus " + count--)
        }
    }
}
  
  var countdown = countdownGenerator(10);
  
  
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();



  //--------------

//   var foo = (function() {
//     var x = 10;
  
//     var inner = function() {
//       console.log("Value of x is: " + x);
//     }
//     return inner;
//   })(); // Notice the () at the end,
//         // which will immediately invoke the function,
//         // assigning the returned value (inner) to foo
  
//   foo();