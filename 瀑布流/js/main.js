            var s=1;
window.onscroll=function(){
    var box=document.getElementById("box");
    var uls=box.getElementsByTagName("ul");
    var clientY=document.documentElement.clientHeight;
    var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
    for(var i=0;i<uls.length;i++){
        var lis=uls[i].getElementsByTagName("li");
        var lastli=lis[lis.length-1];
        if(getPosition(lastli)<(clientY+scrollY)){
            var li=document.createElement("li");
            var img=document.createElement("img");
            img.src="images/"+s+".jpg";
            s++;
            if(s==9){
                s=1;
            }
            li.appendChild(img);
            uls[i].appendChild(li);
        }
    }
}
