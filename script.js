let containerElm=document.querySelector(".container");
let body=document.querySelector("body");
let buttonsElm=document.querySelector(".buttons");
let btnElm=document.querySelector(".btn");
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let timer=document.getElementById("time");
let btnStart=document.getElementById("start");
let btnPause= document.getElementById("pause");
let title = document.querySelector("title");
let time=25;
let time2=5;
let time3=15;
let s=0;
let countdownInterval;

//start oncilik
btnStart.addEventListener("click",() => {
        if (!countdownInterval) {
            countdownInterval = setInterval(() => {
                timer.innerText = `${addNullNumber(time)}:${addNullNumber(s)}`;
                title.innerText = `${addNullNumber(time)}:${addNullNumber(s)}`;

                if (s === 0) {
                    if (time === 0) {
                        clearInterval(countdownInterval);
                        countdownInterval = null;
                        return;
                    }
                    s = 59;
                    time--;
                } else {
                    s--;
                }
            }, 1000);
        }
        btnPause.style.display = "block";
        btnStart.style.display = "none";
        btnStart();
    });
btn1.addEventListener("click",()=>{
    
    containerElm.style.background="#C15C5C";
    body.style.background=" #BA4949";
    btn2.style.background="#A44E4E";
    time=25;
    timer.innerText="25:00";
    btn2.style.background="none";
    btn3.style.background="none";
    s=0;

});

btn2.addEventListener("click",()=>{
    containerElm.style.background="#4C9196";
    body.style.background="#38858A";
    btn2.style.background="#417B80";
    time=5;
    timer.innerText="05:00";
    btn3.style.background="none";
    s=0;
    btnStart();

//     btnPause.style.display = "block";
//    btnStart.style.display = "none";
//    startBtn();
});
btn3.addEventListener("click",()=> {
    containerElm.style.background="#4D7FA2";
    body.style.background="#397097";
    btn3.style.background="#426C8A";
    time=15;
    timer.innerText="15:00";
    btn2.style.background="none";
    s=0;
    btnStart();
});


btnPause.addEventListener("click", () => {
    btnStart.style.display = "block";
    btnPause.style.display = "none";
    pauseBtn();
    // clickBtnSound.play();

    // audio = new Audio("./piano.mp3");
    // audio.pause();
});
const pauseBtn = () => {
	clearInterval(countdownInterval);
	countdownInterval = null;
};
//addNullNumber
const addNullNumber = (num) => (num < 10 ? "0" + num : num);
// const resetTimer = (str) => {
// 	clearInterval(countdownInterval);
// 	s = 0;
// 	timer.innerText = `${addNullNumber(time)}:${addNullNumber(s)}`;
// 	title.innerText = `${addNullNumber(time)}:${addNullNumber(s)} -${str}`;
// 	countdownInterval = null;
// };

