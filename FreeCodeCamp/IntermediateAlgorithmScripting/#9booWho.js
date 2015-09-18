//Bonfire: Boo who
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
    
  if (bool === false || bool === true || bool === (true && false)){
    return true;
  }
  else {
    return false;
  }
  return bool;
}

boo(null);
//Tested with: true, false, [1, 2, 3], [].slice, { 'a':1 }, 1, NaN, 'a'
//Made by: Christoffer92