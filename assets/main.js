$(document).ready(function() {

var first = $ (".first");
var last = $(".last");
var left = $ (".left-row");
var right = $ (".right-row");
var firstPointer = $(".first-p");
var lastPointer = $(".last-p");

//**MAIN**

left.click(function(){
  goLeft();
});

right.click(function(){
  goRight();
});

$(document).keydown(function(x){
  if(x.keyCode == 39){
    goRight();
  }else if (x.keyCode == 37) {
    goLeft();
  }
});

//**FUNCTIONS**

function goRight(){
  //click su freccia destra per scorrere le immagini e il relativo Pointer
     var currentImg = $ (".active");
     var pointer= $(".select");

  //rimuovere lo stato active all'immagine corrente e aggiungerla alla prossima
     currentImg.removeClass('active');
     currentImg.next().addClass("active");

  //rimuovere lo stato active al pointer e aggiungerlo al sucessivo
     pointer.removeClass("select");
     pointer.next().addClass("select");

  //controllo per verificare che si tratti dell'ultimo elemento, se così fosse si settano i valori di active e select ai primi elementi
     if(currentImg.hasClass("last")){
       first.addClass("active");
       firstPointer.addClass("select");
     }

   };

 function goLeft(){
   //click su freccia sinistra per scorrere le immagini e il relativo Pointer

      var currentImg = $ (".active");
      var pointer = $ (".select");

   //rimuovere lo stato active all'immagine corrente e aggiungerla alla precedente
      currentImg.removeClass("active");
      currentImg.prev().addClass("active");

   //rimuovere lo stato active al pointer e aggiungerlo al precedente
      pointer.removeClass("select");
      pointer.prev().addClass("select");

   //controllo per verificare che si tratti del primo elemento, se così fosse si settano i valori di active e select agli ultimi elementi
      if(currentImg.hasClass("first")){
        last.addClass("active");
        lastPointer.addClass("select");
      }

     };

});
