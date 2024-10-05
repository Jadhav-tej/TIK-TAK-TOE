let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turno=true;
let moves=0;

const winP = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]        
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(box.innerHTML===""){
        if(turno){
            box.innerText="O";
            turno=false;
           
        }
        else{
            box.innerText="X";
            turno=true;
            
        }
        moves++;
        box.disabled=true;
        checkwin();
}
});
});
const resetgame=()=>{
    turno=true;
    moves=0;
  btnenb();  
  msgContainer.classList.add("hide");
}
const btndis=()=> //Afte win the game another buttons are disabled
{
    for(let box of boxes){
        box.disabled=true;
    }
}
const btnenb=()=> //Afte win the game another buttons are enabled
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner =(winner)=>{// Display the winner 
    msg.innerText=`Congratulation Winner is ${winner}....!`;
    msgContainer.classList.remove("hide");
    btndis();
};
const nowinner =()=>{// Display the winner 
    msg.innerText="Match is Tie ";
    msgContainer.classList.remove("hide");
    
};


const checkwin = () =>{ //check all the condition 
    let winnerfound=false;
    for(let patterns of winP){
        
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val= boxes[patterns[2]].innerText;


if(pos1val!="" && pos2val!="" && pos3val!="")
{
   
     if(pos1val===pos2val && pos2val===pos3val)
          {
              
             showwinner(pos1val);

             winnerfound=true;
             break;
             
          }
}  
 }
 if(!winnerfound && moves===9){
    nowinner();
 }

};
 newbtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);