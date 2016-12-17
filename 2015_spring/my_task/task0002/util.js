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
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
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


//接下来挑战一个mini $，它和之前的$是不兼容的，它
//应该是document.querySelector的功能子集，在不直接
//使用document.querySelector的情况下，在你的util.js中完成以下任务：
function $(selector) {
    var selector = trim(selector); //去除开头结尾多余空格
    if (/\s+/.test(selector)) { //有空格，多项选择
        var Id        = /#[\w-]+/.exec(selector);
        var className = /\.[\w-]+/.exec(selector);
        var attribute = /[[\w-=]+]/.exec(selector);
        if (Id && className) { // id+className
            return getByClass(className[0], getById(Id[0]));
        }
        else if (Id && attribute) { // id+attribute
            return getByAttr(attribute[0], getById(Id[0]));
        }
        else if (className && attribute) {
            return getByAttr(attribute[0], getByClass(className[0]));
        }
        else {
            console.log("Not Match!");
        }
    }
    else {//无空格，单选
        var selectorArr= [];
        switch (selector[0]) {
            case "#":
                selectorArr.push(getById(selector));
                break;
            case ".":
                selectorArr.push(getByClass(selector));
                break;
            case "[":
                selectorArr.push(getByAttr(selector));
                break;
            default :
                selectorArr.push(getByTag(selector));
        }
        return selectorArr[0];
    }
}

function getById(selector) {
    return document.getElementById(selector.substring(1));
}

function getByClass(selector, root=document) {
    return root.getElementsByClassName(selector.substring(1))[0];
}

function getByTag(selector) {
    return document.getElementsByTagName(selector)[0];
}

function getByAttr(selector, root=document) {
    var allChilds = root.getElementsByTagName("*");
    var index = selector.indexOf("=");
    if (index !== -1) {
        for (var i = 0; i< allChilds.length; i++) {
            if (allChilds[i].getAttribute(selector.slice(1,index)) === selector.slice(index+1, -1)) {
                return allChilds[i];
            }
        }
    }
    else {
        for (var i = 0; i< allChilds.length; i++) {
            if (allChilds[i].getAttribute(selector.slice(1, -1))) {
                return allChilds[i];
            }
        }
    }
}

// 事件
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    if (element.addEventListener) {
        element.addEventListener(event, listener , false);
    }
    else if (element.attechEvent) {
        element.attechEvent('on' + event, listener);
    }
    else {
        element['on' + event] = listener;
    }
}

// 例如：
function clicklistener(event) {
    return null;
}
// addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if (element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    }
    else if (element.detachEvent) {
        element.detachEvent('on' + event, listener);
    }
    else {
        element['on' + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element, 'click', listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    addEvent(
        element,
        'keydown',
        function (e) {
            var oEvent = e || window.event;
            if (oEvent.keyCode === 13) {
                listener();
            }
        }
    );
}

/*
接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法

addEvent(element, event, listener) -> $.on(element, event, listener);
removeEvent(element, event, listener) -> $.un(element, event, listener);
addClickEvent(element, listener) -> $.click(element, listener);
addEnterEvent(element, listener) -> $.enter(element, listener);
 */

$.on = function (element, event, listener) {
    addEvent(element, event, listener);
}
$.un = function (element, event, listener) {
    removeEvent(element, event, listener);
}
$.click = function (element, listener) {
    addClickEvent(element, listener);
}
$.enter = function (element, listener) {
    addEnterEvent(element, listener);
}

//代理
function clickListener(event) {
    console.log(event);
}
function showMes() {
    alert("something");
}
function renderList() {
    $("#list").innerHTML = '<li>new item</li>';
}

function init() {
/*    each($("#list").getElementsByTagName('li'), function(item) {
        $.click(item, clickListener);
    });*/

    $.click($("#btn"), renderList);
}
init();
/*
我们增加了一个按钮，当点击按钮时，改变list里面的项目，这个时候你再
点击一下li，绑定事件不再生效了。那是不是我们每次改变了DOM结构或者内
容后，都需要重新绑定事件呢？当然不会这么笨，接下来学习一下事件代理，然
后实现下面新的方法：
*/

// 事件代理,事件冒泡原理
function delegateEvent(element, tag, eventName, listener) {
    // your implement
    addEvent(
        element,
        eventName,
        function (ev) {
            var e = ev || window.event;
            var target = e.target || e.srcElement;
            if (target.nodeName.toLowerCase() === tag) {
                listener.call(target, e); //使用call方法修改执行函数中的this指向，现在
                //this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容
            }
        }
    )
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
// $.delegate($("#list"), "li", "click", clickListener);

//估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么把我们的事件函数做如下封装：
$.on = function (selector, event, listener) {
    // your implement
    addEvent($(selector), event, listener);
}


$.click = function(selector, listener) {
    // your implement
    addClickEvent($(selector), listener);
}

$.un = function (selector, event, listener) {
    // your implement
    removeEvent($(selector), event, listener);
}

$.delegate = function(selector, tag, event, listener) {
    // your implement
    delegateEvent($(selector), tag, event, listener);
}

// 使用示例：
// /*$.click("[data-log]", logListener);
$.on('#btn2', 'click', clickListener);
$.delegate('#list', "li", "click", clickListener);