//Bonfire: Search and Replace
function isUpperCase(char) {
  if (char === char.toUpperCase()){
    console.log(char);
    return true;
  }
  else {
    return false;
  }
}

function replace(str, before, after) {

  if (isUpperCase(before[0]) == true){ 
    after = after.replace(after[0], after[0].toUpperCase());  
  }
  else {
    after[0] = after[0].toLowerCase();
  }
  str = str.replace(before, after);
  
 return str;
}

replace("He is Sleeping on the couch", "Sleeping", "sitting");
//Made by: Christoffer92