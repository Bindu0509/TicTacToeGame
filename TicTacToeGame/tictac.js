let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbutton");
let msgcontainer =document.querySelector(".msg-container");
let newgamebutton=document.querySelector(".startbutton");
let winnername=document.querySelector("#Winnername");


let turnOfO=true;
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turnOfO=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnOfO){
            box.innerText="O";
            turnOfO=false;
        }
        else{
            box.innerText="X";
            turnOfO=true;
        }
        box.disabled=true; 
        checkWinner();      
    })    
});
const checkWinner=()=>{
    for (let pattern of winningPattern){
        let value1=boxes[pattern[0]].innerText;
        let value2=boxes[pattern[1]].innerText;
        let value3=boxes[pattern[2]].innerText
    if (value1 !="" && value2 !=""&& value3 !=""){
        if (value1===value2 && value2===value3){
            showWinner(value1);
        }
    }
    }

}
const showWinner=(winner)=>{
    winnername.innerText = `${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

};
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText=""; 

    }
};
newgamebutton.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);