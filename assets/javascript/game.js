$(document).ready(function() {

    var targetNumber = 0;
    var crystalNumber = [];
    var score = 0;
    var scoreTotal = 0;
    var win = 0;
    var loss = 0;

    function randomNumberGenerate() {

      targetNumber = Math.floor(Math.random() * 102) + 19;
      console.log(targetNumber);
      $(".targetNumberPrint").text(targetNumber);

      for (var i=0; i<4; i++) {
        var randomNumber = Math.floor(Math.random() * 13);
        if (crystalNumber.indexOf(randomNumber) === -1) {
          crystalNumber.push(randomNumber); 
        }
        else {
          i--;
        } 
      }

      console.log(crystalNumber);

      $(".imageIcon-blue").attr("value",crystalNumber[0]);
      $(".imageIcon-red").attr("value",crystalNumber[1]);
      $(".imageIcon-green").attr("value",crystalNumber[2]);
      $(".imageIcon-yellow").attr("value",crystalNumber[3]);

      $(".result").text("");
    };
    
    //var targetNumberPrint = $("<div>");
    //targetNumberPrint.addClass("targetNumberPrint");

    //var crystalIcon1 = $("<img>"); 
    //crystalIcon1.addClass("imageIcon");
    //crystalIcon1.attr("src","assets/images/blue-crystal.png");
    //crystalIcon1.attr("value",crystalNumber[0]);
    //var crystalIcon2 = $("<img>"); 
    //crystalIcon2.addClass("imageIcon");
    //crystalIcon2.attr("src","assets/images/red-crystal.png");
    //crystalIcon2.attr("value",crystalNumber[1]);
    //var crystalIcon3 = $("<img>"); 
    //crystalIcon3.addClass("imageIcon");
    //crystalIcon3.attr("src","assets/images///green-crystal.png");
    //crystalIcon3.attr("value",crystalNumber[2]);
    //var crystalIcon4 = $("<img>"); 
    //crystalIcon4.addClass("imageIcon");
    //crystalIcon4.attr("src","assets/images/yellow-crystal.png");
    //crystalIcon4.attr("value",crystalNumber[3]);

    //var announce = $("<div>");
    //announce.addClass("announce");

    //var winText = $("<div>");
    //winText.addClass("winText");
    //$(".winText").text(win); 
    
    //var lossText = $("<div>");
    //lossText.addClass("lossText");
    //$(".lossText").text(loss);

    //var totalText = $("<div>");
    //totalText.addClass("totalText");
    //$(".totalText").text("Your total score is:");

    //var result = $("<div>");
    //result.addClass("result");

    randomNumberGenerate();

    $(".imageIcon").on("click",function(){
      
      score = $(this).attr("value");

      scoreInt = parseInt(score);

      console.log(score);

      scoreTotal = scoreTotal + scoreInt;
      
      $(".result").text(scoreTotal);

      if (scoreTotal === targetNumber) {
        win ++;
        $(".announce").text("You win!");
        $(".win").text("You win: " + win + " times.");
        randomNumberGenerate();
      }

      else if (scoreTotal >= targetNumber) {
        loss ++;
        $(".announce").text("You loss!");
        $(".loss").text("You loss: " + win + " times.");
        randomNumberGenerate();
      }

    });

  });