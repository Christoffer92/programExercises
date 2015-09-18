//Bonfire: Missing letters
function fearNotLetter(str) {
  
  console.log(str);
  var charCode = 0;
  var cowardLetter;
  
  charCode = str.charCodeAt(0)
  
  for (var i = 1; i<str.length; i++){
    charCode = str.charCodeAt(i-1);
    console.log(charCode);
    if (charCode - str.charCodeAt(i) !== -1){
      cowardLetter = String.fromCharCode(charCode+1);
      break;
    }
  }
  
  return cowardLetter;
}

fearNotLetter('abce');
//Tested with: 'abce', 'bcd', 'jklmno', 'yz'
//Made by: Christoffer92