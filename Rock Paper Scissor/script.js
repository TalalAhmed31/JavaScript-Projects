var option = ["Rock", "Paper", "Scissors"]
let userScore = 0;
let compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("computer-score");
var result_div = document.querySelector(".result>p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");

function main(){
    rock_div.addEventListener('click',function(){
        game("Rock");
       })
    
    paper_div.addEventListener('click',function(){
        game("Paper");
       })
    
    scissors_div.addEventListener('click',function(){
        game("Scissors");
       })
}

function computerSelected(){
    var random = Math.random();
    if(random<0.34){
        return option[0];
    }
    else if(random<0.67){
        return option[1];
    }
    else{
        return option[2];
    }
}

function game(userChoice){
    var computerChoice = computerSelected();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(userChoice, computerChoice);
            break;
        case "PaperPaper":
        case"RockRock":
        case"ScissorsScissors":
        draw(userChoice, computerChoice);
        break;
    }
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    let userToSmall = "(user)".fontsize(3).sub();
    let compToSmall = "(comp)".fontsize(3).sub();
    result_div.innerHTML = `${userChoice}${userToSmall} beats ${computerChoice}${compToSmall}. You win! 🔥🔥`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("green-glow");
    setTimeout (() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice){
    compScore++ ;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    let userToSmall = "(user)".fontsize(3).sub();
    let compToSmall = "(comp)".fontsize(3).sub();
    result_div.innerHTML = `${userChoice}${userToSmall} loses to ${computerChoice}${compToSmall}. You Lost...💩💩`;  
}

function draw(userChoice, computerChoice){
    let userToSmall = "(user)".fontsize(3).sub();
    let compToSmall = "(comp)".fontsize(3).sub();
    result_div.innerHTML = `${userChoice}${userToSmall} equals ${computerChoice}${compToSmall}. DRAW😑`;

}


main();