drag({ id:'box1'});
drag({id:"box2"});
function drag(opt) {
    var obj = document.getElementById(opt.id);
    obj.onmousedown = function (e) {
        var e = e || window.event,
            diffX = e.clientX - this.offsetLeft,
            diffY = e.clientY - this.offsetTop;
        var that = this;
        document.onmousemove = function (e) {
            var e = e || window.event,
                left = e.clientX - diffX + "px",
                top = e.clientY - diffY + "px";
            that.style.left = left;
            that.style.top = top;
        }
        document.onmouseup=function(){
            this.onmousemove=null;
        }
        return false;
    }
}