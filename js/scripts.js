// Back End
var moveFirstLetterToEnd = function(str){
  str = str + str[0];
  str = str.substring(1);
  return str;
}

var translateToPigLatin = function (str){
  // var vowels = ["a", "e", "i", "o", "u"];
  // vowels = vowels.concat(vowels.join().toUpperCase().split(","));
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  consonants = consonants.concat(consonants.join().toUpperCase().split(","));
  var firstLetter = str[0];
  var translated = str;
  if (consonants.indexOf(firstLetter)>-1){
    translated = moveFirstLetterToEnd(str);
  }
  translated = translated + "ay";
  return translated;
}
// Front End
$(function(){

});
