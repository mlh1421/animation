function Drag(id) {
    this.obj = document.getElementById(id);
}
Drag.prototype.init = function () {
    var that = this;
    this.obj.onmousedown = function (e) {
        var e = e || window.event;
        that.aa(e);
        document.onmousemove = function (e) {
            var e = e || window.event;
            that.bb(e);
        }
        document.onmouseup=function(){
            this.onmousemove=null;
        }
        return false;
    }
}
Drag.prototype.aa = function (e) {
    this.obj.diffX=e.clientX-this.obj.offsetLeft;
    this.obj.diffY=e.clientY-this.obj.offsetTop;
}
Drag.prototype.bb = function (e) {
    var left = e.clientX-this.obj.diffX + "px",
        top = e.clientY -this.obj.diffY+ "px";
    this.obj.style.left = left;
    this.obj.style.top = top;
}
var drag1 = new Drag("box1");
drag1.init();
var drag2 = new Drag("box2");
drag2.init();
