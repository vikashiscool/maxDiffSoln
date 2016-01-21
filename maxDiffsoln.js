//Determine the maximum difference between the values in an array

var  arrNums = [1, 23, 456, 12, 23, -13];

function maxDiff(array){
  var max = array[0]
  var min = array[0]
  
  for(var i=0; i<array.length; i++){
    if(max<array[i]){
       max = array[i];
       }
    if(min>array[i]){
      min = array[i];
    }
    console.log("Max: ", max);
    console.log("Min: ", min);
  }
  var diff = max-min;
  console.log("Max difference (" + max + ") - (" + min + "): ", max-min);
  // array.forEach(function(num){
  //   if(num > max){
  //     max = num
  //     }
  //   if(num < min){
  //     min = num
  //     }
  //   })
    
}

maxDiff(arrNums);