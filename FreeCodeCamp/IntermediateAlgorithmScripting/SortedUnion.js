//Was stuck so used code from https://gist.github.com/t4deu/c1d526e8d1f6a42baa97. 
//Made me help understanding the .reduce, and callbacks events.

function unite(arr1, arr2, arr3) {

  var checkDuplicatesAndMerge = function(previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) < 0){
      previousValue.push(currentValue);
    }
      return previousValue;
  }
    
  for (var i=1; i<arguments.length; i++){
    arguments[0] = arguments[i].reduce(checkDuplicatesAndMerge, arguments[0])
  }
  
return arguments[0];
  
  }


unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);