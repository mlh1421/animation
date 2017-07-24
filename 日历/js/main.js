var box = document.getElementById("box"),
    nowTime = new Date(),
    year = nowTime.getFullYear(),
    month = nowTime.getMonth() + 1,
    date = nowTime.getDate(),
    firstDay = new Date(year, month - 1, 1).getDay(),//获取某月第一天的星期几
    table = document.createElement("table");
box.appendChild(table);
for (var i = 0; i < 6; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 7; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

var tds = document.getElementsByTagName("td"),
    dayNum = allDay(year, month);               //获取某月的总天数
//firstDay=3;
switch (firstDay) {                             //设置某月第一天的起始位置
    case 0:
        for (var i = 0; i < dayNum; i++) {
            tds[i + 6].innerHTML = i + 1;
        }
        break;
    case 1:
        for (var i = 0; i < dayNum; i++) {
            tds[i].innerHTML = i + 1;
        }
        break;
    case 2:
        for (var i = 0; i < dayNum; i++) {
            tds[i+1].innerHTML = i + 1;
        }
        break;
    case 3:
        for (var i = 0; i < dayNum; i++) {
            tds[i+2].innerHTML = i + 1;
        }
        break;
    case 4:
        for (var i = 0; i < dayNum; i++) {
            tds[i+3].innerHTML = i + 1;
        }
        break;
    case 5:
        for (var i = 0; i < dayNum; i++) {
            tds[i+4].innerHTML = i + 1;
        }
        break;
    case 6:
        for (var i = 0; i < dayNum; i++) {
            tds[i+5].innerHTML = i + 1;
        }
        break;
}


function allDay(year, month) {                  //获取某个月的天数
    var obj = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    if (leapYear(year) && month == 2) {
        obj[2] = 29;
    }
    return obj[month];
}