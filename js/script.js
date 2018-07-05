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

  // if(window.location.hash == '#contactus'){
  //   $("html,body").animate({scrollTop:$(".submitInfo").offset().top},1000)
  // }
  // var hashStr = JSON.stringify(window.location.hash)
  // var firstshow =hashStr.substr(1,hashStr.length-3).replace('#','.').replace('"','').replace('"','');
  // var buttonFirstshow = firstshow+'a'
  // $('.serverButton').removeClass('active');
  // $(buttonFirstshow).addClass('active');
  // $(firstshow).css("display",'block');
  // $('.serverButtonTitle').html($(buttonFirstshow).find('span').text()+'<span class="glyphicon glyphicon-chevron-down"></span>');
  // if(!firstshow){
  //   $('.serverButton').removeClass('active');
  //   $('.dra').addClass('active');
  //   $('.dr').css("display",'block');
  //     $('.serverButtonTitle').html('眼睛'+'<span class="glyphicon glyphicon-chevron-down"></span>');
  //
  // }
  $('.serverButtonTitle').click(function(){
      if($('.mobileMenu').css('display') == 'none'){
          $('.mobileMenu').css('display','block') ;
          $(this).html($(this).text()+'<span class="glyphicon glyphicon-chevron-up"></span>')
      }else{
          $('.mobileMenu').css('display','none') ;
          $(this).html($(this).text()+'<span class="glyphicon glyphicon-chevron-down"></span>')
      }

    })


  $('.solutionMobile').click(function () {
    if($('.solutionPlan').css("display") == "none"){
      $('.solutionPlan').css("display","block");
    } else{
      $('.solutionPlan').css("display","none");
    }

  });



  $('.solutionWeb').hover(function () {
    $('.solutionPlan').show();
    // $('.solutionWeb').css("background-color","#0095e5");
  },function () {
    $('.solutionPlan').hide();
    // $('.solutionWeb').css("background-color","#fff")
  });
  //
  // $('.module').hover(function(){
  //   $(this).find('a').css("color","#fff")
  // },function(){
  //   $(this).find('a').css("color","#616262")
  // })

  $('.languageMobile').click(function(){
    if($('.otherLanguage').css("display") == 'none'){
      // $('.luanguage').css("background-color","#0095e5")
      $('.otherLanguage').css("display","block")
      // $('.currentLanguageimg1').attr("src","./images2/whiteicon.png")
      // $('.currentLanguageimg2').attr("src","./images2/whiteicon1.png")
    }else{
      $('.otherLanguage').css("display","none")
    }

  })


  $('.languageWeb').hover(function(){
    $('.otherLanguage').css("display","block")
    $('.currentLanguageimg1').attr("src","https://om0i8pzmk.qnssl.com/images2/whiteicon.png?1494416009319")
    $('.currentLanguageimg2').attr("src","https://om0i8pzmk.qnssl.com/images2/whiteicon1.png?1494416009319")
  },function () {
    $('.otherLanguage').css("display","none")
    $('.currentLanguageimg1').attr("src","https://om0i8pzmk.qnssl.com/images2/bannericon.png?1494416009319")
    $('.currentLanguageimg2').attr("src","https://om0i8pzmk.qnssl.com/images2/bannericon2.png?1494416009319")
  })



  $('.serverButton').click(function () {
    var currentRoutePre = $(this).attr('class').split(' ')[1];
    var currentRoute = currentRoutePre.substr(0,currentRoutePre.length-1);
    $('.serverButton').removeClass('active');
    $(this).addClass('active');
      $('.serverButtonTitle').html($(this).text()+'<span class="glyphicon glyphicon-chevron-down"></span>')
    var currenName ='.'+$(this).attr('name');
    $('.detail').css("display","none");
    $(currenName).css("display",'block');
      if(window.innerWidth<=991){
          if($('.mobileMenu').css('display') == 'none' ){
              $('.mobileMenu').css('display','block') ;
              $('.serverButtonTitle').html($(this).text()+'<span class="glyphicon glyphicon-chevron-up"></span>')
          }else{
              $('.mobileMenu').css('display','none') ;
              $('.serverButtonTitle').html($(this).text()+'<span class="glyphicon glyphicon-chevron-down"></span>')
          }
      }
  });

  var prePage = '1';
  $('.page').click(function () {
    var NextPage= $(this).find('a').text().trim();
    if(JSON.stringify(parseInt(NextPage)) != 'null'){
      var showPage='.page'+NextPage;
      var showChoice = '.choice' + NextPage;
      $('.page').find('a').removeClass('choice');
      $(showChoice).addClass('choice');
      $('.article').css("display","none");
      $(showPage).css("display","block");
      prePage = NextPage;
    }else if(NextPage == '上一页' ){
      if(prePage == 1){
        bootbox.alert('已经是第一页了');
        return
      }
      var pageNum = prePage - 1;
      var showPage='.page'+pageNum;
      var showChoice = '.choice' + pageNum;
      $('.page').find('a').removeClass('choice');
      $(showChoice).addClass('choice');
      $('.article').css("display","none");
      $(showPage).css("display","block");
      prePage = pageNum;
    }else if(NextPage == '下一页' ){
      if(prePage == 4){
        bootbox.alert('已经是最后一页了');
        return
      }
      var pageNum = parseInt(prePage) + 1;
      var showPage='.page'+pageNum;
      var showChoice = '.choice' + pageNum;
      $('.page').find('a').removeClass('choice');
      $(showChoice).addClass('choice');
      $('.article').css("display","none");
      $(showPage).css("display","block");
      prePage = pageNum;
    }
  });

  // $('#phone').blur(function () {
  //   var phoneNum = $.trim($('#phone').val());
  //   if (!/^\d*$/.test(phoneNum)) {
  //     bootbox.alert("电话号码格式有误！");
  //     return false;
  //   }
  // });

  // $('#email').blur(function () {
  //   var email = $.trim($('#email').val());
  //   var emailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  //   if(!emailreg.test(email) &&email.length>0){
  //     bootbox.alert("邮箱格式有误！");
  //     return false;
  //   }
  // })

  $('.submitInfoCn').click(function () {
    var phoneNum = $.trim($('#phone').val());

    var email = $.trim($('#email').val());
    var name = $.trim($('#name').val());
    var part = $.trim($('#part').val());
    var advice = $.trim($('#advice').val());
    if(email.length>0 && name.length>0&& phoneNum.length>0){
        $.post('https://www.airdoc.com/api/sendEmail',{"email":email,
            "phone":phoneNum,
            "interest_type":part,
            "interest_description": advice,
            "username":name
        },function(res){
            var ss='ss'
        })
        bootbox.alert("提交成功");
    }else{
        bootbox.alert("请检查是否漏掉了姓名，邮箱，电话中的一项或多项！")
    }
  })

    $('.submitInfoEn').click(function () {
        var phoneNum = $.trim($('#phone').val());
        var email = $.trim($('#email').val());
        var name = $.trim($('#name').val());
        var part = $.trim($('#part').val());
        var advice = $.trim($('#advice').val());
        if(email.length>0 && name.length>0&& phoneNum.length>0){
            $.post('https://www.airdoc.com/api/sendEmail',{"email":email,
                "phone":phoneNum,
                "interest_type":part,
                "interest_description": advice,
                "username":name
            },function(res){
                var ss='ss'
            })
            bootbox.alert("Thank you for your submission");
        }else{
            bootbox.alert("Please check if name, email or phone are all filled out.")
        }

    })

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
    var obj = document.getElementById('FloatLayer');
    obj.addEventListener('touchend', function(event) {
        $('.mobilecolmd8').removeClass('mobilecolmd8show')
        $('.header').css('position','fixed');
        $('#logoPic').css('position','fixed');
        $('#FloatLayer').css('display','none');
    }, false);

    $('#contactUsButton').click(function(){
    console.log($('#serveContact').css('display'))
    if($('#serveContact').css('display') =='none'){
        $('#serveContact').css('display','block')
    }else{
        $('#serveContact').css('display','none')
    }
  })
  $('.close').click(function(){
      if($('#serveContact').css('display') =='none'){
          $('#serveContact').css('display','block')
      }else{
          $('#serveContact').css('display','none')
      }
  })

})