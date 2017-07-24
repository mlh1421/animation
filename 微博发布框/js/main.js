
//publish.txar.onfocus();
//publish.onfocus.call(this.txar);
//publish.init();
//publish.init=Publish.prototype.init;
function Publish() {
    this.p = document.getElementById("p");
    this.txar = document.getElementById("txar");
}
Publish.prototype = {

    init: function () {
        //alert("aa");
        var This = this;
        this.txar.onfocus = function () {
            This.aa();
        }
        this.txar.onblur = function () {
            This.bb();
        }
    }
}
var publish = new Publish();
publish.init();
Publish.prototype.aa = function () {
    if (this.txar.value == "") {
        this.p.innerHTML = "打击虚假消息，建设文明微博，还可以输入<span id='sp'>140</span>字";
    }
}
Publish.prototype.bb = function () {
    if (this.txar.value == "") {
        this.p.innerHTML = "《新浪微博社区公约(征求意见稿)》意见征求";
    }
}
//    if(ie){
//        txar.onpropertychange=change;
//    }else{
//        txar.oninput=change;
//    }
//    function change(){
//        var sp=document.getElementById("sp");
//        if(this.value.length<=140&&this.value.length>0){
//            sp.innerHTML=140-this.value.length;
//            btn.style.backgroundColor="green";
//            btn.style.color="white";
//        }else if(this.value.length>140){
//            sp.style.color="red";
//            btn.style.backgroundColor="yellow";
//            btn.style.color="green";
//        }else{
//            btn.style.backgroundColor="";
//            btn.style.color="";
//        }
//    }
//    btn.onclick=function(){
//        if(txar.value.length>0&&txar.value.length<=140){
//            alert("发布成功");
//        }else{
//            txar.twinkle=twinkle;
//            txar.twinkle();
//        }
//    }
//    function twinkle(){
//        var i=1;
//        var that=this;
//        var timer=setInterval(function () {
//            i++;
//            if(i==5){
//                clearInterval(timer);
//            }
//            if(i%2==0){
//                that.style.backgroundColor="red";
//            }else{
//                that.style.backgroundColor="white";
//            }
//        },100);
//    }
//
//
