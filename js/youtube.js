$(document).ready(function(){
    console.log("jquery working !!");
});
var menukey = 0;

function materialmenu() {
    var top = _('stylustip1');
    var middle = _('stylustip2');
    var bottom = _('stylustip3');
    var menu = _('menu');
    if (menukey == 0) {
        $('menu').css('overflow-x', 'scroll');
        slideRight(top, middle, bottom, menu);
        menukey++;
    }
    else {
        $('menu').css('overflow-x', 'hidden');
        slideLeft(top, middle, bottom, menu);
        menukey--;
    }
}

function showmenu() {
    console.log("function show menu called!!!");
    materialmenu();
}


function slideRight(top, middle, bottom, menu) {
    $(menu).removeClass('slideout');
    $(menu).fadeIn(200).addClass('slidein');
    $(top).addClass('menutoptip');
    $(bottom).addClass('menubottip');
    $('menu').css('position', 'absolute');
}

function slideLeft(top, middle, bottom, menu) {
    $(menu).removeClass('slidein');
    $(menu).addClass('slideout');
    $(top).removeClass('menutoptip');
    $(bottom).removeClass('menubottip');
    $('menu').css('position', 'relative');
}

function _(el) {
    return document.getElementById(el);
}
