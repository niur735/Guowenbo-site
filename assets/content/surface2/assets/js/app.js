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

$('.cover5').mouseenter(function(){
    $('.title5').css('color','#CDDBE2');
});

$('.cover5').mouseleave(function(){
    $('.title5').css('color','black');
});

$('.cover6').mouseenter(function(){
    $('.title6').css('color','#CDDBE2');
});

$('.cover6').mouseleave(function(){
    $('.title6').css('color','black');
});

$('.cover7').mouseenter(function(){
    $('.title7').css('color','#CDDBE2');
});

$('.cover7').mouseleave(function(){
    $('.title7').css('color','black');
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

$('.cover5').click(function(){
if(e==1)
    {$('.detail5').css('display','block');
    $('.imge').css('left','15vw');
    $('.cover5').css('left','15vw');
    e=0;}
else{
    $('.detail5').css('display','none');
    $('.imge').css('left','35vw');
    $('.cover5').css('left','35vw');
    e=1;}
});

$('.cover6').click(function(){
if(f==1)
    {$('.detail6').css('display','block');
    $('.imgf').css('left','15vw');
    $('.cover6').css('left','15vw');
    f=0;}
else{
    $('.detail6').css('display','none');
    $('.imgf').css('left','35vw');
    $('.cover6').css('left','35vw');
    f=1;}
});

$('.cover7').click(function(){
if(g==1)
    {$('.detail7').css('display','block');
    $('.imgg').css('left','15vw');
    $('.cover7').css('left','15vw');
    g=0;}
else{
    $('.detail7').css('display','none');
    $('.imgg').css('left','35vw');
    $('.cover7').css('left','35vw');
    g=1;}
});