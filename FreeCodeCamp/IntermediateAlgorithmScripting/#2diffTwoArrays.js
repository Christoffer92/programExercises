//Bonfire: Diff Two Arrays
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var test = [];
  var arr = arr1.concat(arr2);
  var match = 0;
  
  for (i = 0; i<arr.length; i++){
    match = 0;
    for (n = 0; n<arr.length; n++){
      if (arr[i] == arr[n]){
        match++;
      }
    }
   if (match < 2){
     test.push(arr[i]);
   }
  }   
  return test;
}
  diff(['andesite', 'grass', 'dirt', 'dead shrub'], 
       ['andesite', 'grass', 'dirt', 'dead shrub']);  
//Made by Christoffer92