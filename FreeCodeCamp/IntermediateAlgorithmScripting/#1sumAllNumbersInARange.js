//Bonfire: Sum All Numbers In a Range
function sumAll(arr) {  
  var total = 0;
  
  if (arr[0] == arr[1]){
    return arr[1];
  }
  arr.sort(function(a,b){if (a>b){return true;}});
  var lowNum = arr[0];
  var highNum = arr[1];
  
  var numOfNumbers = highNum - lowNum + 1; 
  //plus 1 in order to include arr[0]. 5,6,7,8,9,10
   
  for (var i = 0; i<numOfNumbers; i++){
    total = total + lowNum+i;    
  }
  return total;
}

sumAll([5, 10]);
//Made by Christoffer92