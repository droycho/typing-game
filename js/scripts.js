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

  $("#arrayTarget").text(levelArrays[arrayNum][wordNum]); ///initial word.

  var nextWord = (function(){ ///adds 1 to wordNum.
    wordNum ++;
    $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
  });

  var nextArray = (function(){ ///adds 1 to arrayNum.
    arrayNum ++;
    $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
  });

  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#playerInput").val();

    if (levelArrays[arrayNum][wordNum] === userInput){ ///moves to next word in level
    nextWord();
    $("input#playerInput").val("");
    } else {
    $("input#playerInput").val("");
    }

    if (levelArrays[arrayNum][4] === userInput){ ///moves to next array in levelArrays
    wordNum = 0;
    nextArray();
    }

    console.log(wordNum);
    console.log(arrayNum)
  });
});
