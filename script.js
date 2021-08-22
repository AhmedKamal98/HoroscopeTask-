'use strict';

const isEmpty =function (str) {
    return (!str || str.length === 0 );
}
const isBlank = function (str) {
    return (!str || /^\s*$/.test(str));
}
const getName = function (){
    var userName = prompt("Please Enter your Name");
    while (true) {
        if (!(isEmpty(userName)) && !(isBlank(userName))) {
            break;
        } else {
            userName = getName();
        }
        
    }
    return userName;
}

const getPassword = function () {
    var password = prompt("Please Enter your Password");
    for (let index = 0; index < 3; index++) {
        if (password === "123") {
            break;
        }
        else if (index === 2) {
            alert("you’ve entered wrong password 3 times");
        }
        else {
            password = prompt("Please Enter your Password");
        }
    }
}

const getMonth = function () {
    var month = prompt("Please Enter your birth month");
    while (true) {
        if ((Number(month) >=1) && (Number(month) <= 12)) {
            break;
        } else {
            month = getMonth();
        }
    }
    return month;
}


const getDay = function () {
    var day = prompt("Please Enter your birth day");
    while (true) {
        if ((Number(day) >=1)&&(Number(day)<=31)) {
            switch (Number(themonth)) {
                case 2:
                    if (Number(day) >= 29) {
                        day = getDay();
                        return Number(day);
                    }
                case 4: case 6: case 9: case 11:
                    if (Number(day) >= 31){
                        day = getDay();
                        return Number(day);
                    }
                default:
                    if (Number(day) >= 32){
                        day = getDay();
                        return Number(day);
                    }
                return Number(day);
                }
            
        } else {
            day = getDay();
        }
    } 
}

const getHoroscope = function (day,month) {
    if (month === 1 && day >=20 || month === 2 && day <= 18) {alert ("Hello " + thename + ", Your horoscope is Aquarius");}
    if (month === 2 && day >=19 || month === 3 && day <= 20) {alert ("Hello " + thename + ", Your horoscope is Pisces");}
    if (month === 3 && day >=21 || month === 4 && day <=19) {alert ("Hello " + thename + ", Your horoscope is Aries");}
    if (month === 4 && day >=20 || month === 5 && day <=20) {alert ("Hello " + thename + ", Your horoscope is Taurus");}
    if (month === 5 && day >=21 || month === 6 && day <=21) {alert ("Hello " + thename + ", Your horoscope is Gemini");}
    if (month === 6 && day >=22 || month === 7 && day <=22) {alert ("Hello " + thename + ", Your horoscope is Cancer");}
    if (month === 7 && day >=23 || month === 8 && day <=22) {alert ("Hello " + thename + ", Your horoscope is Leo");}
    if (month === 8 && day >=23 || month === 9 && day <=22) {alert ("Hello " + thename + ", Your horoscope is Virgo");}
    if (month === 9 && day >=23 || month === 10 && day <=22) {alert ("Hello " + thename + ", Your horoscope is Libra");}
    if (month === 10 && day >=23 || month === 11 && day <=21) {alert ("Hello " + thename + ", Your horoscope is Scorpio");}
    if (month === 11 && day >=22 || month === 12 && day <=21) {alert ("Hello " + thename + ", Your horoscope is Sagittarius");}
    if (month === 12 && day >=22 || month === 1 && day <=19) {alert ("Hello " + thename + ", Your horoscope is Capricorn");}
}



var thename = getName();
getPassword();
var themonth = getMonth();
var theday = getDay();
getHoroscope(theday,Number(themonth));