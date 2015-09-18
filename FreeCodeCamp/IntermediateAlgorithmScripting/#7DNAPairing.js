//Bonfire: DNA Pairing
function pair(str) {
  var test = 0;  
  var strArr = str.split("");
  var arr = [];
  var tempArr = [];
  
  for (var i = 0; i<strArr.length; i++){
    tempArr = [];
    tempArr.push(strArr[i]);
    
    if (str[i] == 'A'){ 
      strArr[i] = strArr[i].replace('A', 'T');
    }
    if (str[i] == 'T'){ 
      strArr[i] = strArr[i].replace('T', 'A');
    }
    if (str[i] == 'G'){ 
      strArr[i] = strArr[i].replace('G', 'C');
    }
     if (str[i] == 'C'){ 
      strArr[i] = strArr[i].replace('C', 'G');
    }
    tempArr.push(strArr[i]);
    arr.push([tempArr[0], tempArr[1]]);
    }
  
  return arr;
}
pair("GCG"); 
//tested with: "GCG", "ATCGA", "TTGAG", "CTCTA"'
//Made by: Christoffer92