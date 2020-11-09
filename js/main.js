$(document).ready(function() {
    "use strict";
    $(".divs").click(function() {
      $(".contt").fadeOut();
      $('.' + $(this).data('value')).fadeIn(200).addClass("animate__animated animate__fadeInUp").css(" transition", ".4s all ease");
      /*$("body").find(".contt").not($('.' + $(this).data('value'))).fadeOut(200);*/
      $(".divs").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });



  });
});
