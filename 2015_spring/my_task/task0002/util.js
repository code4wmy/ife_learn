var arr = [1, 2, 3, 4];
var str = "javascript";

function isArray(arr) {
    document.write(arr instanceof Array);
    // return arr instanceof Array;
}

isArray(arr);
document.write("<br />");

isArray(str);
document.write("<br />");

function isFunction(fn) {
    if (typeof fn === "function") {
        document.write("is a function<br />");
    }
    else { document.write("is not a function<br />"); }
}

isFunction(arr);
isFunction(isFunction);

function uniqArray(arr) {
    var newArr = [];
    //第一种
    /*for(var i=0; i<arr.length;i++) {
        if(arr.indexOf(arr[i])==i) 
            newArr.push(arr[i]);
    }
    return newArr;
    */

    // 第二种
    /*for(var i=0;i<arr.length;i++) {
        if(newArr.indexOf(arr[i]) == -1)
            newArr.push(arr[i]);
    }
    return newArr;
    */

    // 第三种
    arr.sort();
    for(var i=0;i<arr.length;i++) {
        if(arr[i] != newArr[newArr.length - 1])
            newArr.push(arr[i]);
    }
    return newArr;
}

var a = [1, 3, 5, 7, 5, 3, 1, 7, 11, "a", "b", "a"];
var b = uniqArray(a);
console.log(b);