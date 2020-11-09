$(window).on("scroll",function(){
  if($(this).scrollTop()>=$(".consulation").offset().top){
    if($(".consulation").hasClass("ACTIVE")){
  var spans=document.querySelectorAll(".count1 span");
  var n=0;
  var fun=setInterval(function () {
    spans.forEach(function(ele){
    var x =ele.textContent;
      x++;
    ele.textContent=x;
    });
    n++;
    if(n==30){
      clearInterval(fun);
    }
  }, 70);
}
$(".consulation").removeClass("ACTIVE");
}
});
$(".free").on("click",function(){
  var m=$(".consulation").offset().top+10;
$(window).scrollTop(m);

});
//$('.info').css('marginTop',"-"+$('.info').innerHeight()/2+'px')
    function name(){
        $('.back').toggleClass('translate');
    };
    function main(){

        $('.back').toggleClass('hide');
        $('.indicitor span').toggleClass('activ');
        setTimeout(name,50);
    }

    setInterval(main,3000);


   //$('.indicitor').css('top',$('.info button').offset().top+5+'px');
   //console.log($('.info').offset().top+100+'px');
   $('.indicitor span').on('click',function(){

       if(!$(this).hasClass('activ'))
       {
        main();

       }

   });
$(".scrol").on("click",function(){
$(window).scrollTop(0);
});



$(".loading_overlay").fadeOut(7000);
