$('.link').mouseenter(function(){
    $('.link1').css('color','black');
    $('.link2').css('color','black');
    $('.pagename').css('color','black');
});

$('.link').mouseleave(function(){
    $('.link1').css('color','white');
    $('.link2').css('color','white');
    $('.pagename').css('color','white');
});




$('.cover1').mouseenter(function(){
    $('.title1').css('color','#CDDBE2');
});

$('.cover1').mouseleave(function(){
    $('.title1').css('color','black');
});


$('.cover2').mouseenter(function(){
    $('.title2').css('color','#CDDBE2');
});

$('.cover2').mouseleave(function(){
    $('.title2').css('color','black');
});

$('.cover3').mouseenter(function(){
    $('.title3').css('color','#CDDBE2');
});

$('.cover3').mouseleave(function(){
    $('.title3').css('color','black');
});

$('.cover4').mouseenter(function(){
    $('.title4').css('color','#CDDBE2');
});

$('.cover4').mouseleave(function(){
    $('.title4').css('color','black');
});


var a = 1;
var b = 1;
var c = 1;
var d = 1;
var e = 1;
var f = 1;
var g = 1;


$('.cover1').click(function(){
if(a==1)
    {$('.detail1').css('display','block');
    $('.imga').css('left','15vw');
    $('.cover1').css('left','15vw');
    a=0;}
else{
    $('.detail1').css('display','none');
    $('.imga').css('left','35vw');
    $('.cover1').css('left','35vw');
    a=1;}
});

$('.cover2').click(function(){
if(b==1)
    {$('.detail2').css('display','block');
    $('.imgb').css('left','15vw');
    $('.cover2').css('left','15vw');
    b=0;}
else{
    $('.detail2').css('display','none');
    $('.imgb').css('left','35vw');
    $('.cover2').css('left','35vw');
    b=1;}
});

$('.cover3').click(function(){
if(c==1)
    {$('.detail3').css('display','block');
    $('.imgc').css('left','15vw');
    $('.cover3').css('left','15vw');
    c=0;}
else{
    $('.detail3').css('display','none');
    $('.imgc').css('left','35vw');
    $('.coverc').css('left','35vw');
    c=1;}
});

$('.cover4').click(function(){
if(d==1)
    {$('.detail4').css('display','block');
    $('.imgd').css('left','15vw');
    $('.cover4').css('left','15vw');
    d=0;}
else{
    $('.detail4').css('display','none');
    $('.imgd').css('left','35vw');
    $('.cover4').css('left','35vw');
    d=1;}
});

