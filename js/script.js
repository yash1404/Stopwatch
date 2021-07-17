var hours=0;
var mintue=0;
var second=0;
var count=0;

var timer=false;

const start=()=>{
timer=true;
mainfunction();
}
const stop=()=>{
  timer=false;
}

const reset=()=>{
  timer=false;

  hours=0;
  mintue=0;
  second=0;
  count=0;

document.getElementById("hr").innerHTML="00"
document.getElementById("min").innerHTML="00"
document.getElementById("sec").innerHTML="00"
document.getElementById("count").innerHTML="00"



}
const mainfunction=()=>{
if(timer==true){
count=count+1;

if(count==100){
  second=second+1;
  count=0;


}
if(second==60){
  mintue=mintue+1;
  second=0;
}
if(mintue==60){
  hours=hours+1;
  second=0;
  mintue=0;
}
var hrstring=hours;
var minstring=mintue;
var secstring=second;
var countstring=count;

if(hours<10){
  hrstring="0"+ hrstring;
}
if(mintue<10){
  minstring="0"+ minstring;
}
if(second<10){
  secstring="0"+ secstring;
}
if(count<10){
  countstring="0"+ countstring;
}


document.getElementById("count").innerHTML=countstring;
document.getElementById("hr").innerHTML=hrstring;
document.getElementById("min").innerHTML=minstring;
document.getElementById("sec").innerHTML=secstring;
setTimeout("mainfunction()", 10);
}
}
