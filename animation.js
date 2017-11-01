document.addEventListener('DOMContentLoaded' , function () {

var bg = document.getElementsByClassName('bg-img'),
    textTopBig = document.getElementsByClassName('top_text_big'),
    textTopSmall = document.getElementsByClassName('top_text_small'),
    textMiddle = document.getElementsByClassName('middle_text'),
    img = document.getElementById('img'),
    qr = document.getElementsByClassName('qr');

var tl = new TimelineMax ({repeat: -1, repeatDelay: 3});

    tl.from (bg , 2 , {scale: 1.5}, 1)
        .from (textTopBig , 1.5 , {autoAlpha:0 , left:50}, '-=2')
        .from (textTopSmall , 1 , {autoAlpha:0 , left:50}, '-=1.5')
        .from (textMiddle , 1 , {autoAlpha:0, left:120}, '-=1')
        .to (img , 1, {top:0, left: 0}, '-=0.5')
        .from (qr , 1 ,{top:-60, left:-60}, '-=1')
});