$(document).ready(function () {
    console.log('Jquery wrking !!');
    $('#search').css('opacity', '0');
    document.getElementById('sugcontain').innerHTML = '';
    $('#searchbox').removeClass('disappear');
    $('#omnisearch').css({ 'display': 'block' });
    $('#omnisearch').val('');
    $('#omnisearch').focus();
});
var selected_branch = '';
var selected_subject = '';
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

function restoresearch() {
    console.log('restoresearch called');
    $('#sugcontain').hide();
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

function getsubjects(id) {
    $('#loading').fadeIn();
    var branch = document.getElementById(id).innerHTML;
    $('.select').addClass('wallposts');
    $('.select').removeClass('.select');
    $('#' + id.replace('branch', '')).removeClass('wallposts');
    $('#' + id.replace('branch', '')).addClass('select');
    selected_branch = branch;
    $.ajax({
        type: "POST",
        url: "xml/getsubjects.php",
        data: { branch: branch },
        success: function (data) {
            subjects = data.split(',');
            subjects.pop();
            var subjecthtml = "<div style='z-index:7'>";
            for (var i = 0; i <= subjects.length - 1; i++) {
                subjecthtml += "<hr><span id='subject" + i + "' onclick='enterportal(this.id)'>" + subjects[i] + "</span>";
            }
            subjecthtml += '</div>';
            document.getElementById(id.replace('branch', '')).innerHTML += subjecthtml;
            $('#loading').fadeOut();
        },
        error: function (error) {
            console.log("getting subjects failed");
        }
    });

    console.log(branch);
}

function enterportal(subject) {
    selected_subject = document.getElementById(subject).innerHTML;
    currentloc = window.location.href;
    currentloc += '?branch=' + selected_branch + '&subject=' + selected_subject;
    window.location.href = currentloc;
    console.log("The user selected branch" + selected_branch + " " + selected_subject);
}

function rendervideo(id) {
    var video = $('#' + id);
    var videoname = video.children('.title').html();
    var permalink = 'youtube.php?videoname=' + videoname;
    window.location.href = permalink;
}
function getsuggestions() {
}