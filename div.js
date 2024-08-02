var userscore=0;
var cpuscore=0;
var choice = ["ROCK","PAPER","SCISSORS"];
var i=0;
function next(){
   i=(i+1)%3;
   document.getElementById("userchoice").innerHTML= choice[i];
}
function previous(){
    i=(i+2)%3;
    document.getElementById("userchoice").innerHTML= choice[i];
 }
 function game(){
    let cpuchoice = choice[Math.floor(Math.random()*10)%3];
    let userchoice = choice[i];
    document.getElementById("cpuchoice").innerHTML=cpuchoice;
    if(userchoice==cpuchoice){
       document.getElementById("result").innerHTML="draw";
    }
    else if(userchoice=="ROCK" && cpuchoice=="SCISSORS"||
        userchoice=="PAPER" && cpuchoice=="ROCK"||
        userchoice=="SCISSORS" && cpuchoice=="PAPER"
        ){
          userscore++;
          document.getElementById("userscore").innerHTML= userscore;
           document.getElementById("result").innerHTML="user win";
           if(userscore==10){
            alert("YOU WON THE MATCH");
            location.reload();
        }
        }
        else{
            cpuscore++;
            document.getElementById("cpuscore").innerHTML = cpuscore;
            document.getElementById("result").innerHTML="cpu win";
            if(cpuscore==10){
                alert("YOU lose THE MATCH");
                location.reload();
            }
     }
 }
 