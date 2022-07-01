"use strict"


let siteType, designAnswer, adaptability;


let calculator = {
    price: [
           [300, 300, 500, 1000],
           [500, 500, 1000, 5000],
           [1000, 1000, 3000, 7000]
           ],
    days: [
           [1, 1, 3, 5],
           [1, 1, 2, 3],
           [4, 4, 7, 10]
           ],
    run(site, design, adaptive) {
        let sum = calculator.price[0][site - 1] + calculator.price[1][design - 1] + calculator.price[2][adaptive - 1];
        let time = calculator.days[0][site - 1] + calculator.days[1][design - 1] + calculator.days[2][adaptive - 1];
        $('#price').text(sum);
        $('#days').text(time);
    }
};



$('.adaptability').click(function () {
    siteType = $('.siteType').val();
    designAnswer = $('.designAnswer').val();
    adaptability = $('.adaptability').val();
    calculator.run(siteType, designAnswer, adaptability);
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

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.animate__animated');
elements.each((i, el) => {
    observer.observe(el);
});

function onEntry (entry) {
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('animate__zoomInDown');
        }
    });
}

$('.keisBlock').magnificPopup({
  delegate: 'img', 
  type: 'image'
  
});

setTimeout(function(){ 
    $("#discount").click();
}, 10000);






