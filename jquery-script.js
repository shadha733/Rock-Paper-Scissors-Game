$(document).ready(function() {
    $(".choice").click(function() {
        const playerChoice= $(this).data("choice");
        const choices=["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        let resultText = `You chose ${playerChoice}. Computer chose ${computerChoice}. `;
        if (playerChoice === computerChoice) {
      resultText += "It's a draw!";
    } 
    else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper"))
     {
      resultText += "You win! 🎉";
    } 
    else {
      resultText += "You lose. 😢";
    }

   $("#result")
      .hide()
      .text(resultText)
      .fadeIn(800)
      .css ({
        "font-size": "24px",
        "color": playerChoice === computerChoice ? "blue" : (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper") ? "green" : "red" 
        
      });
      
  });
});