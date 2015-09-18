//Bonfire: Convert HTML Entities
function convert(str) {
 //g is the flag for .replace in order to perform a global replacement.
  str = str.replace(/&/g, '&amp;')   //replaces all & with the HTML Entie: &amp;
  str = str.replace(/</g, '&lt;')    //replaces all < with the HTML Entie: &lt;
  str = str.replace(/>/g, '&gt;')    //replaces all > with the HTML Entie: &gt;
  str = str.replace(/"/g, '&quot;')  //replaces all " with the HTML Entie: &quot;
  str = str.replace(/'/g, '&apos;')  //replaces all ' with the HTML Entie: &apos;
  return str; //instead of the code above the return could been: str.replace(/&/g, '&amp;').replace(/</g, '&lt;'). etc...
}
convert('Dolce & Gabbana');
//Made by: Christoffer92