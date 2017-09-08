var selected_branch = '';
var selected_subject = '';
var menukey = 0 ;
var keybase = '';

$(document).ready(function () {
    console.log('Jquery wrking !!');
    $('#search').css('opacity', '0');
    $('#searchbox').removeClass('disappear');
    $('#omnisearch').css({ 'display': 'block' });
    $('#omnisearch').val('');
    $('#omnisearch').focus();
    keywords();
});

function keywords() {
    console.log("keyword database requested!!!");
    $.ajax({
        type: "post",
        url: "getallkeys.php",
        data: {},
        success: function (data) {
            keybase = JSON.parse(data);
        },
        error: function () {
            console.log("error failed!!");
        }
    });
}

function materialmenu() {
    var top    = _('stylustip1');
    var middle = _('stylustip2');
    var bottom = _('stylustip3');
    var menu   = _('menu');
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

function restoresearch() {
    console.log('restoresearch called');
    $('#sugcontain').hide();
    $('.videocardmaster').css('position', 'relative');
    $('#search').css('opacity', '1');
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


function rendervideo(id) {
    var video = $('#' + id);
    var videoname = video.children('.title').html();
    var permalink = 'youtube.php?videoname=' + videoname;
    window.location.href = permalink;
}

function getsuggestions(id) {
    var needle = _(id).value;
    if (needle !== '') {
        var tempres = [];
        var counter = 0;
        var match = new RegExp(needle);

        for (var sug in keybase) {
            if (!keybase.hasOwnProperty(sug)) continue;
            if (sug.match(match)) tempres[tempres.length] = sug;
            counter++;
        }

        showsuggestions(tempres);
    }
    else {
        restoresearch();
        _('sugcontain').innerHTML = '';
    }
}

function showsuggestions(arr) {
    var suggestions = "";
    for (var g = 0; g < arr.length; g++) {
        var temp = keybase[arr[g]].split(',');
        for (var f = 0 ; f < temp.length; f++) {
            suggestions+= "<div class='suggestions' onclick='sugvideo(this.id)' id='videosug"+g+f+"'>"+temp[f]+"</div>";
        }
        
    }
    $('.videocardmaster').css('position','absolute');
    _('sugcontain').innerHTML = suggestions;
    $('#sugcontain').show();
    }

function sugvideo(id) {
    window.location.href = 'youtube.php?videoname=' + _(id).innerHTML;
}