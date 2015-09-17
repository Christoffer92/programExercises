//Bonfire:Spinal Tap Case
function spinalCaseReplacerHelper(match){                  // returns '-' plus the match.
  return '-' + match.toLowerCase();                        // so basicly .replace sets an '-' behind the match.
}
function spinalCase(str) {
  
   if (str.indexOf("_") != -1)                             //if str dose have _.
    str = str.replace(/_/g, '');                           //replace _ with nothing. As the next if will take care of capitals. 
  
  if (str.indexOf(' ') == -1 )                             //if the string dose not have a space.
    str = str.replace(/[A-Z]/g, spinalCaseReplacerHelper); //match all uppercase letters and use ...ReplacerHelper.
  
  if (str.indexOf(' ') != -1)                              //if str dose have space.
  str = str.replace(/\s/g, '-').toLowerCase();             //replaces spaces with -.
  
  if (str.indexOf('-') == 0)                               //Last line here is to get rid of the first -,
    str = str.substr(1);                                   //created from spinalCaseReplacerHelper.
  
  return str
}

spinalCase('ThisIsSpinalTap'); 
//Tested with: "This Is Spinal Tap", "ThisIsSpinalTap", "The_Andy_Griffith_Show", "Teletubbies say Eh-oh"
//Christoffer92