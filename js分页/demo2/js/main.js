page({
    id: "box",
    allNum: 6,
    nowNum: 5,
    callback:function(all,now){
        alert("总页数："+all+" 当前页："+now);
    }
});
function page(opt) {
    var obj = document.getElementById(opt.id),
        allNum = opt.allNum,
        nowNum = opt.nowNum,
        callback=opt.callback||function(){};
    if (nowNum >= 4 && allNum >= 6) {
        var a = document.createElement("a");
        a.href = "#" + 1;
        a.innerHTML = "首页";
        box.appendChild(a);
    }
    if (nowNum >= 2) {
        var a = document.createElement("a");
        a.href = "#" + (nowNum - 1);
        a.innerHTML = "上一页";
        box.appendChild(a);
    }
    if (allNum <= 5) {
        for (var i = 1; i <= allNum; i++) {
            var a = document.createElement("a");
            a.href = "#" + i;
            if (i == nowNum) {
                a.innerHTML = i;
            } else {
                a.innerHTML = "[" + i + "]";
            }
            obj.appendChild(a);
        }
    } else {
        if (allNum - nowNum == 1 || allNum - nowNum == 0) {
            for (var i = 1; i <= 5; i++) {
                var a = document.createElement("a");
                a.href = "#" + (allNum + i - 5);
                if (allNum + i - 5 == nowNum) {
                    a.innerHTML = allNum + i - 5;
                } else {
                    a.innerHTML = "[" + (allNum + i - 5) + "]";
                }
                obj.appendChild(a);
            }
        } else if (nowNum == 1 || nowNum == 2) {
            for (var i = 1; i <= 5; i++) {
                var a = document.createElement("a");
                a.href = "#" + i;
                if (i == nowNum) {
                    a.innerHTML = i;
                } else {
                    a.innerHTML = "[" + i + "]";
                }
                obj.appendChild(a);
            }
        } else {
            for (var i = 1; i <= 5; i++) {
                var a = document.createElement("a");
                a.href = "#" + (nowNum + i - 3);
                if (i == 3) {
                    a.innerHTML = nowNum + i - 3;
                } else {
                    a.innerHTML = "[" + (nowNum + i - 3) + "]";
                }
                obj.appendChild(a);
            }
        }
    }
    if (nowNum < allNum) {
        var a = document.createElement("a");
        a.href = "#" + (nowNum + 1);
        a.innerHTML = "下一页";
        box.appendChild(a);
    }
    if (allNum - nowNum >= 3 && allNum >= 6) {
        var a = document.createElement("a");
        a.href = "#" + allNum;
        a.innerHTML = "尾页";
        box.appendChild(a);
    }
    callback(nowNum, allNum);
    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = function () {
            var href = this.getAttribute("href").slice(1);
            //alert(href);
            var nowNum = parseInt(href);
            // alert(nowNum);
            obj.innerHTML = "";
            page({//
                id: "box",
                allNum: allNum,
                nowNum: nowNum,
                callback:callback
            })
            return false;
        }
    }
}
