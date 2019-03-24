function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var animationEvent = whichAnimationEvent();


$(".back1").ready(function(){
  $(".back1").one(animationEvent,
              function(event) {
    $(".back1").css('background','url("assets/img/1.gif")');
    $(".back1").css('background-size','29.5vw 70vh');
    $(".back1").css('bottom','-2vh');
  });
});

$(".back2").ready(function(){
  $(".back2").one(animationEvent,
              function(event) {
    $(".back2").css('background','url("assets/img/2.gif")');
    $(".back2").css('background-size','23.7vw 70vh');
    $(".back2").css('bottom','-0.5vh');
  });
});

$(".back3").ready(function(){
  $(".back3").one(animationEvent,
              function(event) {
    $(".back3").css('background','url("assets/img/3.gif")','background-size');
    $(".back3").css('background-size','26vw 70vh');
    $(".back3").css('bottom','-1vh');
  });
});

$(".back4").ready(function(){
  $(".back4").one(animationEvent,
              function(event) {
    $(".back4").css('background','url("assets/img/4.gif")');
    $(".back4").css('background-size','26vw 70vh');
    $(".back4").css('bottom','-1vh');
     $('.background').css('display','block');
  });
});


$('.draw').mouseover(function(){
   $(".back1").css('opacity','0');
});
  $('.draw').mouseout(function(){
   $(".back1").css('opacity','1');
});

$('.install').mouseover(function(){
   $(".back2").css('opacity','0');
});
  $('.install').mouseout(function(){
   $(".back2").css('opacity','1');
});

$('.art').mouseover(function(){
   $(".back3").css('opacity','0');
});
  $('.art').mouseout(function(){
   $(".back3").css('opacity','1');
});

$('.about').mouseover(function(){
   $(".back4").css('opacity','0');
});
  $('.about').mouseout(function(){
   $(".back4").css('opacity','1');
});





