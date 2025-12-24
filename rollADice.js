const rollButton=document.getElementById("roll-button");
const resultPara=document.getElementById("result-p");
let number;
rollButton.onclick=function(){
    number=Math.random();
    if(number>0 && number<=1/6){
        resultPara.textContent=`You rolled 1`;
    }
    else if(number>1/6 && number<=2/6){
        resultPara.textContent=`You rolled 2`;
    }
    else if(number>2/6 && number<=3/6){
        resultPara.textContent=`You rolled 3`;
    }
    else if(number>3/6 && number<=4/6){
        resultPara.textContent=`You rolled 4`;
    }
    else if(number>4/6 && number<=5/6){
        resultPara.textContent=`You rolled 5`;
    }
    else{
        resultPara.textContent=`You rolled 6`;
    }
}