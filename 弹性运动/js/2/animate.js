Element.prototype.animate = animate;
Element.prototype.getStyle = getStyle;
function animate(json) {
    clearInterval(this.timer);
    var that = this;
    for (var attr in json) {
        this.speed = 0;
        this[attr] = parseFloat(that.getStyle()[attr]);              //获取attr的初值
    }
    this.timer = setInterval(function () {
        for (var attr in json) {
            that.speed += (json[attr] - that[attr]) / 5;
            that.speed *= 0.7;
            that[attr] += that.speed;
            if (Math.abs(that.speed) < 1 && Math.abs(json[attr] - that[attr]) < 1) {
                clearInterval(that.timer);
                that.speed = 0;
                that.style[attr] = json[attr] + "px";
            } else {
                that.style[attr] = that[attr] + "px";
            }
        }
    }, 20);
}
function getStyle() {
    if (this.currentStyle) {
        return this.currentStyle;
    } else {
        return document.defaultView.getComputedStyle(this, null);
    }
}
