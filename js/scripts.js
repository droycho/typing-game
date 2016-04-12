// business
var level1 = ["one","two","three","four","five"];
var level2 = ["butter","cable","jingle","happy","water"];
var level3 = ["beautiful","gasoline","potato","yesterday","magazine"];
var level4 = ["photography","questionable","fundamental","caterpillar","alligator"];
var levelArrays = [level1,level2,level3,level4];
//time

var timer = function(time){
  var timeInterval = setInterval(function(){
    if (time <= 0) {
      $("#timer").text("");
      alert("Game Over");
      console.log("we are before clear interval");
      clearInterval(timeInterval);
    } else {
      $("#timer").text(time);
      time = time - 1;
    }
  } , 1000);
}




// user logic


$(document).ready(function(){
// timer click function

    var arrayNum = 0;

    var wordRandomize = function(){
      return Math.floor((Math.random() * levelArrays[arrayNum].length));
    };

    var wordNum = wordRandomize(); // randomize the word
    var wordCount =0;

    $("#playButton").click(function(){
      timer(30);


    $("#arrayTarget").text(levelArrays[arrayNum][wordNum]); ///initial word.

    var nextWord = (function(){ ///adds 1 to wordNum.
       wordNum = wordRandomize();

       wordCount ++;
       console.log(wordCount);
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

      if (wordCount === 5){ ///moves to next array in levelArrays // we changed it in a new condition
      wordCount= 0; 
      nextArray();
      }

      // console.log(wordNum);
      // console.log(arrayNum)

    });
  });
});
