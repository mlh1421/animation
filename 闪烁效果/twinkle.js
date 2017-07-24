function twinkle(){
    var i=1,
        that=this,
        timer=setInterval(function () {
            i++;
            if(i==5){
                clearInterval(timer);
            }
            if(i%2==0){
                that.style.backgroundColor="red";
            }else{
                that.style.backgroundColor="white";
            }
        },100);
}
