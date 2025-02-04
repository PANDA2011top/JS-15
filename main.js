const form = document.getElementById("form");
const input = document.getElementById("input");
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const soz = document.getElementById("text");
const colorSelect = document.getElementById("colorSelect");

let count = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputValue = Number(input.value);
    count = inputValue;
    soz.textContent = count;
    input.value = "";
});

btnPlus.addEventListener("click", function () {
    count++;
    soz.textContent = count;
});

btnMinus.addEventListener("click", function () {
    count--;
    soz.textContent = count;
});

colorSelect.addEventListener("input", function () {
    soz.style.color = colorSelect.value;
});


