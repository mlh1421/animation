Element.prototype.animate=animate;
Element.prototype.getStyle=getStyle;
function animate(json){
    for(var attr in json){
    //alert(attr);
        this[attr]=parseInt(this.getStyle()[attr]);
        var that=this;
        this.timer=setInterval(function(){
            that.speed+=(json[attr]-that)
        },20);

    }

}
function getStyle(){
    if (this.currentStyle) {
        return this.currentStyle;
    } else {
        return document.defaultView.getComputedStyle(this, null);
    }
}
