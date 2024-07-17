let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice =()=>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

}

const drawGame =()=>{
    msg.innerText = "Game Draws "
    msg.style.backgroundColor = "#141E30"
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Wins! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`
         msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice)=>{
    console.log("user choice was ", userChoice)

    //GENERATE COMPUTER CHOICE//

    const compChoice = genCompChoice();
    console.log("computer choice was ", compChoice)

    if(userChoice === compChoice){
        //draw game//
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false : true;
        }else{
            userWin = compChoice ==="rock"? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

})