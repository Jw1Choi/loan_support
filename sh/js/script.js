$(function(){

    $(window).scroll(function(){
          if(20 < $(this).scrollTop()){
              $('#wrapper').addClass('move');
          }else{
            $('#wrapper').removeClass('move');
          }
      });
  
  
  
    $('.btn_nav').click(function(){
      $('#wrapper').toggleClass('on');
    });
  
  
  
  
  });