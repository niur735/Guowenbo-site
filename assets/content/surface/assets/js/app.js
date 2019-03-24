$(function(){
    $(window).scroll(function() {
        var $rise = $('.rise');
        var st = $(this).scrollTop();
        $rise.height( st*1.345);
    }).scroll();


$('.project').mouseenter(function(){
	var nu = $(this).data('number');
var covername = 'cover' + nu;
var textname = 'text' + nu;

    $('.' + textname).css("opacity","1");
    $('.' + covername).css("display","block");
});

$('.project').mouseleave(function() {
	var nu = $(this).data('number');
var covername = 'cover' + nu;
var textname = 'text' + nu;

    $('.' + textname).css("opacity","0");
    $('.' + covername).css("display","none");

});

// $('.' + imgname).mouseout(function(){
//     $('.' + textname).css("opacity","0");
//     $('.' + imgname).css("opacity","1");
// });

});
