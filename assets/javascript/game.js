// 1. Make sure Javascript and jQuery won't be run until page load is complete.

$(document).ready(function() {

    // 2. Create variables for numbers we need. 

    var targetNumber = 0;
    var numberArry = [1 ,2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var crystalNumber = [];
    var score = 0;
    var scoreTotal = 0;
    var win = 0;
    var loss = 0;


    // 3. Create function for random target number and icon values generation. Meanwhile, load the random numbers to the image icon.


    function shuffle (array) {
      for (var j,x, i=array.length; i; j=parseInt(Math.random()*i), x = array[--i], array[i] = array[j], array[j] = x);
    }

    function randomNumberGenerate() {

      scoreTotal = 0;

      targetNumber = Math.floor(Math.random() * 102) + 19;
      console.log(targetNumber);
      $(".targetNumberPrint").text(targetNumber);

      crystalNumber = [];
      shuffle(numberArry);
      console.log(numberArry);

      for (var i=0; i<4; i++) {
        crystalNumber.push(numberArry[i]); 
      }

      numberArry[Math.floor(Math.random() * 11)]


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

    // 4. Run the random number function.

    randomNumberGenerate();

    // 5. When users click the icon, browser returns value as score. // 6. scores will add up as total scores.
    // 7. If total score meet target number, users win +1 and reload random number and values.
    // 8. If total score is over target number, users loss +1 and reload random number and values.

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