function Drag(id, fn1, fn2) {
    this.obj = document.getElementById(id);
    this.fn1 = fn1 || function () { };
    this.fn2 = fn2 || function () { };
}
Drag.prototype = {
    init: function () {
        var that = this;
        this.obj.onmousedown = function (e) {
            var e = e || window.event;
            that.fndown(e);
            that.fn1();
            document.onmousemove = function (e) {
                var e = e || window.event;
                that.fnmove(e);
                that.fn2();
            }
            document.onmouseup = function () {
                this.onmousemove = null;
            }
            return false;
        }
    },
    fndown: function (e) {
        this.obj.diffX = e.clientX - this.obj.offsetLeft;
        this.obj.diffY = e.clientY - this.obj.offsetTop;
    },
    fnmove: function (e) {
        var left = e.clientX - this.obj.diffX + "px",
            top = e.clientY - this.obj.diffY + "px";
        this.obj.style.left = left;
        this.obj.style.top = top;
    }
}
var drag1 = new Drag("box1", function () {
    document.title = "jkalsd";
}, function () {
    console.log("sjdfh");
});
drag1.init();
var drag2 = new Drag("box2");
drag2.init();
