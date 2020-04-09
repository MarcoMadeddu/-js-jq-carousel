console.log("done");
var left = $ (".left-row");
var right = $ (".right-row");
var current = $(".box img");


right.click (function(){

  var image = $ (".active");

  current.removeClass("active");
  image.next().addClass("active");

  if(current.hasClass("last")){
    current.removeClass("active");
    image.prev().addClass("active");
  }

 });

 left.click (function(){

   var image = $ (".active");
   current.removeClass("active");
   image.prev().addClass("active");

   if(current.hasClass("first")){
     current.removeClass("active");
     image.next().addClass("active");
   }
 })
