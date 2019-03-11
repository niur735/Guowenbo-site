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
    $(".back1").addClass("animate1");
  });
});

$(".back2").ready(function(){
  $(".back2").one(animationEvent,
              function(event) {
    $(".back2").addClass("animate2");
  });
});

$(".back3").ready(function(){
  $(".back3").one(animationEvent,
              function(event) {
    $(".back3").addClass("animate3");
  });
});

$(".back4").ready(function(){
  $(".back4").one(animationEvent,
              function(event) {
    $(".back4").addClass("animate4");
  });
});