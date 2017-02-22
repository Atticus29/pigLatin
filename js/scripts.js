// Back End
var moveFirstLetterToEnd = function(str){
  str = str + str[0];
  str = str.substring(1);
  return str;
}

var checkForQu = function (str){
  if((str[0]=="q" || str[0]=="Q") && str[1]=="u"){
    return true;
  } else{
    return false;
  }
}

var translatePhrase = function (phrase){
  var phraseArray = phrase.split(" ");
  var translatedArray = [];
  for (var i =0; i<phraseArray.length; i++){
    translatedArray.push(translateToPigLatin(phraseArray[i]));
  }
  return translatedArray.join(" ");
}

var translateToPigLatin = function (str){
  // var vowels = ["a", "e", "i", "o", "u"];
  // vowels = vowels.concat(vowels.join().toUpperCase().split(","));
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  consonants = consonants.concat(consonants.join().toUpperCase().split(","));
  var translated = str;
  if(checkForQu(translated)){
    translated = moveFirstLetterToEnd(translated);
    translated = moveFirstLetterToEnd(translated);
  }
  var firstLetter = translated[0];

  while (consonants.indexOf(firstLetter)>-1){
    if(checkForQu(translated)){
      translated = moveFirstLetterToEnd(translated);
      translated = moveFirstLetterToEnd(translated);
    } else{
      translated = moveFirstLetterToEnd(translated);
    }
    firstLetter = translated[0];
    // console.log("new firstLetter is " + firstLetter);
    // console.log(consonants.indexOf(firstLetter));
  }
  translated = translated + "ay";
  return translated;
}
// Front End
$(function(){
  $("#submitForm").submit(function(){
    // console.log("got here");
    $(".hiddenResults").show();
    $(".original").empty();
    $(".translated").empty();
    var usrPhrase = $("#phrase-input").val();
    $(".original").text(usrPhrase);
    $(".translated").text(translatePhrase(usrPhrase));
    event.preventDefault();
    });
});
