const selectClass = function(el){
    return document.querySelector(el);
};

const decRoundResult = function(){
    return `You ${roundWinner ===0 ?`won`:`loss`}!You chose ${
        playerChoice === 0 ? `rock` :
        playerChoice ===1 ?`paper`:`scissors`
    } and the computer chose ${
        computerChoice ===0?`rock`:
        computerChoice===1 ?`paper`:`scissors`
    }.`;
};

const endRound = function(){
    setTimeout(() =>{
        if (playerScore === 3 ){
            gameScreen.classList.add(`hidden`);
            roundResult.classList.add(`hidden`);
            endScreen.classList.remove(`hidden`);
            finalResult.textContent = `Congratulations! You won the game!`;
        } else if (computerScore === 3){
            gameScreen.classList.add(`hidden`);
            roundResult.classList.add(`hidden`);
            endScreen.classList.remove(`hidden`);
            finalResult.textContent = `You lost the game!`;
        } else {
            roundPlayed = false;
            roundResult.classList.add(`hidden`);
        }
        }, 2000);
    };
          
      
const introScreen = selectClass(`#intro_screen`),
  gameScreen = selectClass(`#game_screen`),
  startBtn = selectClass(`.play`),
  roundResult = selectClass(`#round_result`),
  roundResultText = selectClass(`.round_result_text`),
  finalResult = selectClass(`#result`),
  endScreen = selectClass(`#result_screen`),
  playAgain = selectClass(`.play_again`),
  userScoreel = selectClass(`.user`),
  computerScoreel = selectClass(`.computer`);

  let playerScore = 0,
  computerScore = 0,
  playerChoice,
  computerChoice,
  roundPlayed = false,
  roundWinner;


  startBtn.addEventListener(`click`, () => {
    console.log("Play button clicked!");
    introScreen.classList.add(`hidden`);
    console.log("Play button clicked2!");
    gameScreen.classList.remove(`hidden`);
    console.log("Play button clicked3!");
  });
 
//   GAME LOGIC
//   0 = rock, 1 = paper, 2 = scissors
  for (let i = 0; i < 3; i++) {
    selectClass(`.btn-${i}`).addEventListener(`click`, function () {
      if (!roundPlayed) {
        roundResult.classList.remove(`hidden`);
        roundPlayed = true;

        playerChoice = i;
        computerChoice = Math.floor(Math.random() * 3);
        if (
            (playerChoice === 0 && computerChoice === 2) ||
            (playerChoice === 1 && computerChoice === 0) ||
            (playerChoice === 2 && computerChoice === 1)
          ) {
            roundWinner = 0;
            playerScore++;
            roundResultText.textContent = decRoundResult();
            endRound() ;
          } else if (
            (computerChoice === 0 && playerChoice === 2) ||
            (computerChoice === 1 && playerChoice === 0) ||
            (computerChoice === 2 && playerChoice === 1)
          ) {
            roundWinner = 1;
            computerScore++;
            roundResultText.textContent = decRoundResult();
            endRound();
        }else{
        //   } else if (playerChoice === computerChoice) {
            roundResultText.textContent = `It's a draw! Choose again.`;
            roundPlayed = false;
          }
          userScoreel.textContent = playerScore;
          computerScoreel.textContent = computerScore;
        }
      });
    }


    playAgain.addEventListener(`click`, function () {
        playerScore = 0;
        computerScore = 0;
        roundPlayed = false;
        userScoreel.textContent = 0;
        computerScoreel.textContent = 0;
        endScreen.classList.add(`hidden`);
        gameScreen.classList.remove(`hidden`);
      });
      
