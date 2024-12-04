let userseq=[];
let gameseq=[];
let btns=["red","yellow","blue","green"];
let h2=document.querySelector("h2");
let started=false;
let level=0;
let max=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("the game is started");
        started=true;
        levelUp();
        
    }
});
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level-${level}`;
    let random=Math.floor(Math.random()*3);
    let btn=btns[random];

    btnFlash(document.querySelector(`.${btn}`));
    gameseq.push(btn);
    console.log(gameseq);

}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    } ,100);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    } ,100);
}

function check(idx){
    
    if(gameseq[idx]==userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelUp(),1000);
            
        }
    }
    else{
        max=Math.max(max,level);
        h2.innerHTML=`Game Over! your score was <b>${level}</b><br><b>highest score was ${max}</b><br>press any key to start`;
        reset();
    }
}
function btn_press(){
    let btn=this;
    userFlash(btn);
    userseq.push(btn.getAttribute("id"));
    check(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btn_press);
}

function reset(){
    
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    document.querySelector("body").classList.add("ending");
    setInterval(()=>{document.querySelector("body").classList.remove("ending")},100);
}
