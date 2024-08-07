document.addEventListener('DOMContentLoaded', ()=> {
    const timeElement = document.getElementById('timer');

    let date = parseViewData(timeElement);

    const interval = setInterval(() => {
        if (isEndedTimer(date)) {
            finishInterval(interval);
            return;
        }

        date = minusSecondFromDate(date);
        updateCounter(timeElement, date);
    }, 1000);
});

function parseViewData(timeElement) {
    let [hours, minutes, seconds] = timeElement.innerText.split(':').map(num => parseInt(num));

    const date = new Date();

    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);

    return date;
}

function minusSecondFromDate(date) {
    return new Date( +date - 1000 );
}

function isEndedTimer(date) {
    return date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0;
}

function finishInterval(interval) {
    clearInterval(interval);
    alert('Вы победили в конкурсе!');
}

function updateCounter(timeElement, date) {
    timeElement.innerText = `${getDatePartView(date.getHours())}:${getDatePartView(date.getMinutes())}:${getDatePartView(date.getSeconds())}`;
}

function getDatePartView(number) {
    return number < 10 ? `0${number}` : number;
}
