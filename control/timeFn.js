function formatDate(now, tyle) {
    var now = new Date(now * 1000);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var week = now.getDay();
    if (tyle == 1) {
        return year + "-" + fixZero(month, 2) + "-" + fixZero(date, 2) + "    " +
            "" + fixZero(hour, 2) + ":" + fixZero(minute, 2);
    } else if (tyle == 2) {
        return '剩余' + fixZero(minute, 2) + '分' + fixZero(second, 2) + '秒';
    } else if (tyle == 3) {
        return fixZero(month, 2) + '月' + fixZero(date, 2) + '日';
    } else if (tyle == 4) {
        return year + "-" + fixZero(month, 2) + "-" + fixZero(date, 2);
    } 
}
//时间如果为单位数补0
function fixZero(num, length) {
    var str = "" + num;
    var len = str.length;
    var s = "";
    for (var i = length; i-- > len;) {
        s += "0";
    }
    return s + str;
}
exports.timeFn=function(now, tyle){
    formatDate(now, tyle);
}



















