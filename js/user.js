$(document).ready(function () {
    console.log("Jquery Working !!!!");
    $('#progressbar').hide();
    $('#search').click(function () {
        $('#search').css('opacity', '0');
        document.getElementById('sugcontain').innerHTML = '';
        $('#searchbox').removeClass('disappear');
        $('#omnisearch').css({ 'display': 'block' });
        $('#omnisearch').val('');
        $('#omnisearch').focus();
    });

    $('#closevideoform').click(function () {
        $('#videoaddform').removeClass('promptbox');
        $('#videoaddform').addClass('disappear');
    });

    getuserbase();
    var counter = 0;
    pollserver();
});


var userbase = [];
var names = [];
var scholars = [];
var pointers = [];
var branches = [];

function _(el) {
    return document.getElementById(el);
}

function pollserver() {
    setTimeout(function () {
        console.log(" polling server !!");
    },1000);
}

function addvideo() {
    numlock = 1;
    console.log('user wants to add a video to repo!!');
    $('#videoaddform').removeClass('disappear');
    $('#videoaddform').addClass('promptbox');
    $('#videoformcon').hide();
    $('#videoformcon').fadeIn(1200);
}

var link = $('#username').children().attr('href');
var scholarno = link.split('=')[1];

function uploadvideo() {
    console.log("videoupload called !!!");
    $('#loading').fadeIn();
    $('#videoformcon').slideUp();
    $('#progressbar').fadeIn();
    var file = _('hiddenvideo').files[0];
    var videoform = document.forms.namedItem('videoinfo');
    var videodata = new FormData(videoform);
    videodata.append('user', $('#username').children().html());
    videodata.append('scholar',scholarno); 

    var ajax = new XMLHttpRequest();

    ajax.upload.addEventListener('progress', progresshandler, false);
    ajax.addEventListener('load', completehandler, false);
    ajax.addEventListener('error', errorhandler, false);
    ajax.addEventListener('abort', aborthandler, false);

    ajax.open("post", "videouploader.php");
    ajax.send(videodata);
    var a = ajax.responseText;
    console.log("response" + a);
}

function progresshandler(event) {
    var percent = (event.loaded / event.total) * 100;
    $('#progressfill').css('width', percent + '%');
    console.log(percent);
}

function errorhandler() {
    console.log("some error occurred!!");
}

function aborthandler() {
    console.log("operation aborted !!!");
}

function completehandler() {
    console.log("file upload completed");
    $('#loading').fadeOut();
    $('#videoaddform').removeClass('promptbox');
    $('#videoaddform').addClass('disappear');
}


function getsubjects(branch) {
    $.ajax({
        type: "POST",
        url: "xml/getsubjects.php",
        data: { branch: branch },
        success: function (data) {
            subjects = data.split(',');
            subjects.pop();
            var subjecthtml = '';

            for (var i = 0; i <= subjects.length - 1; i++) {
                subjecthtml += "<option>" + subjects[i] + "</option>";
            }
            console.log(subjecthtml);
            _('video_category').innerHTML = subjecthtml;
        },
        error: function (error) {
            console.log("getting subjects failed");
        }
    });
}

function displayval() {
    var file = _('hiddenvideo').files[0];
    _('video_title').value = file.name;
}


function displayval2() {
    var file = _('hiddenimage').files[0];
    _('image_title').value = file.name;
}


function triggerupload() {
    _('hiddenvideo').click();
}

function triggerupload2() {
    _('hiddenimage').click();
}

function getuserbase() {
    $.ajax({
        url: "ajaxreciever.php",
        method: "post",
        data: {},
        success: function (data) {
            //console.log(data);  //remove the comments to debug search feature
            userbase = JSON.parse(data);
            scholars = JSON.parse(userbase[0]);
            names    = JSON.parse(userbase[1]);
            branches = JSON.parse(userbase[2]);
            pointers = JSON.parse(userbase[3]);
        },
        error: function () {
        }
    });
}

function getsuggestions(key) {
    var needle = $('#' + key).val();
    var tempresult = [];
    var keyarr = [];
    var match = new RegExp(needle, 'gi');

    if (isNaN(needle)) {
        for (var k = 0; k < names.length; k++) {
            if (names[k].match(match)) { tempresult[tempresult.length] = names[k]; keyarr[keyarr.length] = k; }
        }
        showsuggestions(tempresult, keyarr);
    }
    else if (!isNaN(needle)) {
        if (needle == parseInt(needle)) {
            for (var k = 0; k < scholars.length; k++) {
                if (scholars[k].match(match)) { tempresult[tempresult.length] = scholars[k]; keyarr[keyarr.length] = k; }
            }
            showsuggestions(tempresult, keyarr);
        }
        else {
            console.log(needle + " is float or empty");
        }
    }
}

function showsuggestions(tempres, keyarr) {
    console.log(keyarr);
    var sugarr = [];
    _('sugcontain').innerHTML = '';

    for (var k = 0; k < tempres.length; k++) {
        _('sugcontain').innerHTML += "<a id='sug" + k + "' href='profile.php?scholar=" + scholars[keyarr[k]] + "' ><div class='suggestions' >" + scholars[keyarr[k]] + "&nbsp" + names[keyarr[k]] + "</div></a>";
    }

    $('#sugcontain').fadeIn();
}

var menukey = 0;

function materialmenu() {
    var top = _('stylustip1');
    var middle = _('stylustip2');
    var bottom = _('stylustip3');
    var menu = _('menu');
    if (menukey == 0) {
        slideRight(top, middle, bottom, menu);
        menukey++;
    }
    else {
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
    $('#searchbox').addClass('disappear');
    $('#search').css('opacity', '1');
}

function slideRight(top, middle, bottom, menu) {
    $(menu).removeClass('slideout');
    $(menu).fadeIn(200).addClass('slidein');
    $(top).addClass('menutoptip');
    $(bottom).addClass('menubottip');
}

function slideLeft(top, middle, bottom, menu) {
    $(menu).removeClass('slidein');
    $(menu).addClass('slideout');
    $(top).removeClass('menutoptip');
    $(bottom).removeClass('menubottip');
}

function registerq() {
    var question = $('#question').val();
    console.log(question);
    $.ajax({
        type: "post",
        url: "registerq.php",
        data: { question: question },
        success: function (data) {
            closeqadd();
        },
        error: function (xhr) {
            console.log(xhr.status);
        }
    });
}

function addquestion() {
    $('#qadd').show();
    setTimeout(function () {
        $('#qacont').fadeIn();
    },500);
}

function closeqadd() {
    $('#qadd').hide();
    $('#qacont').hide();
}