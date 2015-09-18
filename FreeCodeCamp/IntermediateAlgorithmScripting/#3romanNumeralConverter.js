//Bonfire: Roman Numeral Converter.
function convertHelper(digits, romanNumberOne, romanNumberTwo, romanNumberThree){ 
  var string = "";  
  for (var i = 0; i < digits; i++){
      string += romanNumberOne;
    }
    if (string == romanNumberOne.repeat(9)){ string = romanNumberOne + romanNumberThree;           }  //9  
    if (string == romanNumberOne.repeat(8)){ string = romanNumberTwo + (romanNumberOne.repeat(3));  }  //8
    if (string == romanNumberOne.repeat(7)){ string = romanNumberTwo + (romanNumberOne.repeat(2)); }  //7
    if (string == romanNumberOne.repeat(6)){ string = romanNumberTwo + romanNumberOne;             }  //6
    if (string == romanNumberOne.repeat(5)){ string = romanNumberTwo;                              }  //5
    if (string == romanNumberOne.repeat(4)){ string = romanNumberOne + romanNumberTwo;             }  //4
  return string;
}
   
function convert(num) {
  var thousands;
  var hundres;
  var tens;
  var ones;
  var stringTens      = "";
  var stringOnes      = "";
  var stringHundres   = "";
  var stringThousands = "";
  
  thousands = Math.floor(num / 1000);
  num = num - (thousands*1000);
  
  hundres = Math.floor(num / 100);
  num = num - (hundres*100);
  
  tens = Math.floor(num / 10);
  ones = num - (tens*10);
  
  stringThousands = convertHelper(thousands, "M", "V+\u{035E}", "X+\u{035E}")
  stringHundres = convertHelper(hundres, "C", "D", "M")
  stringTens = convertHelper(tens, "X", "L", "C")
  stringOnes = convertHelper(ones, "I", "V", "X")
    
 return stringThousands + stringHundres + stringTens + stringOnes;
}

convert(5000);
//  IV     IX  XL     XC  CD      CM     
//  1-8    9   10-80  90  100-800 900 
/*
#1  = I
#2  = II
#3  = III
#4  = IV
#5  = V
#6  = VI
#7  = VII
#8  = VIII
#9  = IX
#10 = X
#20 = XX
#30 = XXX
#40 = XL
#50 = L
#60 = LX
#70 = LXX
#80 = LXXX
#90 = XC
#100= C
*/
//Made by Christoffer92.