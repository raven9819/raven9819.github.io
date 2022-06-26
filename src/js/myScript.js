"use strict"


let siteType = prompt("Тип сайта", "0-Сайт визитка, 1-Корпоративный сай, 2-интернет магазин");
let design = prompt("Дизайн", "3-Уникальный дизайн, 4-Шаблонный дизайн");
let adaptability = prompt("Адаптивность", "5-Адаптивный, 6-Не адаптивный");

let result = 0;

let deadlines = [
    "4 дня ",
    "5 дней ",
    "6 дней ",
    "7 дней ",
    "8 дней ",
    ];
let price = [
    " 4000р ",
    " 5000р ",
    " 6000р ",
    " 7000р ",
    " 7000р ",
    ];

function calc() {
    if (siteType = 0, design = 4, adaptability = 6) {
        result = deadlines[0] + price[0];
    } else if (siteType = 0, design = 4, adaptability = 5) {
        result = deadlines[2] + price[2];
    } else if (siteType = 0, design = 3, adaptability = 6) {
        result = deadlines[1] + price[1];
    } else if (siteType = 0, design = 3, adaptability = 5) {
        result = deadlines[2] + price[2];
    } else if (siteType = 1, design = 4, adaptability = 6) {
        result = deadlines[2] + price[2];
    } else if (siteType = 1, design = 4, adaptability = 5) {
        result = deadlines[3] + price[3];
    } else if (siteType = 1, design = 3, adaptability = 6) {
        result = deadlines[3] + price[3];
    } else if (siteType = 1, design = 3, adaptability = 5) {
        result = deadlines[4] + price[4];
    } else if (siteType = 2, design = 4, adaptability = 6) {
        result = deadlines[2] + price[2];
    } else if (siteType = 2, design = 4, adaptability = 5) {
        result = deadlines[3] + price[3];
    } else if (siteType = 2, design = 3, adaptability = 6) {
        result = deadlines[3] + price[3];
    } else if (siteType = 2, design = 3, adaptability = 5) {
        result = deadlines[4] + price[4];
    }
};
calc();

alert(result);
