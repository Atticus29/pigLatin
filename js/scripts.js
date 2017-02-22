// Back End
var translateUsingRegex = function(str){
  var regexpWithQu = /(^[bcdfghjklmnprstqvwxyzBCDFGHJKLMNPQRSTVWXYZ]*qu)(\w+)/;
  var regexpOthers = /(^[bcdfghjklmnprstqvwxyzBCDFGHJKLMNPQRSTVWXYZ]*)(\w+)/;
  if (regexpWithQu.test(str)){
    var returnVal = str.replace(regexpWithQu, '$2$1ay');
  }
  else{
    var returnVal = str.replace(regexpOthers,'$2$1ay');
  }
  return returnVal;
}

var translatePhrase = function (phrase){
  var phraseArray = phrase.split(" ");
  var translatedArray = [];
  for (var i =0; i<phraseArray.length; i++){
    translatedArray.push(translateUsingRegex(phraseArray[i]));
  }
  return translatedArray.join(" ");
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
