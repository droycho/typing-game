// business
  var arrayWords = ["one","two","three","four","five","six","seven","eight","nine","ten" ]
  //time
  //








// var timer = function(time){ // timer code line //
//   setTimeout(function(){ alert("Game Over"); }, time) // timer code line //
// }

var timer = function(time){ // timer code line //
  var timeinterval = setInterval(function(){ // timer code line //
    if (time <= 0) { // timer code line //
      $("#timer").text(""); // timer code line //
      alert("Game Over"); // timer code line //
      console.log("we are before clear interval"); // timer code line //
      clearInterval(timeinterval); // timer code line //
    } else { // timer code line //
      $("#timer").text(time); // timer code line //
      time = time - 1; // timer code line //
    } // timer code line //
  } , 1000); // timer code line //
} // timer code line //


//user


$(document).ready(function(){
  $("#playButton").click(function(){ // timer code line //
    timer(10); // timer code line //
  }); // timer code line //

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
