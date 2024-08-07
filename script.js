var hole=document.getElementById("hole");
var block=document.getElementById("block");
var character=document.getElementById("character");
var jumping=0;
var counter=0;
var highScore=localStorage.getItem('highScore')||0;

//document.getElementById('highScore').textContent=highScore;

hole.addEventListener('animationiteration',()=>{
    var random=-((Math.random()*300)+150);
    hole.style.top=random+"px";
    counter++;
});

setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    
    if(jumping==0){
        character.style.top=(characterTop+2)+"px";
    }

    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop=-(500-characterTop);

    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over.\n Score: "+(counter-1)+"\nhigh Score: "+highScore);
        if((counter-1)>highScore){
            highScore=counter-1;
            localStorage.setItem('highScore',highScore);
            //document.getElementById('highScore').textContent=highScore;

        }
        //alert("Game over. \n Score: "+(counter-1));
        character.style.top=100+"px";
        counter=0;
    }

},10);
function jump(){
    jumping=1;
    let jumpCount=0;
   var jumpInterval=setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((characterTop>6)&&(jumpCount<20)){
        character.style.top=(characterTop-5)+"px";
    }
    if(jumpCount>20){
        clearInterval(jumpInterval);
        jumping=0;
        jumpCount=0;
    }
    jumpCount++;
   },10);
}
document.addEventListener('keydown', jump);

