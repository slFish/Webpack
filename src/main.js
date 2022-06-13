import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { initializeClock, deadline } from "./timer.js";
import { tabNavs, tabPanes } from "./menu.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

const startbtn = document.getElementById("start__btn");
const startbtntest = document.getElementById("test_start__btn");

dateCalcForm.addEventListener("submit", handleCalcDates);


function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        console.log(firstDate, secondDate);
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

startbtn.addEventListener('click', () => {
    initializeClock('countdown', deadline)
    event.preventDefault
});


startbtntest.addEventListener('click', () => {
    let deadlineTest = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 5 * 1000);
    initializeClock('countdown', deadlineTest)
    event.preventDefault
});

