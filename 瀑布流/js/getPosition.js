function getPosition(obj){
    var left=0;
    var top=0;
    while(obj!=document.body)
    {
        left=obj.offsetLeft;
        top=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return top;
}
