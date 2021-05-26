const score = document.querySelector("#scoreText");
const blocks = document.querySelectorAll(".block");
const playBtn = document.getElementById("play");
const stopBtn = document.querySelector(".stop");
const timer = document.getElementById("timer");
let currentTime = 0;
let startGame;
let moles;
let timerId = null;
let points = 0;
console.log(playBtn)

//set the play button
playBtn.addEventListener('click', () => {
    playBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    let block;
    let points = 0;
    startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 12);
    block = blocks[arrayNo];

    //add an image 
    let image = document.createElement("img");
    image.setAttribute("src", "./img/mole.png");
    image.setAttribute("class", "mole2");
    let moles = block.appendChild(image);
    moles;

    //increase the number of points as the mole is been hit
    moles.addEventListener("click", () => {
        document.getElementById('scoreText').innerHTML = points++;
    });

    //remove the mole from the hole after each hit
    setTimeout(() => {
            block.removeChild(image);
        }, 1300);
    }, 1400);

    //set the stop button
    stopBtn.addEventListener('click', function () {
    clearInterval(startGame);
    document.getElementById('scoreText').innerHTML = 0;
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    });

    function moveMole(){
        timerId = setInterval(arrayNo, 500);
    }
    moveMole()
    function countDown(){
        timer.textContent = currentTime;
        if(currentTime==0){
            clearInterval(timer)
            clearInterval(timerId)
            alert('Game Over! Your final score is')
        }
    }
     setTimeout(countDown, 2000);
})

