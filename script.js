let userScore=0;//initialyy we set both the score as 0.
let compScore=0;
 //noe accessing the choices.
 let choices=document.querySelectorAll(".choice");
 let msg=document.querySelector("#msg");
 
 const userScoreP=document.querySelector("#user-score");
 
 const compScoreP=document.querySelector("#comp-score");


 const genCompChoice=()=>{
    const options=["rock", "paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);// thid fuction generate random fuction in between 1-3 after clicking the choices and the number will treat as arr index value.
   return options[randIdx];
 };
 const drawGame=()=>{
   msg.innerText="it's draw, Play again";
   msg.style.backgroundColor="Blue";
   
 };

 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
      userScore++;
      userScoreP.innerText=userScore;
      console.log("Congrats!! You win");
    msg.innerText=`you win!! your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
    }else{
      compScore++;
      compScoreP.innerText=compScore;
      msg.innerText=`You lose!! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor="red";
    }
 };
 

  const playGame=(userChoice)=>{
    console.log("userChoice= ", userChoice);
    // Generate the user choice
    const compChoice=genCompChoice();
    console.log("compChoice= ", compChoice);
    if(userChoice===compChoice){
      //draw game
      drawGame();// calling the fucntion
    }else{
      let userWin=true;
      if(userChoice==="rock"){
         //scissors,paper
      userWin=compChoice==="paper" ? false: true;
    }else if(userChoice==="paper"){
      //rock, scissors
       userWin=compChoice==="scissors" ? false:true;
    }else{
         //rock,paper
         userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
    }
  };




 choices.forEach((choice)=>{// basically we can track each choice and after clicking the choice we are adding the event listener to trsck them
    choice.addEventListener("click",()=>{// we can access all the choice div of the choices div
    const userChoice=choice.getAttribute("id");//accessing the each each id of each choice
     playGame(userChoice);
    //console.log("choice was clicked",userChoice);
    });
 });
