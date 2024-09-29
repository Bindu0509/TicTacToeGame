let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#userscore");
const comScore=document.querySelector("#computerscore");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];

}

const drawGame=()=>{ 
    msg.innerText="Game was Draw play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        msg.textContent=`You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
        userScore.innerText=userscore;
    }else{
        compscore++;
        msg.textContent=`You Lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="Red";
        comScore.innerText=compscore;
        
    }
}

const playGame=(userChoice)=>{
    
    const compChoice=genCompChoice();
    

    if (userChoice===compChoice){
         drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors paper
           userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
           userWin= compChoice==="rock"? false:true;

        }
        showWinner(userWin,userChoice,compChoice);
    }



};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});