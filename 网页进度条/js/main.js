var box=document.getElementById("box");
var span=box.getElementsByTagName("span")[0];
var p=box.getElementsByTagName("p")[0];
var i=1;var timer=null;
timer= setInterval(function(){
    if(i==100){
        clearInterval(timer);
    }
    p.innerHTML=i+"%";
    span.innerHTML=i+"%";
    span.style.clip="rect(0,"+2*i+"px,40px,0)";
    i++;
},30);
