var Publish={
    p:document.getElementById("p"),
    ie:!-[1,],
    btn:document.getElementById("btn"),
}
//Publish.onfocus.call(Publish.txar);
//Publish.onblur.call(Publish.txar);
txar:document.getElementById("txar"),
    txar.prototype={
        onfocus:function(){
            if(this.value==""){
                p.innerHTML="打击虚假消息，建设文明微博，还可以输入<span id='sp'>140</span>字";
            }
        },
        onblur:function(){
            if(this.value==""){
                p.innerHTML="《新浪微博社区公约(征求意见稿)》意见征求";
            }
        }
    }
