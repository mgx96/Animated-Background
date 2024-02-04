var topLine = document.querySelector(".top");
var midLine = document.querySelector(".middle");
var botLine = document.querySelector(".bottom");

document.querySelector('.navMenu').addEventListener('click', function(){
    topLine.classList.add('active');
    console.log("Clicked!");
});