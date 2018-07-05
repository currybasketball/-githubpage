$(function () {
  var screenHeight_up = $(window).height()* +'px';
  var bannerHeight_up = ($(window).height() - 50 ) + 'px';
    if(window.innerWidth<=991){
    var mobile_bannerHeight_up =  ($(window).height() - 50 )+'px'
    $('body').css('height',screenHeight_up)
    $('.banner').css('height',mobile_bannerHeight_up)
    $('.solution').addClass('solutionMobile')
    $('.luanguage').addClass('languageMobile')
  }else{
    $('body').css('height',screenHeight_up)
    $('.banner').css('height',bannerHeight_up)
    $('.solution').addClass('solutionWeb')
    $('.luanguage').addClass('languageWeb')
  }


  $(window).resize(function(){
    var screenHeight_up = $(window).height() +'px';
    var bannerHeight_up = ($(window).height() - 50 ) + 'px';
      if(window.innerWidth<=991){
      var mobile_bannerHeight_up =  ($(window).height() - 50 )+'px'
      $('body').css('height',screenHeight_up)
      $('.banner').css('height',mobile_bannerHeight_up)
    }else{
      $('body').css('height',screenHeight_up)
      $('.banner').css('height',bannerHeight_up)
      $('.solution').addClass('solutionWeb')
    }
  });





  $('.solutionWeb').hover(function () {
    $('.solutionPlan').show();
    // $('.solutionWeb').css("background-color","#0095e5");
  },function () {
    $('.solutionPlan').hide();
    // $('.solutionWeb').css("background-color","#fff")
  });



  




  $('.Mobilemenu').click(function () {
    if(!$('.mobilecolmd8').hasClass('mobilecolmd8show')){
      $('.mobilecolmd8').addClass('mobilecolmd8show')
        $('.header').css('position','absolute');
        $('#logoPic').css('position','absolute');
        $('#FloatLayer').css('display','block');
        scroll(0,0)
      // $('.currentLanguageimg1').attr("src","./images2/whiteicon.png")
      // $('.currentLanguageimg2').attr("src","./images2/whiteicon1.png")
    }else{
      $('.mobilecolmd8').removeClass('mobilecolmd8show')
        $('.header').css('position','fixed');
        $('#logoPic').css('position','fixed');
        $('#FloatLayer').css('display','none');
    }
  });
    $('#FloatLayer').click(function(){
        $('.mobilecolmd8').removeClass('mobilecolmd8show')
        $('.header').css('position','fixed');
        $('#logoPic').css('position','fixed');
        $('#FloatLayer').css('display','none');
    })
   

   

})