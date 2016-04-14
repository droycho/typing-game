// business
var level1 = ["cuff", "dog", "coat", "cash", "cake", "dough", "duck", "dodge", "check", "phone", "freak", "fridge", "gauge", "ghost", "glove", "gown", "hunt", "hive", "hose", "lick", "list", "knight", "lawn", "neck", "nest", "make", "rake", "said", "rot", "rage"];
var level2 = ["butter","cable","jingle","happy","water", "acquired", "again", "alleged", "billion", "bible", "danger", "discuss", "forceps", "photo", "police", "lumber", "kitten", "cycle", "daring", "evil", "enter", "teacher", "purple", "yellow", "gallop", "zebra", "narrow", "dinner", "little", "drama"];
var level3 = ["beautiful","gasoline","potato","yesterday","magazine", "artfully", "decided", "however", "journalist", "knowingly", "syllable", "follower", "evergreen", "opening", "elephant", "understand", "finishing", "exercise", "lemonade", "hibernate", "customer", "envelope", "forgetful", "energy", "hamburger", "protection", "confusion", "collection", "condition", "migration"];
var level4 = ["photography","questionable","fundamental","caterpillar","alligator", "numerator", "ordinary", "photography", "delightfully", "questionable", "evaporate", "responsible", "fundamental", "scientific", "geography", "territory", "helicopter", "ukulele", "invisible", "variation", "jubilation", "watermelon", "literature", "minority", "zoology", "altogether", "misunderstand", "dictionary", "underwater", "motorcycle"];
var level5 = ["hippopotamus", "university", "abbreviation", "acceleration", "alphabetical", "planetarium", "organization", "congratulations", "mathematical", "multiplication", "imagination", "vegetarian", "refrigerator", "veterinarian", "cafeteria", "geometrical", "auditorium", "recommendation", "incriminating", "reconciliation", "denominator", "irresistable", "reconsideration", "verification", "vocabulary", "elementary", "respiratory", "rationality", "necessarily", "reciprocity"]
var level6 = ["authoritarian", "availability", "barotraumatical", "biogeographic", "characteristically", "circumnavigation", "dermatological", "differentiation", "disambiguation", "disappreciated", "electrification", "etymological", "experimentally", "familiarity", "galvanization", "icthyological", "incomprehensible", "indistinguishable", "individualistic", "insubordination", "irritability", "naturalization", "peculiarity", "perpendicularly", "prestidigitation", "serendipitously", "sesquicentennial", "solidification", "unexceptionable", "verisimilitude"]
var level7 = ["anachronistically", "artificiality", "autobiographical", "conceptualization", "contradictoriously", "decriminalization", "denominationally", "deuterocanonical", "disproportionality", "editorializing", "encyclopediacal", "heterogeneity", "hyaloserositis", "infinitesimally", "intercolonization", "interpenetratingly", "intersectionalism", "irrefutability", "jurisprudentially", "megalomaniacal", "metapragmatically", "multijurisdictional", "necrobestiality", "oversimplification", "proletarianism", "unemotionality", "uncommunicativeness", "subfunctionalization", "semiquantitatively", "sentimentalization"]
var levelArrays = [level1,level2,level3,level4,level5,level6,level7];
var levelNames = ["level 1","level 2","level 3","level 4","level 5","level 6","level 7"]

//music global variables
var audio = new Audio('sound/loop.wav');
  audio.volume = 0.3;
var fail = new Audio('sound/explosion.wav');
  fail.volume = 0.3;
var coin = new Audio('sound/coin.wav');
  coin.volume = 0.3;
var levelup = new Audio('sound/levelclear.wav');
  levelup.volume = 0.3;
var endsong = new Audio('sound/endsong.mp3');
  endsong.volume = 0.3;
var gong = new Audio('sound/gong.mp3');
  gong.volume = 0.3;
var victory = new Audio('sound/victory.mp3');
  victory.volume = 0.3;
var start = new Audio('sound/start.wav');
  start.volume = 0.3;
var mamamia = new Audio('sound/mamamia.wav');
  mamamia.volume = 0.3;
var hoohoo = new Audio('sound/hoohoo.wav');
  hoohoo.volume = 0.3;
//time
var wordCount = 0;
var arrayNum = 0;
var newTimer = 0;
var mode = "standardMode";
var timer = function(time){
var timeInterval = setInterval(function(){

  if (time >= 300){
      audio.playbackRate = 1;
    }
    else if (time <= 250 && time >= 200){
        audio.playbackRate = 1.05;
      }
      else if (time <= 200 && time >= 150){
          audio.playbackRate = 1.15;
        }
        else if (time <= 150 && time >= 100){
            audio.playbackRate = 1.25;
          }
          else if (time <= 100 && time >= 50){
              audio.playbackRate = 1.35;
            }
            else if (time <= 50 && time >= 0){
                audio.playbackRate = 1.45;
              }

    // background change on timer
    if (time < 300 && time > 250){
      $("body").removeClass();
      $("body").addClass("bgChange");
    } else if (time < 250 && time > 200){
      $("body").removeClass();
      $("body").addClass("bgChange2");
    } else if (time < 200 && time > 150){
      $("body").removeClass();
      $("body").addClass("bgChange3");
    } else if (time < 150 && time > 100){
      $("body").removeClass();
      $("body").addClass("bgChange4");
    } else if (time < 100 && time > 50){
      $("body").removeClass();
      $("body").addClass("bgChange5");
    } else if (time < 50 && time > 0){
      $("body").removeClass();
      $("body").addClass("bgChange6");
    }

    if (time <= 0) {
      $("#timer").text("");
      $("#gameContent").hide();
      $("#gameOver").show().addClass("slideUp");
        audio.pause();
        gong.play();
        endsong.play();
      clearInterval(timeInterval);
    } else if (newTimer === 5) {
      newTimer = 0;
      clearInterval(timeInterval);
    } else if (newTimer === 1 && mode === "infinityMode") {
      newTimer = 0;
      clearInterval(timeInterval);
    } else {
      $("#timer").text(Math.ceil(time / 10));
      time = time - 1;
    }
  }, 100);
  }

//score system
var score = 0;

// user logic
$(document).ready(function(){
  var score = 0
  var wordCount = 0;

  $("#score").text(score)
  $("#timer").text(30)

  var wordRandomize = function(){
    return Math.floor((Math.random() * levelArrays[arrayNum].length));
  };

  var wordNum = wordRandomize(); // randomize the word

  var showLevel = function(){
    if (mode != "infinityMode"){
      $("#level").text(levelNames[arrayNum])
    } else if (mode === "infinityMode") {
      $("#level").text("Infinity Mode");
    }
  };

  showLevel(); //show initial Level

  $("#playButton").click(function(){
    $("#playerInput").focus();
    timer(300);
    $("#playButton").hide(500);
    $("#startOverButton").show(1000);
    $("#arrayTarget").text(levelArrays[arrayNum][wordNum]); ///initial word.

    audio.loop = true;
    audio.play();
    // start.play();

    var nextWord = (function(){ ///adds 1 to wordNum.
      levelArrays[arrayNum].splice(wordNum,1);
      wordNum = wordRandomize();
      wordCount ++;
      newTimer ++;
      console.log(level7);


      if (levelArrays[arrayNum].length === 0) {
        $("#gameContent").hide();
        $("#victory").show().addClass("slideUp");
        audio.pause();
        gong.play();
        victory.play();
      } else if (wordCount === 5 && arrayNum === levelArrays.length - 1 || mode === "infinityMode") {
        mode = "infinityMode";
        $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
        timer(100);
      }

      $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
    });

    var nextArray = (function(){ ///adds 1 to arrayNum.
      arrayNum ++;
      $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
        levelup.play();
        // hoohoo.play();
    });

    $("form").submit(function(event){

      event.preventDefault();

      var userInput = $("input#playerInput").val();
      //adds and subtracts to score.
      if (levelArrays[arrayNum][wordNum] === userInput){
       score += parseInt(levelArrays[arrayNum][wordNum].length);
       $(".score").text(score);
       coin.play();
     } else if (levelArrays[arrayNum][wordNum] !== userInput) {
       score -= parseInt(levelArrays[arrayNum][wordNum].length);
       $(".score").text(score);
       fail.play();
      //  mamamia.play();
      }

      $("#computerOutput").click(function(){
        score -= 1;
        $(".score").text(score);
      })

      if (levelArrays[arrayNum][wordNum] === userInput){ ///moves to next word in level
        nextWord();
        }
      $("input#playerInput").val("");

      if (wordCount === 5 && mode === "standardMode"){ //moves to next array in levelArrays // we changed it in a new condition
        timer(300);
        wordCount= 0;
        nextArray();
        $("#LevelUp").text(levelNames[arrayNum])
      }

      showLevel();

    });
  });
});
