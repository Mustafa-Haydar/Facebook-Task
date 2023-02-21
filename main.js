function formValidate(){
    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if(Email.length < 15){

        text = "please enter valid User name"
        error.innerHTML = text;
        return false;
    }

    else if(password.length < 8){

        text = "please enter valid password"
        error.innerHTML = text;
        return false;
    }

    // else {
    //     alert("done");
    //     return true;  //here you have to place the link of html
    // }
}
//STOP WATCH
var min = 00;
var second = 00;
var tens = 00;
var OutputMin = document.getElementById('min');
var OutputSecond = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});
buttonReset.addEventListener('click', () =>{
    clearInterval(Interval);
    min = "00";
    second = "00";
    tens = "00";
    OutputMin.innerHTML = min;
    OutputSecond.innerHTML = second;
    OutputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        second++;
        OutputSecond.innerHTML = "0" + second;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if(second > 9){
        OutputSecond.innerHTML = second;
    }

    if(second > 59){
        min++;
        OutputMin.innerHTML = "0" + min;
        second = 0;
        OutputSecond.innerHTML = "0" + second;
    }

    if(min > 9){
        OutputMin.innerHTML = min;
    }
}

var a;
function show_hide(){
    if (a==1){
        document.getElementById("btn-start").style.display="inline";
        document.getElementById("btn-stop").style.display="inline";
        document.getElementById("btn-reset").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("btn-start").style.display="none";
        document.getElementById("btn-stop").style.display="none";
        document.getElementById("btn-reset").style.display="none";
        return a=1;
    }
}
// my clock
function showtime(){

    var date = new Date();
    var houress = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    if (houress > 12){
        houress = houress - 12;
    }

    if (houress == 00){
        houress = 12;
    }

    houress = (houress < 10) ? "0" + houress : houress;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;



    var Time = houress + ":" + minutes + ":" + seconds;
    document.getElementById("myClockDisplay").innerHTML = Time;
    setTimeout(showtime, 1000);

}
showtime();
