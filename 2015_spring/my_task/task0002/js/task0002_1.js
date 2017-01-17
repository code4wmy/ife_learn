
function isArray(arr) {
    // document.write(arr instanceof Array);
    // return arr instanceof Array;
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return true;
    }
    return false;
}

function isFunction(fn) {
    if (typeof fn === "function") {
        // document.write("is a function<br />");
        return true;
    }
        // document.write("is not a function<br />");
    return false;
}


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


// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function isObject(obj){
    if(Object.prototype.toString.call(obj)==='[object Array]' || Object.prototype.toString.call(obj)==='[object Object]')
        return true;
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


// guess word
function guessWord() {
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
        guessWord();
        var playAgain = confirm("Play again?");
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
    return false;
}

// 为element增加一个样式名为newClassName的新样式
/*function addClass(element, newClassName) {
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
    return false;
}*/

/*function addClass(element, newClassName) {
    if (!hasClass(element, newClassName)) {
        element.className += ' ' + newClassName;
    }
}*/


function addClass(element, newClassName) {
    var oldClassName = element.className; //获取旧的样式类
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}


// 移除element中的样式oldClassName
/*function removeClass(element, oldClassName) {
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
    return false;
}
*/

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
        return false;
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
/*function $(selector) {
    selector = trim(selector); //去除开头结尾多余空格
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
        for (var j = 0; j< allChilds.length; j++) {
            if (allChilds[j].getAttribute(selector.slice(1, -1))) {
                return allChilds[j];
            }
        }
    }
}
*/

/* 另一种选择器的写法,简单的迭代.

/**
 * $函数的依赖函数，选择器函数
 * @param   {string} selector CSS方式的选择器
 * @param   {object} root     可选参数，selector的父对象。不存在时，为document
 * @returns {Array}  返回获取到的节点数组，需要注意的是使用ID选择器返的也是数组

*/
function VQuery(selector, root) {
    //用来保存选择的元素
    var elements = []; //保存结果节点数组
    var allChildren = null; //用来保存获取到的临时节点数组
    root = root || document; //若没有给root，赋值document
    switch (selector.charAt(0)) {
    case "#": //id选择器
        elements.push(root.getElementById(selector.substring(1)));
        break;
    case ".": //class选择器
        if (root.getElementsByClassName) { //标准
            elements = root.getElementsByClassName(selector.substring(1));
        } else { //兼容低版本浏览器
            var reg = new RegExp("\\b" + selector.substring(1) + "\\b");
            allChildren = root.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++) {
                if (reg.test(allChildren[i].className)) {
                    elements.push(allChildren[i]);
                }
            }
        }
        break;
    case "[": //属性选择器

        if (selector.indexOf("=") === -1) {
        //只有属性没有值的情况
            allChildren = root.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++) {
                if (allChildren[i].getAttribute(selector.slice(1, -1)) !== null) {
                    elements.push(allChildren[i]);
                }
            }
        } else {
        //既有属性又有值的情况
            var index = selector.indexOf("="); //缓存=出现的索引位置。
            allChildren = root.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++) {
                if (allChildren[i].getAttribute(selector.slice(1, index)) === selector.slice(index + 1, -1)) {
                    elements.push(allChildren[i]);
                }
            }
        }
        break;
    default: //tagName
        elements = root.getElementsByTagName(selector);
    }
    return elements;
}

/**
 * 模仿jQuery的迷你$选择符。
 * @param   {string} selector CSS方式的选择器，支持简单的后代选择器（只支持一级）
 * @returns {object} 返回获取到的第一个节点对象，后代选择器时，返回第一个对象中的第一个符合条件的对象

*/
function $(selector) {
//这里trim处理输入时两端出现空格的情况，支持ie9+。但是这个函数实现起来也特别简单，可以参考我task0002（-）前面有trim函数的实现。稍微修改一下，这样就没兼容性问题了。
    if (selector == document) {
        return document;
    }
    selector = selector.trim();
    //存在空格时，使用后代选择器
    if (selector.indexOf(" ") !== -1) {
        var selectorArr = selector.split(/\s+/); //分割成数组，第一项为parent，第二项为chlid。
        //这里没去考虑特别多的情况了，只是简单的把参数传入。
        return VQuery(selectorArr[1], VQuery(selectorArr[0])[0])[0];
    } else { //普通情况,只返回获取到的第一个对象
        return VQuery(selector,document)[0];
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
};
$.un = function (element, event, listener) {
    removeEvent(element, event, listener);
};
$.click = function (element, listener) {
    addClickEvent(element, listener);
};
$.enter = function (element, listener) {
    addEnterEvent(element, listener);
};

//代理
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
    );
}

//估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么把我们的事件函数做如下封装：
$.on = function (selector, event, listener) {
    // your implement
    addEvent($(selector), event, listener);
};


$.click = function(selector, listener) {
    // your implement
    addClickEvent($(selector), listener);
};

$.un = function (selector, event, listener) {
    // your implement
    removeEvent($(selector), event, listener);
};

$.delegate = function(selector, tag, event, listener) {
    // your implement
    delegateEvent($(selector), tag, event, listener);
};


//BOM
// 判断是否为IE浏览器，返回-1或者版本号

//IE9及以上无法检测
/*function isIE() {
    // your implement
    if (window.addEventListener) {
        console.log("not ie");
    }
    else if (window.attachEvent) {
        console.log("is ie");
    }
    else {
        console.log("这种情况发生在不支持DHTML的老版本浏览器（现在一般都支持）")
    }
}*/
function isIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = cookieName + "=" +cookieValue + ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
    if (document.cookie.length) {
        var cookieArr = document.cookie.split(';');
        for (var i = 0; i < cookieArr.length; i++) {
            var karr = cookieArr[i].split('=');
            if (karr[0] === cookieName) {
                return karr[1];
            }
        }
    }
    return '';
}

function delCookie(cookieName) {
    setCookie(cookieName, '1', -1);
}

// 学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：
/*
function ajax(url, options) {
    // your implement
}

// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest',
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
 */

function ajax(url, options) {
    //新建对象
    var oAjax;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    }
    else { //ie6, ie5
        oAjax = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //连接服务器
    //数据处理
    var data = options.data ? options.data : -1;
    var param = '';
    if (typeof data === 'object') {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                param += key + '=' + data[key] + '&';
            }
        }
        param.replace(/&$/, '');
    }
    else {
        param = 'timestamp=' + new Date().getTime();
    }

    //发送请求
    var type = options.type ? options.type.toUpperCase() : 'GET';
    if (type === 'GET') {
        oAjax.open('GET', url + '?' + param, true);
        oAjax.send();
    }
    else {
        oAjax.open('POST', url, true);
        oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oAjax.send(param);
    }

    //接收返回
    oAjax.onreadystatechange = function() {
        if (oAjax.readyState === 4) {
            if (oAjax.status === 200) {
                options.onsuccess(oAjax.responseText, oAjax);
            }
            else {
                if (options.onfail) {
                    options.onfail(oAjax);
                }
            }
        }
    };
    return oAjax;
}

/**
 * 获取当前元素在同级元素的索引
 * @param   {HTMLElement} element html节点
 * @returns {number} 索引
 */
function getIndex(element) {
    var aBrother = element.parentNode.children;
    for (var i = 0, len = aBrother.length; i < len; i++) {
        if (aBrother[i] == element) {
            return i;
        }
    }
}

//window.onload 按顺序执行多个函数
//onloadListener(fun1);onloadListener(fun2);onloadListener(fun3)
function onloadListener(func) {
    var oldonLoad = window.onload;
    if (typeof oldonLoad !== "function") {
        window.onload = func;
    }
    else{
        window.onload = function() {
            oldonLoad();
            func();
        };
    }
}