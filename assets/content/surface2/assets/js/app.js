//array to hold the image paths 
var photos = ["assets/img/2.jpg","assets/img/3.jpg","assets/img/4.jpg","assets/img/5.jpg","assets/img/6.jpg","assets/img/7.jpg"];

//global variables to keep track of where we are in viewing the list of images
var curr, prev, next;

//function to preload images
function preload(arrayOfImages) {
    //loops through each spot in the array that is passed to the function, and creates a new image tag with the value from the array as the source
    $(arrayOfImages).each(function(){
        var img = new Image();
        img.src = this; 
        console.log(this);
    });
}

//call the preload function    
preload(photos);

//ready function
$(function() {    
    //set current value to 0
    let curr = 0; 
    
    //loop through the photos array and add each image to an unordered list element
     $(photos).each(function(){
         //console.log(this);
         //append each image in a list item to the slides element
         $("#slides").append("<li id="+curr+"><img src="+this+"></li>");
         //set the z-index of the photo
         $("#slides").find("li:eq("+curr+")").css(
             {"z-index":photos.length-curr}
         );
         //increment current value each loop
         curr++;
     });
    
    //reset current to 0
    curr = 0;
   
    //function to move slides back and forth
    function changeSlide(d){
        //slide to next image
        if (d==="n"){
            $("#slides").animate({
                top: "-=42vh"},1000); 
            curr++;
        //slide to previous image
        } else if (d==="p") {
            $("#slides").animate({
                top: "+=41vh"},1000); 
            curr--;  
        //slide to beginning    
        } else {
            $("#slides").animate({top: "0"},500);
            curr=0;
        }
    }
    
    //automatically advance slides every 3 seconds
    var auto = window.setInterval(function(){ 
        if (curr===photos.length-1){
            //reset if at the end
            changeSlide("b");
        } else {
            changeSlide("n");
        }
    }, 3000);

    //go to the previous slide
    $("#prev").click(function(){ 
        //stop the autoplay
        clearInterval(auto);
        //check the current index to make sure it is not on the first slide
        if (curr>0){   
            //slide in previous image
            changeSlide("p");
        }
    });
    
    //go to the next slide
    $("#next").click(function(){
        //stop the autoplay
        clearInterval(auto);
        console.log("current:"+curr);

        if (curr<photos.length-1){
            //slide in next image
            changeSlide("n");
        } else {
            //reset to beginning
            changeSlide("b"); 
        } 
    });
});




$('.link').mouseenter(function(){
    $('.link1').css('color','black');
    $('.link2').css('color','black');
    $('.pagename').css('color','black');
    $('.intro').css('color','black');
});

$('.link').mouseleave(function(){
    $('.link1').css('color','white');
    $('.link2').css('color','white');
    $('.pagename').css('color','white');
    $('.intro').css('color','white');
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


var a = 1;
var b = 1;

$('.cover1').click(function(){
if(a==1)
    {$('.detail1').css('display','block');
    $('.img1').css('left','15vw');
    $('.cover1').css('left','15vw');
    a=0;}
else{
    $('.detail1').css('display','none');
    $('.img1').css('left','35vw');
    $('.cover1').css('left','35vw');
    a=1;}
});

$('.cover2').click(function(){
if(b==1)
    {$('.detail2').css('display','block');
    $('#container').css('left','15vw');
    $('.cover2').css('left','15vw');
    b=0;}
else{
    $('.detail2').css('display','none');
    $('#container').css('left','35vw');
    $('.cover2').css('left','35vw');
    b=1;}
});

