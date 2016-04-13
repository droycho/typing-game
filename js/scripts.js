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
//time
var wordCount =0;
var newTimer =0;
var timer = function(time){
  var timeInterval = setInterval(function(){
    if (time <= 0 ) {
      $("#timer").text("");
      $("#gameContent").hide(1000);
      $("#gameOver").show(1100);
      clearInterval(timeInterval);
    } else if (newTimer === 5) {
      newTimer =0;
      clearInterval(timeInterval);

    } else {
      $("#timer").text(time);
      time = time - 1;
    }
  } , 1000);
}

//score system
var score = 0;

// user logic
$(document).ready(function(){

    var arrayNum = 0;
    $("#score").text(score)
    $("#timer").text(4)

  var wordRandomize = function(){
    return Math.floor((Math.random() * levelArrays[arrayNum].length));
  };

  var showLevel = (function(){
    $("#level").text(levelNames[arrayNum])
  })

  showLevel();

    var wordNum = wordRandomize(); // randomize the word
    var wordCount = 0;

  $("#playButton").click(function(){
    timer(4);
    $("#playButton").hide(500);
    $("#startOverButton").show(1000);
    $("#arrayTarget").text(levelArrays[arrayNum][wordNum]); ///initial word.

    var nextWord = (function(){ ///adds 1 to wordNum.

      levelArrays[arrayNum].splice(wordNum,1);
      wordNum = wordRandomize();
      wordCount ++;
      newTimer ++;

      $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
    });

    var nextArray = (function(){ ///adds 1 to arrayNum.
      arrayNum ++;
      $("#arrayTarget").text(levelArrays[arrayNum][wordNum]);
    });

    $("form").submit(function(event){
      event.preventDefault();

      var userInput = $("input#playerInput").val();

      //adds and subtracts to score.
      if (levelArrays[arrayNum][wordNum] === userInput){
       score += parseInt(levelArrays[arrayNum][wordNum].length);
       $("#score").text(score);
     } else if (levelArrays[arrayNum][wordNum] !== userInput) {
       score -= parseInt(levelArrays[arrayNum][wordNum].length);
       $("#score").text(score);
      }

      console.log(userInput)
      console.log(score)

      if (levelArrays[arrayNum][wordNum] === userInput){ ///moves to next word in level
        nextWord();
        $("input#playerInput").val("");
        } else {
        $("input#playerInput").val("");
      }

      if (wordCount === 5){ ///moves to next array in levelArrays // we changed it in a new condition
        timer(30);
        wordCount= 0;
        nextArray();
      }

      showLevel();

    });
  });
});
