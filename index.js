var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceTmage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1");

image1.setAttribute("src" , randomDiceTmage);

var randomDiceTmage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");

image2.setAttribute("src" , randomDiceTmage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Plyer 1 wins 🚩";
}else if(randomNumber2 >randomNumber1){
    document.querySelector("h1").textContent = "🚩Plyer 2 wins";
}else{
    document.querySelector("h1").textContent = "Draw";
}


//-------------------------------------------------------This is my solution------------------------------------------------------------//

// if(randomNumber1 === 1 ){
//     document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
// }else if(randomNumber1 === 2 ){
//     document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
// }else if(randomNumber1 === 3 ){
//     document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
// }else if(randomNumber1 === 4 ){
//     document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
// }else if(randomNumber1 === 5 ){
//     document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
// }else if(randomNumber1 === 6 ){
//     document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
// }

// if(randomNumber2 === 1 ){
//     document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
// }else if(randomNumber2 === 2 ){
//     document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
// }else if(randomNumber2 === 3 ){
//     document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
// }else if(randomNumber2 === 4 ){
//     document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
// }else if(randomNumber2 === 5 ){
//     document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
// }else if(randomNumber2 === 6 ){
//     document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
// }

