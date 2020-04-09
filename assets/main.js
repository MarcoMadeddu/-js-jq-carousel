console.log("done");
var first = $ (".first");
var last = $(".last");
var left = $ (".left-row");
var right = $ (".right-row");



 right.click (function(){
   var currentImg = $ (".active");

   currentImg.removeClass('active');
   currentImg.next().addClass("active");

   if(currentImg.hasClass("last")){
     first.addClass("active");
   }

 });

 left.click (function(){

   var currentImg = $ (".active");

   currentImg.removeClass("active");
   currentImg.prev().addClass("active");

   if(currentImg.hasClass("first")){
     last.addClass("active");
   }


  });
