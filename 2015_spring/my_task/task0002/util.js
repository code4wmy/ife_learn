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
    cloneObj=(Array.isArray(obj)) ? []:{}; //判断对象类型，新建克隆对象
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            cloneObj[i]=isObject(obj[i]) ? cloneObject(obj[i]):obj[i];
        }
    }
    return cloneObj;
}

/*另一种代码
function cloneObject(src) {
    // your implement
    var o; //result
    if (Object.prototype.toString.call(src) === "[object Array]") {
        o = []; //判断是否是数组，并赋初始值
    } else {
        o = {};
    }
    for (var i in src) { //遍历这个对象
        if (src.hasOwnProperty(i)) { //排出继承属性
            if (typeof src[i] === "object") {
                o[i] = cloneObject(src[i]); //递归赋值
            } else {
                o[i] = src[i]; //直接赋值
            }
        }
    }
    return o;
}
 */

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


function simpleTrim(str) {
    if (typeof str === 'string') {
        for (var i = 0; i<str.length; i++) {
            if (str[i] !== ' ') {
                var lt = i;
                break;
            }
        }

        for (var j = str.length - 1; j > -1; j--) {
            if (str[j] !== ' ') {
                var rt = j;
                break;
            }
        }

        return str.slice(lt, rt + 1);
    }
    return false;
}

function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/, '');
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
var arr = ['java', 'c', 'php', 'html'];

function each(arr, fn) {
    if (Array.isArray(arr) && typeof fn === 'function') {
        for (var i = 0; i < arr.length; i++) {
            fn(arr[i], i);
        }
    }
}

function output(item, index) {
    console.log(index + ': ' + item);
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return Object.keys(obj).length;
    }
}

// 判断是否为邮箱地址,字母开头
function isEmail(emailStr) {
    return /^[a-zA-Z\d]+[\w.!#$%^&*()]*@\w+(\.[a-zA-Z]{2,}){1,2}$/.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    return /^(1[3-9]\d{9})$/.test(phone);
}


// 判断元素是否有类名
function hasClass(element, className) {
    var classArr = element.className.split(' ');
    if (classArr.indexOf(className) !== -1) {
        return true;
    }
    else {
        return false;
    }
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    if (element.nodeType === 1 && typeof newClassName === 'string') {
        var ourClass = element.getAttribute('class');
        if (ourClass === null) {
            element.setAttribute('class', newClassName);
        }
        else {
            if (ourClass.split(' ').indexOf(newClassName) === -1) {
                element.setAttribute('class', ourClass + ' ' + newClassName);
            }
        }
        return true;
    }
    else {
        return false;
    }
}

function addClass(element, newClassName) {
    if (!hasClass(element, newClassName)) {
        element.className += ' ' + newClassName;
    }
}

/*
function addClass(element, newClassName) {
    var oldClassName = element.className; //获取旧的样式类
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}
 */

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    if (element.nodeType === 1 && typeof oldClassName === 'string') {
        var ourClass = element.getAttribute('class');
        if (ourClass !== null) {
            var classArr = ourClass.split(' ');
            var oldClassPos = classArr.indexOf(oldClassName);
            if (oldClassPos !== -1) {
                classArr.splice(oldClassName, 1);
                element.setAttribute('class', classArr.join(' '));
            }
        }
        return true;
    }
    else {
        return false;
    }
}


function removeClass(element, oldClassName) {
    if (hasClass(element, oldClassName)) {
        element.className = element.className.replace(oldClassName, '');
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    var elementArr = element.parentNode.childNodes;
    for (var i = 0; i < elementArr.length; i++) {
        if (elementArr[i] === siblingNode) {
            return true;
        }
        else {
            return false;
        }
    }
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var pos={};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;
}

//js代码放在html最后面这样才可以getElements，放在前面标签都没有加载会为空
