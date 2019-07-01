

$(document).ready(function(){


  (function($) {
      $.fn.clickToggle = function(func1, func2) {
          var funcs = [func1, func2];
          this.data('toggleclicked', 0);
          this.click(function() {
              var data = $(this).data();
              var tc = data.toggleclicked;
              $.proxy(funcs[tc], this)();
              data.toggleclicked = (tc + 1) % 2;
          });
          return this;
      };
  }(jQuery));




   $(".flip-icon").clickToggle(function() {
     // პირველი კლიკი
      $(this).addClass("open");
      var flippableContainer = $(this).parents(".flip-text-wrapper").find(".flippable-text");
      flippableContainer.addClass("open");
      setTimeout(function() {
                        flippableContainer.addClass("overflow");
                }, 1000);
   },
   function() {
     // მეორე კლიკი
        $(this).removeClass("open");
        var flippableContainer = $(this).parents(".flip-text-wrapper").find(".flippable-text");
        flippableContainer.removeClass("overflow").removeClass("open");
   });


});

//
//
// //Winners Text Transfromation 1
// $(document).ready(function(){
//   $("#flip2").click(function(){
//
//
//
//     $(".winners_text").slideToggle("slow");
//     $("#flip2").css("transform","rotate(180deg)")
//
//   });
// });
//
//
// //Winners Text Transfromation 3 - შუა
// $(document).ready(function(){
//   $("#flip3").click(function(){
//
//     $(".winners_text3").slideToggle("slow");
//     $("#flip3").css("transform","rotate(180deg)");
//
//
//
//   });
// });
//
//
// //Winners Text Transfromation 4
// $(document).ready(function(){
//   $("#flip4").click(function(){
//
//     $(".winners_text4").slideToggle("slow");
//     $("#flip4").css("transform","rotate(180deg)")
//
//   });
// });
