"use strict"
new WOW().init();

  function calculate(){
       let sum = parseInt($(".siteType option:selected").val()) + parseInt($(".designAnswer option:selected").val()) + parseInt($(".adaptability option:selected").val());
       let days = parseInt($(".siteType option:selected").attr("days")) + parseInt($(".designAnswer option:selected").attr("days")) + parseInt($(".adaptability option:selected").attr("days"));
        $("#price").text(sum);
        $("#days").text(days);
    }
  calculate();
    $("select").on("change", function(){
       calculate();
    });




$(function () {

    var target_block = $(".anim1");
    var blockStatus = true;

    $(window).scroll(function () {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false;

            $({
                numberValue: 0
            }).animate({
                numberValue: 120
            }, {

                duration: 4000,
                easing: "linear",

                step: function (val) {

                    $(".anim1").html(Math.ceil(val));
                }
            });
        }
    });
});

$(function () {

    var target_block = $(".anim2");
    var blockStatus = true;

    $(window).scroll(function () {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false;

            $({ numberValue: 2000}).animate({numberValue: 4600}, {

                duration: 10000,
                easing: "linear",

                step: function (val) {

                    $(".anim2").html(Math.ceil(val));
                }
            });
        }
    });
});

$(function () {

    var target_block = $(".anim3");
    var blockStatus = true;

    $(window).scroll(function () {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false;

            $({ numberValue: 100}).animate({numberValue: 340}, {

                duration: 10000,
                easing: "linear",

                step: function (val) {

                    $(".anim3").html(Math.ceil(val));
                }
            });
        }
    });
});


$(function () {

    var target_block = $(".anim4");
    var blockStatus = true;

    $(window).scroll(function () {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if (scrollEvent && blockStatus) {

            blockStatus = false;

            $({ numberValue: 0}).animate({numberValue: 23}, {

                duration: 5000,
                easing: "linear",

                step: function (val) {

                    $(".anim4").html(Math.ceil(val));
                }
            });
        }
    });
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top -62 + "px"});
});
 

$('.keisBlock').magnificPopup({
  delegate: 'img', 
  type: 'image'
  
});

setTimeout(function(){ 
    $("#discount").click();
}, 10000);

$("#inputTel").mask("+7(999) 999-9999");

$('form').submit(function(event){
    
    if ($("#inputTel").val() == "" ||$("#inputEmail3").val() == "") {
        event.preventDefault();
    alert('Заполните все поля');
}
});




