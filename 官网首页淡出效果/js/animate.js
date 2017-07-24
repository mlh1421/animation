// Element.prototype.animate=animate;
Element.prototype.getStyle = getStyle;
function animate(obj, json, callback) {
    //var flags=false;
    clearInterval(obj.timer);

    for (var attr in json) {
        //var that = this;
        var icur = 0, speed = 0;
        obj.timer = setInterval(function () {
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(obj.getStyle()[attr]) * 100);
            } else {
                icur = parseInt(obj.getStyle()[attr]);
            }
            speed = (parseInt(json[attr]) - icur) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + icur + speed + ')';
                obj.style.opacity = (icur + speed) / 100;
            } else {
                obj.style[attr] = icur + speed + "px";
            };
            if (icur == parseInt(json[attr])) {
                //flags=true;
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
        }, 20);
    }
}
function getStyle() {
    if (this.currentStyle) {
        return this.currentStyle;
    } else {
        return document.defaultView.getComputedStyle(this, null);
    }
}
