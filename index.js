//1st box
var randomNumber1=Math.floor(Math.random()*6)+1;//1-6 random number generated


var randomImgSrc1="Images/"+"dice"+randomNumber1+".png";//Images/dice1.png-Images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc1);


//2nd box

var randomNumber2=Math.floor(Math.random()*6)+1;//1-6 random number generated


var randomImgSrc2="Images/"+"dice"+randomNumber2+".png";//Images/dice1.png-Images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Playe1 wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player2 wins!";
}else{
document.querySelector("h1").innerHTML="Draw!";
}
