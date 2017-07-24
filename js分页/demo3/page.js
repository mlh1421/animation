page({
    id:'page',
    nowNum:2,
    allNum:30
});
function page(opt) {
    var obj=document.getElementById(opt.id),
    allNum=opt.allNum,
    nowNum=opt.nowNum;
    if(nowNum>1){           //添加上一页
        var a=document.createElement("a");
        a.href='#'+(nowNum-1);
        a.innerHTML="上一页";
        obj.appendChild(a);
    }
    if(nowNum>3&&allNum>6){
        var a=document.createElement("a");
        a.href='#'+(1);
        a.innerHTML="首页";
        obj.appendChild(a);
    }
    if(allNum<6){
        for(var i=0;i<allNum;i++){
            var a=document.createElement("a");
            if(i+1==nowNum){
                a.innerHTML=i+1;
            }else{
                a.innerHTML='['+(i+1)+']';
            }
            a.href='#'+(i+1);
            obj.appendChild(a);
        }
    }else {
        if(nowNum<3){
            for(var i=0;i<5;i++){
                var a=document.createElement("a");
                a.href='#'+(i+1);
                if (i+1==nowNum) {
                    a.innerHTML=i+1;
                }else {
                    a.innerHTML='['+(i+1)+']';
                }
                obj.appendChild(a);
            }
        }else if (allNum-nowNum<3) {
            for(var i=0;i<5;i++){
                var a=document.createElement("a");
                a.href='#'+(i+1);
                if (allNum+i-4==nowNum) {
                    a.innerHTML=allNum+i-4;
                }else {
                    a.innerHTML='['+(allNum+i-4)+']';
                }
                obj.appendChild(a);
            }
        }else{
            for(var i=0;i<5;i++){
                var a=document.createElement("a");
                a.href='#'+(nowNum+i-2);
                if (i==2) {
                    a.innerHTML=nowNum;
                }else {
                    a.innerHTML='['+(nowNum+i-2)+']';
                }
                obj.appendChild(a);
            }
        }
    }
    if(allNum>6&&nowNum<allNum-2){
        var a=document.createElement("a");
        a.href="#"+(allNum);
        a.innerHTML="尾页";
        obj.appendChild(a);
    }
    if(nowNum<allNum){
        var a=document.createElement("a");
        a.href="#"+(nowNum+1);
        a.innerHTML="下一页";
        obj.appendChild(a);
    }
    var As=document.getElementsByTagName('a');
    for(var i=0;i<As.length;i++){
        As[i].onclick=function() {
            href=this.getAttribute('href');
            nowNum=parseInt(href.slice(1));
            obj.innerHTML='';
            // alert(nowNum);
            page({
                id:'page',
                nowNum:nowNum,
                allNum:allNum
            });
        }
    }

}
