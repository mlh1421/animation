if (!window.Element)          //兼容ie7 ie6 ie5
{
    Element = function () { };

    var __createElement = document.createElement;
    document.createElement = function (tagName) {
        var element = __createElement(tagName);
        if (element == null) { return null; }
        for (var key in Element.prototype)
            element[key] = Element.prototype[key];
        return element;
    }

    var __getElementById = document.getElementById;
    document.getElementById = function (id) {
        var element = __getElementById(id);
        if (element == null) { return null; }
        for (var key in Element.prototype)
            element[key] = Element.prototype[key];
        return element;
    }
}
Element.prototype.animate = animate;
Element.prototype.getStyle = getStyle;
function animate(json) {
    clearInterval(this.timer);
    var that = this;
    var flag = true;                                                    //判断停止的条件
    for (var attr in json) {
        this.speed = 0;
        if (attr == "opacity") {
            this[attr] = parseFloat(this.getStyle()[attr]) * 100;              //获取attr的初值
        } else if (attr == "filter") {
            if (this.getStyle()[attr] == "") {
                this[attr] = 100;
            } else {
                this[attr] = parseFloat(this.getStyle()[attr].slice(14, -1));              //获取attr的初值
            }
        } else {
            this[attr] = parseFloat(this.getStyle()[attr]);              //获取attr的初值
        }
    }
    this.timer = setInterval(function () {
        var flag=true;
        for (var attr in json) {
            that.speed += (json[attr] - that[attr]) / 5;
            that.speed *= 0.7;
            that[attr] += that.speed;
            //else {
            if (attr == "opacity") {
                that.style[attr] = that[attr] / 100;
            } else if (attr == "filter") {
                that.style[attr] = "alpha(opacity=" + that[attr] + ")";
            } else {
                that.style[attr] = that[attr] + "px"
            }
            //}
            if (!(Math.abs(that.speed) < 1 && Math.abs(json[attr] - that[attr]) < 1)) {//如果有一项不为真，则继续
                flag = false;
            }
            //}
            if (flag) {         // 所有项都到达目标
                //console.log("定时器已关闭");
                clearInterval(that.timer);
                that.speed = 0;
                if (attr == "opacity") {
                    that.style[attr] = json[attr] / 100;
                } else if (attr == "filter") {
                    that.style[attr] = "alpha(opacity=" + json[attr] + ")";
                } else {
                    that.style[attr] = json[attr] + "px";
                }
            }
        }
    }, 20)
}
function getStyle() {
    if (this.currentStyle) {
        return this.currentStyle;
    } else {
        return document.defaultView.getComputedStyle(this, null);
    }
}
