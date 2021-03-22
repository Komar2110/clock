'use strict';

// setInterval(() => {
//     const date = new Date();
//     document.querySelector('#hours').innerHTML = getZero(date.getHours());
//     document.querySelector('#minutes').innerHTML = getZero(date.getMinutes());
//     document.querySelector('#seconds').innerHTML = getZero(date.getSeconds());
//     document.querySelector('#day').innerHTML = getZero(date.getDate());
//     document.querySelector('#month').innerHTML = getZero(`${date.getMonth()+1}`);
//     document.querySelector('#year').innerHTML = date.getFullYear();
// }, 1000);

// function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

document.addEventListener('DOMContentLoaded', () => {
const time = new Date();

function getTime(mytime) {
    const t = mytime,
          hours = t.getHours(),
          minutes = t.getMinutes(),
          seconds = t.getSeconds(),
          day = `${t.getDate()+1}`,
          month = t.getMonth(),
          year = t.getFullYear();

        return {
            'total':t,
            hours,
            minutes,
            seconds,
            day,
            month,
            year
        };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}



function setClock(clock, mytime) {
    const time = document.querySelector(clock),
          hours = time.querySelector('#hours'),
          minutes = time.querySelector('#minutes'),
          seconds = time.querySelector('#seconds'),
          day = time.querySelector('#day'),
          month = time.querySelector('#month'),
          year = time.querySelector('#year');
          setInterval(updateTime, 1000);
          
          updateTime();

    function updateTime() {
        
        const t = getTime(new Date());

        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
        day.innerHTML = getZero(t.day);
        month.innerHTML = getZero(`${t.month+1}`);
        year.innerHTML = getZero(t.year);

        const full = document.querySelector('.full_date');
        for (let i=0; i<6; i++) {
            if (seconds.innerHTML / 10 == i) {
                full.style.backgroundImage = `url(img/image${i+1}.jpg)`;                
                full.style.transition = 'background 2s linear';
            }    
        }
    }
}
setClock('.clock', time);
});