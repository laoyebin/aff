function strToDate(str, ext) {
    if (str == null || str == '') return;
    var arys = new Array();
    arys = str.split('-');
    var newDate = new Date(arys[0], arys[1] - 1, arys[2], 9, 0, 0);
    if (ext) {
        newDate = new Date(newDate.getTime() + 1000 * 60 * 60 * 24);
    }
    return newDate;
}

function showit(str, start, end) {
    var date = new Date();
    var start = strToDate(start);
    var end = strToDate(end, false);
    if (date > start && date < end || start == null) {
        document.write(str);
    }
}

var p = 9;
var q = Math.floor(Math.random() * p + 1);
showit("<a href=https://trk.gs/easyforex target=_blank><img src=https://dev.tencent.com/u/ziliaopub/p/files/git/raw/master/img/adv/forex/easyforex/728x90-" + q + ".gif  border=0></a>", "2019-8-8", "2020-12-31");