// business
  var arrayWords = ["one","two","three","four","five"]
  //time
  //





//user
$(document).ready(function(){
  var num = 0;
  var nextWord = (function(){
    num ++;
    $("#arrayTarget").text(arrayWords[num]);
  })

  $("#arrayTarget").text(arrayWords[0]);
  // nextWord();
  // console.log(nextWord());

    $("form").submit(function(event){
      event.preventDefault();
      var userInput = $("input#playerInput").val();
      if (arrayWords[num] === userInput){
      nextWord();
      $("input#playerInput").val("");
    } else {
      $("input#playerInput").val("");
    }

    // if false reset form
  });
});
