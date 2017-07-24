var left=document.getElementsByClassName("left")[0];
var ul=left.getElementsByTagName("ul")[0];
var lis=ul.getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        var p=this.getElementsByTagName("p")[0];
        clearInterval(p.timer);//移入时关闭定时器
        p.style.opacity=100;
    }
    lis[i].onmouseout=function(){
        var p=this.getElementsByTagName("p")[0];
        animate(p,{"opacity":"0"});
    }
}
