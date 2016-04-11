// business
var level1 = ["one","two","three","four","five"];
var level2 = ["butter","cable","jingle","happy","water"];
var level3 = ["beautiful","gasoline","potato","yesterday","magazine"];
var level4 = ["photography","questionable","fundamental","caterpillar","alligator"];
var levelArrays = [level1,level2,level3,level4];
//time







//user
$(document).ready(function(){

  var arrayNum = 0;
  var wordNum = 0;

  var nextWord = (function(){ ///switches to next word in the array that it's currently in.
    wordNum ++;
  $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
  });

  var nextArray = (function(){ ///switches to next array in levelArrays.
    arrayNum ++;
  $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
  });

  $("#arrayTarget").text(levelArrays[0][0]); ///initial word.

  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#playerInput").val();
    if (levelArrays[arrayNum][wordNum] === userInput){
    nextWord();
    $("input#playerInput").val("");
    } else {
    $("input#playerInput").val("");
    }
  });
});
