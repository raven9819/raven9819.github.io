"use strict"

let siteType, designAnswer, adaptability;


let calculator = {
    price: [
           [300, 500, 1000],
           [500, 1000, 5000],
           [1000, 3000, 7000]
           ],
    days: [
           [1, 3, 5],
           [1, 2, 3],
           [4, 7, 10]
           ],
    run(site, design, adaptive) {
        let sum = calculator.price[0][site - 2] + calculator.price[1][design - 2] + calculator.price[2][adaptive - 2];
        let time = calculator.days[0][site - 2] + calculator.days[1][design - 2] + calculator.days[2][adaptive - 2];
        $('#price').text(sum);
        $('#days').text(time);
    }
};


function getAnswers() {
    siteType = $('.siteType').change($(this).val());
    designAnswer = $('.designAnswer').change($(this).val());
    adaptability = $('.adaptability').change($(this).val());

    calculator.run(siteType, designAnswer, adaptability);
}
getAnswers();




