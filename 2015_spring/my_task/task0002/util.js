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

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function isObject(obj){
    if(Object.prototype.toString.call(obj)==='[object Array]' || Object.prototype.toString.call(obj)==='[object Object]')
        return true;
    else
        return false;           
}

function cloneObject(obj){
    var cloneObj;
    cloneObj=(obj instanceof Array) ? []:{}; //判断对象类型，新建克隆对象
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            cloneObj[i]=isObject(obj[i]) ? cloneObject(obj[i]):obj[i];
        }
    }
    return cloneObj;
}

var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// guess word
function play() {
    var words = ["java", "html", "css", "python", "node", "swift"];
    var word = words[Math.floor(Math.random() * words.length)];

    var stringArray = [];
    for (var i=0; i<word.length; i++) {
        stringArray[i] = "_";
    }

    var remainingLetters = word.length;

    while(remainingLetters > 0) {
        alert(stringArray.join(" "));

        var guess = prompt("Guess a letter, or click Cancel to stop").toLowerCase();
        if (guess === null) {
            alert("The word was " + word);
            break;
        }
        else if (guess.length !== 1) {
            alert("Please input a singer letter.");
        }
        else {
            for (var j=0; j<word.length; j++) {
                if (word[j] === guess && stringArray[j] !== guess) {
                    stringArray[j] = guess;
                    if (--remainingLetters === 0) {
                        alert(stringArray.join(" "));
                        alert("Good Job!The word was " + word);
                    }
                }
            }
        }
    }
}

function game() {
    do {
        play();
        var playAgain = confirm("Play again?")
    }
    while (playAgain);
}

// game();