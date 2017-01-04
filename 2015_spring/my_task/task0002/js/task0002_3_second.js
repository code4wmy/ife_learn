window.onload = slideShow($('.img-container'), {});

function slideShow(element, options) {
    var imgs = element.getElementsByTagName('img');
    var imgWidth = imgs[0].offsetWidth;
    element.style.width = imgs.length * imgWidth + 'px';//容器宽度，滑动必须
    var index = 1;
    var animated = false;//滑动中点击不生效
    var timer;

    //---------add element start--------
    //add ul-nav
    var createUl = document.createElement('ul');
    var len = imgs.length - 2;
    for (var i = 0; i < len; i++) {
        var li = document.createElement('li');
        createUl.appendChild(li);
    }
    addClass(createUl, 'slide-nav');
    element.parentNode.appendChild(createUl);
    var oLi = createUl.getElementsByTagName('li');
    addClass(oLi[0], 'active');

    //add slide-prev and slide-next
    var createDiv = document.createElement('div');
    addClass(createDiv, 'slide-control');
    createDiv.innerHTML = '<span class="slide-prev">&lt;</span><span class="slide-next">&gt;</span>';
    element.parentNode.appendChild(createDiv);
    //-----------add element end---------------

    clickLi(); //点击小圆点
    clickSpan(); //点击左右箭头
    autoPlay(); //自动播放

    function showButton() {
        for (var x = 0; x < len; x++) {
            removeClass(oLi[x], 'active');
        }
        addClass(oLi[index - 1], 'active');
    }

    function animate(offset) {
        animated = true;
        var time = 250; //位移总时间
        var interval = 10; //位移间隔时间
        var speed = offset / (time / interval); //每一次的位移量
        var newLeft = parseInt(element.style.left) + offset;

        function go() {//滑动实现，每次移动一点，递归移动
            if ((speed < 0 && parseInt(element.style.left) > newLeft) || (speed > 0 && parseInt(element.style.left) < newLeft)) {
                element.style.left = parseInt(element.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                animated = false;
                element.style.left = newLeft + 'px';
                if (newLeft > -500) {
                    element.style.left = -2500 + 'px';
                }
                if (newLeft < -2500) {
                    element.style.left = -500 + 'px';
                }
            }
        }
        go();
    }

    function autoPlay() {
        var ispeed = options.speed || 3000;
        if (options.reverse !== -1) {
            timer = setInterval(next, ispeed);
        }
        else {
            timer = setInterval(prev, ispeed);
        }
    }

    function stop() {
        clearInterval(timer);
    }

    //Event start
    function clickSpan() {
        delegateEvent(createDiv, 'span', 'click', clickSpanEvent);

        function clickSpanEvent() {
            var clickSpanIndex = getIndex(this);//索引，next 返回1，prev返回0
            if (clickSpanIndex) { //点击next
                next();
            }
            else {//点击prev
                prev();
            }
        }
    }

    function clickLi() {
        delegateEvent(createUl, 'li', 'click', clickLiEvent);

        function clickLiEvent() {
            if (animated) {//滑动过程中，点击不移动
                return;
            }

            if (this.className === 'active') {
                return;//优化，点击active小圆点后面代码不执行
            }

            var clickLiIndex = getIndex(this) + 1;//点击li的索引
            var offset = - imgWidth * (clickLiIndex - index);

            index = clickLiIndex;
            showButton();
            animate(offset);
        }
    }

    addEvent(element, 'mouseover', stop);
    addEvent(element, 'mouseout', autoPlay);
    // Event end


    function next() {
        if (animated) {
            return;
        }
        if (index === 5) {
            index = 1;
        }
        else {
            index += 1;
        }
        showButton();
        animate(-imgWidth);
    }
    function prev() {
        if (animated) {
            return;
        }
        if (index === 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        showButton();
        animate(imgWidth);
    }

}