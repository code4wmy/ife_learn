window.onload = function () {
    slideShow({reverse: 1,});
};

function slideShow(option) {
    var reverse = option.reverse || 1;  //确定正反序
    var speed = option.speed || 3000;  //速度

    var oImg = $('.img-container').getElementsByTagName('img');
    var imgLen = oImg.length;
    var createUl = document.createElement('ul');
    var oLi = createUl.getElementsByTagName('li');

    createLi();

    if (!option.noloop) {
        var index = 0;
        slide();
        var id = setInterval(slide, speed);
        eleHover();
        liClick();
        preNextClick();
    }

    function slide() {
        if (index < imgLen && index >= 0) {
            resetClass();
            oImg[index].style.display = "block";
            addClass(oLi[index], 'active');
            index += reverse;
        }
        else if (index < 0) {
            index = imgLen -1;
            slide();
        }
        else {
            index = 0;
            slide();
        }
    }

    //hover
    function eleHover() {
        addEvent($('.slide-show'), 'mouseover', function () {
            clearInterval(id);
        })
        addEvent($('.slide-show'), 'mouseout', function () {
            id = setInterval(slide, speed)
        })
    }

    //li click
    function liClick() {
        for (var i = 0; i < imgLen; i++) {
            (function (i) {
                oLi[i].onclick = function () {
                    index = i;
                    slide();
                }
            })(i)
        }
    }

    //slide-next and slide-prev click
    function preNextClick () {
        $.click('.slide-next', nextClick)
        $.click('.slide-prev', prevClick)

        function nextClick() {
            if (reverse === -1) {
                index = index + 2;
            }
            slide();
        }

        function prevClick() {
            if (reverse === 1) {
                index = index - 2 < 0 ? imgLen - 1 : index - 2;
            }
            slide();
        }
    }

    //创建li
    function createLi() {
        for (var x = 0; x < imgLen; x++) {
            var li = document.createElement('li');
            createUl.appendChild(li);
        }
        $('.slide-show').appendChild(createUl);
        addClass(createUl, 'slide-nav');
    }

    //去掉所有active
    function resetClass() {
        for (var j = 0; j < imgLen; j++) {
            oImg[j].style.display = "none";
            removeClass(oLi[j], 'active');
        }
    }

};