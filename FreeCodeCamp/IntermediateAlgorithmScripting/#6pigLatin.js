//Bonfire: Pig Latin
function isVowel(char){
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o'){
    return true;
  }
    else 
    {
      return false;
    }
}

function translate(str) {
  var test;
  var strArr = str.split("");
  var prefix = "";
  
  if (isVowel(strArr[0]) == true){
    strArr.push("way");
    str = strArr.toString();
    for (var i=0; i<str.length; i++){
      str = str.replace('\,', '');  
    }
  }
  else{
    while (isVowel(str[0]) != true){
      prefix += str[0];
      str = str.substr(1, str.length);
    }
    str = str+prefix+"ay";
  }
 return str;
}

translate("glove");
//tested with: "california", "paragraphs", "glove", "eight".
//Made by: Christoffer92