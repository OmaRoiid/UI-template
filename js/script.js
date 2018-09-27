$(function () {


    'use strict';
    //header edit 
    var myhedaer =  $('.header');
    var myslider = $('.bxslider');
    myhedaer.height($(window).height());
    $(window).resize(function(){

        myhedaer.height($(window).height());
        myslider.each(function(){


            $(this).css('paddingTop' , ($(window).height()-$('.bxslider li').height()) /2);


        });
    });
    // activ other linkes 

    $('.Linkes li a').click(function(){

        $(this).parent().addClass('active').siblings().removeClass('active');

    });
    // start of slider 
    myslider.each(function(){


        $(this).css('paddingTop' , ($(window).height()-$('.bxslider li').height()) /2);


    });
    myslider.bxSlider();

    $('.Linkes li a ').click(function (){

        $('html , body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top  //B7ded el mkan ely 3wez aro7 bzabt 

        }, 1000);
    });
    // our slider

    (function autoslider() {
        $('.slider .active').each(function () {



            if(!$(this).is(':last-child')){


                $(this).delay(3000).fadeOut(1000,function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoslider();
                });
            }

            else{

                $(this).delay(3000).fadeOut(1000,function(){


                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoslider();
                });    

            }

        });


    }());
//mix it up in my project block 
$('#Container').mixItUp();
//Mover Slected Class
$('.mixup li').click(function (){

$(this).addClass('slect').siblings().removeClass('slect');
});






});
