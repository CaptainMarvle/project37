class Quiz {

  constructor(){}

    getState(){

      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function(data){
       gameState = data.val();
      }) 

    }

    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    async start(){
       if(gameState === 0){
         contestant = new Contestant(); 
         var contestantCountRef = await database.ref('contestantCount').once("value");
         if(contestantCountRef.exists()){
           contestantCount = contestantCountRef.val();
           contestant.getCount();              
         }

           question = new Question()
           question.display();

       }
    }

    play(){
      question.hide();
      background("yellow");
      fill("black");
      textSize(30);
      text("Result of the Quize", 340, 50);
      text("-------------------", 320, 65);
      Contestant.getPleyarInfo();
      if(allContestants !== undefined){
          //debugger;
          var display_Answers = 230;
          fill("Blue");
          textSize(20);
          text(" NOTE: Contestants who answered correct are hightlighted in green color", 130, 230);

          for(var plr in allContestants){
              //debugger;
              var correctAns = "3";
              if(correctAns === allContestants [plr].answer)
              fill("Green")
              else
              fill("red");

              display_Answers+=30;
              textSize(20);
              text(allContestants[plr].name + ": " + allContestants[plr].amswer, 250, display_Answers)
          }
      }
    }


  }


